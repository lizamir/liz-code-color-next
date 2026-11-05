import * as THREE from "three";
import { buildRobot } from "./buildRobot";
import { createRobotMotion } from "./robotMotion";
import { addLights, applyPageColors, createMaterials } from "./studio";

export type RobotHandle = {
  wave: () => void;
  look: (x: number, y: number) => void;
  recolor: () => void;
  dispose: () => void;
};

/**
 * Puts a small friendly robot on a canvas inside `host` and runs it: rendering, sizing, and pausing offscreen.
 * With `still`, it renders one frame and does not animate.
 */
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

  const materials = createMaterials();
  const lights = addLights(scene);
  const parts = buildRobot(scene, materials);
  applyPageColors(materials, lights);

  const resize = () => {
    const w = host.clientWidth,
      h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  const motion = createRobotMotion(parts);
  const clock = new THREE.Clock();
  let raf = 0,
    visible = true;
  const frame = () => {
    raf = 0;
    if (!visible) return;
    motion.pose(clock.getElapsedTime());
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  };
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !opts.still && !raf) raf = requestAnimationFrame(frame);
  });
  if (opts.still) {
    parts.armR.rotation.z = 0.18;
    parts.armL.rotation.z = -0.18;
    renderer.render(scene, camera);
  } else {
    io.observe(host);
  }

  return {
    wave: () => motion.wave(clock.getElapsedTime()),
    look: motion.look,
    recolor: () => {
      applyPageColors(materials, lights);
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
      Object.values(materials).forEach((m) => m.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
