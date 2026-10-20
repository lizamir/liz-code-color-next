"use client";

/* GradientWaves shader adapted from React Bits, Copyright (c) 2026 David Haz. License: /licenses/react-bits.txt. Native WebGL lifecycle by Liz Code & Color. */

import { useEffect, useRef, useState } from "react";
import { useMotionOff } from "@/lib/a11y";
import { THEMES, useTheme } from "@/lib/theme";

const VERTEX = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaveScale;
uniform float uWaveRatio;
uniform float uSwell;
uniform float uTurbulence;
uniform float uTilt;
uniform float uZoom;
uniform float uHeight;
uniform float uFogDepth;
uniform float uSteps;
uniform float uBrightness;
uniform float uOpacity;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec2 uMouse;
uniform float uParallax;
uniform bool uEnableMouse;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

const float MAX_DIST = 20000.0;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float plasma(vec3 r, vec2 freq, vec4 tc) {
  float mx = r.x + tc.x;
  mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);
  float my = r.y - tc.z;
  my += uTurbulence * cos(r.x / 23.0 + tc.w);
  return r.z - (sin(mx * freq.x) * uAmplitude + sin(my * freq.y) * uAmplitude + uHeight);
}

float raymarch(vec3 pos, vec3 dir, vec2 freq, vec4 tc) {
  float dist = 0.0;
  for (int i = 0; i < 128; i++) {
    if (float(i) >= uSteps) break;
    float dscene = plasma(pos + dist * dir, freq, tc);
    if (abs(dscene) < 0.1) break;
    dist += 0.9 * dscene;
    if (!(abs(dist) < MAX_DIST)) return MAX_DIST;
  }
  return dist;
}

void main() {
  float T = iTime * uSpeed;
  vec2 freq = vec2(uWaveScale / 7.0, (uWaveScale * uWaveRatio) / 3.0);
  vec4 tc = vec4(T / 0.130, T / 0.810, T / 0.200, T / 0.710);
  float c, s;
  float vfov = (3.14159 / 2.3) / max(uZoom, 0.05);
  vec3 cam = vec3(0.0, 0.0, 30.0);
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
  uv.x *= iResolution.x / iResolution.y;
  uv.y *= -1.0;

  vec3 dir = vec3(0.0, 0.0, -1.0);
  float ulen = length(uv);
  float xrot = vfov * ulen;
  c = cos(xrot); s = sin(xrot);
  dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  vec2 nuv = ulen > 1e-5 ? uv / ulen : vec2(1.0, 0.0);
  c = nuv.x; s = nuv.y;
  dir = mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0) * dir;
  c = cos(uTilt); s = sin(uTilt);
  dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;

  if (uEnableMouse) {
    float yaw = (uMouse.x - 0.5) * uParallax * 0.4;
    float pitch = (uMouse.y - 0.5) * uParallax * 0.4;
    c = cos(yaw); s = sin(yaw);
    dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;
    c = cos(pitch); s = sin(pitch);
    dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  }

  float dist = raymarch(cam, dir, freq, tc);
  vec3 pos = cam + dist * dir;

  float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);
  vec3 body = mix(uWaveColor, uCrestColor, clamp(pos.z * 0.08 + 0.5, 0.0, 1.0));
  vec3 col = mix(uHorizonColor, body, t);
  col *= uBrightness;
  col = clamp(col, 0.0, 1.0);

  float alpha = clamp(t, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(col * alpha, alpha);
}
`;

const UNIFORMS: Record<string, number> = {
  uSpeed: 0.2,
  uAmplitude: 2.5,
  uWaveScale: 0.6,
  uWaveRatio: 0.9,
  uSwell: 35,
  uTurbulence: 20,
  uTilt: 1.11,
  uZoom: 1,
  uHeight: 5.5,
  uFogDepth: 15,
  uSteps: 40,
  uBrightness: 1.1,
  uOpacity: 1,
  uGrain: 0,
  uGrainIntensity: 0,
  uParallax: 0.25,
};

/** Animated WebGL wave background for the hero, plus its pause/play toggle. */
export default function WaveBackground() {
  const hostRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const syncRef = useRef<() => void>(() => {});
  const reducedMotion = useMotionOff();
  const theme = useTheme();
  const colorsRef = useRef<(id: string) => void>(() => {});
  // null until the visitor presses the toggle; until then follow the OS preference.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reducedMotion;
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    pausedRef.current = paused;
    document.body.classList.toggle("motion-paused", paused);
    document.dispatchEvent(new CustomEvent("portfolio-motion", { detail: { paused } }));
    syncRef.current();
  }, [paused]);

  useEffect(() => {
    colorsRef.current(theme);
  }, [theme]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    const gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: true, antialias: false });
    if (!gl) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- WebGL support is only knowable after mount
      setSupported(false);
      return;
    }

    const compile = (type: number, source: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        throw Error("Shader compilation failed");
      }
      return s;
    };

    let program: WebGLProgram;
    try {
      program = gl.createProgram()!;
      gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw Error("Link failed");
    } catch {
      setSupported(false);
      return;
    }

    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const attr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);

    const loc = (n: string) => gl.getUniformLocation(program, n);
    for (const [n, v] of Object.entries(UNIFORMS)) gl.uniform1f(loc(n), v);
    gl.uniform1i(loc("uEnableMouse"), 1);
    const applyColors = (id: string) => {
      const [h, w, c] = (THEMES.find((t) => t.id === id) ?? THEMES[0]).wave;
      gl.uniform3fv(loc("uHorizonColor"), h);
      gl.uniform3fv(loc("uWaveColor"), w);
      gl.uniform3fv(loc("uCrestColor"), c);
    };
    colorsRef.current = (id) => {
      applyColors(id);
      draw();
    };
    applyColors(document.documentElement.dataset.theme ?? "violet");
    host.append(canvas);

    const mouse = [0.5, 0.5];
    const target = [0.5, 0.5];
    let visible = true;
    let frame = 0;
    let elapsed = 0;
    let last = 0;
    let lost = false;

    const draw = () => {
      gl.uniform1f(loc("iTime"), elapsed);
      gl.uniform2fv(loc("uMouse"), mouse);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const scale = Math.min(devicePixelRatio || 1, 1) * 0.7;
      canvas.width = Math.max(1, Math.round(bounds.width * scale));
      canvas.height = Math.max(1, Math.round(bounds.height * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(loc("iResolution"), canvas.width, canvas.height);
      draw();
    };
    const loop = (t: number) => {
      frame = 0;
      if (lost || pausedRef.current || !visible || document.hidden) return;
      if (last && t - last < 32) {
        frame = requestAnimationFrame(loop);
        return;
      }
      elapsed += last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      mouse[0] += (target[0] - mouse[0]) * 0.06;
      mouse[1] += (target[1] - mouse[1]) * 0.06;
      draw();
      frame = requestAnimationFrame(loop);
    };
    const sync = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
      if (!pausedRef.current && visible && !document.hidden && !lost) frame = requestAnimationFrame(loop);
    };
    syncRef.current = sync;

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    visibilityObserver.observe(host);
    document.addEventListener("visibilitychange", sync);

    const section = host.parentElement;
    const onPointer = (e: PointerEvent) => {
      if (pausedRef.current) return;
      const r = host.getBoundingClientRect();
      target[0] = (e.clientX - r.left) / r.width;
      target[1] = 1 - (e.clientY - r.top) / r.height;
    };
    section?.addEventListener("pointermove", onPointer);

    const onLost = (e: Event) => {
      e.preventDefault();
      lost = true;
      canvas.style.display = "none";
      sync();
    };
    const onRestored = () => {
      canvas.style.display = "none";
      setSupported(false);
    };
    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);

    resize();
    sync();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      syncRef.current = () => {};
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      section?.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      canvas.remove();
    };
  }, []);

  return (
    <>
      <div className="wave-background" aria-hidden="true" ref={hostRef}></div>
      <button
        id="motion-toggle"
        type="button"
        aria-pressed={!paused}
        hidden={!supported}
        onClick={() => setUserPaused(!paused)}
      >
        {paused ? "הפעלת תנועה ▶" : "השהיית תנועה ⏸"}
      </button>
    </>
  );
}
