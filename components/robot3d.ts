import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/**
 * A small friendly robot built from primitives, lit like a studio product shot.
 * Both arms move: the left one sways, the right one waves now and then (or on hover).
 * The body turns toward the pointer, the head looks a little further, the eyes blink.
 */
export type RobotHandle = { wave: () => void; look: (x: number, y: number) => void; recolor: () => void; dispose: () => void };

export function mountRobot(host: HTMLElement, opts: { still: boolean }): RobotHandle {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0.55, 10);
  camera.lookAt(0, 0.3, 0);

  /* ── colors come from the page theme ── */
  const css = () => getComputedStyle(document.documentElement);
  const col = (name: string, fallback: string) => new THREE.Color((css().getPropertyValue(name).trim() || fallback) as THREE.ColorRepresentation);

  const shell = new THREE.MeshPhysicalMaterial({ color: 0xf6f3ff, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.12, sheen: 0.4 });
  const accent = new THREE.MeshPhysicalMaterial({ roughness: 0.38, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  const visor = new THREE.MeshPhysicalMaterial({ color: 0x120d1f, roughness: 0.06, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.03 });
  const glow = new THREE.MeshBasicMaterial({ color: 0x9ff3ff });

  /* ── lights ── */
  const hemi = new THREE.HemisphereLight(0xffffff, 0x2a1d44, 1.15);
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(3, 5, 6);
  const rim = new THREE.DirectionalLight(0xffffff, 3.2);
  rim.position.set(-5, 3, -4);
  const fill = new THREE.PointLight(0x9ff3ff, 2.2, 6);
  fill.position.set(0, 1.4, 2.4);
  scene.add(hemi, key, rim, fill);

  /* ── robot ── */
  const robot = new THREE.Group();
  scene.add(robot);

  // head
  const head = new THREE.Group();
  head.position.y = 1.35;
  robot.add(head);
  head.add(new THREE.Mesh(new RoundedBoxGeometry(2.3, 1.7, 1.7, 8, 0.62), shell));
  const face = new THREE.Mesh(new RoundedBoxGeometry(1.86, 1.16, 0.4, 6, 0.18), visor);
  face.position.set(0, -0.02, 0.72);
  head.add(face);
  const shine = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.12), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 }));
  shine.position.set(-0.32, 0.38, 0.93);
  shine.rotation.z = 0.08;
  head.add(shine);

  const eyes = new THREE.Group();
  eyes.position.set(0, 0.06, 0.93);
  head.add(eyes);
  const eyeGeo = new THREE.TorusGeometry(0.17, 0.055, 12, 36, Math.PI);
  for (const x of [-0.4, 0.4]) {
    const e = new THREE.Mesh(eyeGeo, glow);
    e.position.x = x;
    eyes.add(e);
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.04, 10, 30, Math.PI), glow);
  smile.rotation.z = Math.PI;
  smile.position.set(0, -0.28, 0.93);
  head.add(smile);

  const earGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.22, 32);
  for (const x of [-1.2, 1.2]) {
    const ear = new THREE.Mesh(earGeo, accent);
    ear.rotation.z = Math.PI / 2;
    ear.position.set(x, 0, 0);
    head.add(ear);
  }
  const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 12), accent);
  stalk.position.y = 1.07;
  head.add(stalk);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.15, 24, 24), glow);
  bulb.position.y = 1.38;
  head.add(bulb);

  // neck and body
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.36, 0.3, 24), accent);
  neck.position.y = 0.38;
  robot.add(neck);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.82, 0.55, 10, 32), shell);
  body.position.y = -0.62;
  body.scale.set(1, 1, 0.86);
  robot.add(body);
  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 40), visor);
  chest.rotation.x = Math.PI / 2;
  chest.position.set(0, -0.5, 0.72);
  robot.add(chest);
  const star = new THREE.Shape();
  for (let i = 0; i < 8; i++) {
    const r = i % 2 ? 0.07 : 0.22;
    const a = (i / 8) * Math.PI * 2 + Math.PI / 2;
    if (i === 0) star.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else star.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  const core = new THREE.Mesh(new THREE.ShapeGeometry(star), glow);
  core.position.set(0, -0.5, 0.77);
  robot.add(core);

  // arms (pivot at the shoulder so they swing naturally)
  const armGeo = new THREE.CapsuleGeometry(0.2, 0.62, 8, 20);
  const handGeo = new THREE.SphereGeometry(0.27, 28, 28);
  const makeArm = (side: 1 | -1) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.98, -0.2, 0);
    const arm = new THREE.Mesh(armGeo, accent);
    arm.position.y = -0.5;
    const hand = new THREE.Mesh(handGeo, shell);
    hand.position.y = -1.0;
    pivot.add(arm, hand);
    robot.add(pivot);
    return pivot;
  };
  const armL = makeArm(-1);
  const armR = makeArm(1);

  // soft floor shadow
  const sc = document.createElement("canvas");
  sc.width = sc.height = 128;
  const g = sc.getContext("2d")!;
  const grd = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grd.addColorStop(0, "rgba(0,0,0,0.45)");
  grd.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3, 0.9), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -2.15;
  scene.add(shadow);

  const recolor = () => {
    const a = col("--accent", "#7f5bd6");
    const light = col("--accent-light", "#cbb9f5");
    accent.color.copy(a);
    shell.color.copy(new THREE.Color(0xffffff).lerp(light, 0.28));
    rim.color.copy(light);
    hemi.groundColor.copy(a.clone().multiplyScalar(0.35));
  };
  recolor();

  /* ── sizing ── */
  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  /* ── motion ── */
  let tx = 0, ty = 0, lx = 0, ly = 0, waveUntil = 0, nextWave = 2.5, blinkAt = 3, raf = 0, visible = true;
  const clock = new THREE.Clock();
  const pose = (t: number) => {
    lx += (tx - lx) * 0.08;
    ly += (ty - ly) * 0.08;
    robot.position.y = Math.sin(t * 1.5) * 0.12;
    robot.rotation.y = lx * 0.45 + Math.sin(t * 0.6) * 0.06;
    robot.rotation.x = ly * 0.08;
    head.rotation.y = lx * 0.25;
    head.rotation.x = ly * 0.22;
    head.rotation.z = Math.sin(t * 0.9) * 0.04;
    shadow.scale.setScalar(1 - Math.sin(t * 1.5) * 0.08);
    // left arm: a relaxed sway
    armL.rotation.z = -0.18 - Math.sin(t * 1.5 + 0.6) * 0.12;
    armL.rotation.x = Math.sin(t * 1.2) * 0.1;
    // right arm: hangs, then waves
    if (t > nextWave && waveUntil < t) {
      waveUntil = t + 2.2;
      nextWave = t + 7;
    }
    const waving = t < waveUntil;
    const targetZ = waving ? 2.55 + Math.sin(t * 11) * 0.32 : 0.18 + Math.sin(t * 1.5) * 0.12;
    armR.rotation.z += (targetZ - armR.rotation.z) * 0.16;
    // blink
    if (t > blinkAt) {
      eyes.scale.y = 0.12;
      if (t > blinkAt + 0.12) {
        eyes.scale.y = 1;
        blinkAt = t + 2.5 + Math.random() * 3;
      }
    }
    (bulb.material as THREE.MeshBasicMaterial).color.setHSL(0.52, 0.9, 0.72 + Math.sin(t * 3) * 0.08);
  };
  const frame = () => {
    raf = 0;
    if (!visible) return;
    pose(clock.getElapsedTime());
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  };
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !opts.still && !raf) raf = requestAnimationFrame(frame);
  });
  if (opts.still) {
    armR.rotation.z = 0.18;
    armL.rotation.z = -0.18;
    renderer.render(scene, camera);
  } else {
    io.observe(host);
  }

  return {
    wave: () => {
      const t = clock.getElapsedTime();
      if (waveUntil < t) waveUntil = t + 2.2;
    },
    look: (x, y) => {
      tx = x;
      ty = y;
    },
    recolor: () => {
      recolor();
      if (opts.still) renderer.render(scene, camera);
    },
    dispose: () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose();
      });
      [shell, accent, visor, glow].forEach((m) => m.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
