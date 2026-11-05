import * as THREE from "three";

export type RobotMaterials = ReturnType<typeof createMaterials>;

/** The robot's surfaces. Shell and accent take their color from the page (see applyPageColors). */
export function createMaterials() {
  return {
    shell: new THREE.MeshPhysicalMaterial({
      color: 0xf6f3ff,
      roughness: 0.32,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      sheen: 0.4,
    }),
    accent: new THREE.MeshPhysicalMaterial({ roughness: 0.38, clearcoat: 0.7, clearcoatRoughness: 0.2 }),
    visor: new THREE.MeshPhysicalMaterial({
      color: 0x1a0d13,
      roughness: 0.06,
      metalness: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
    }),
    glow: new THREE.MeshBasicMaterial({ color: 0xffd0de }),
  };
}

/** Studio lighting, like a product shot. Returns the lights that change with the page colors. */
export function addLights(scene: THREE.Scene) {
  const hemi = new THREE.HemisphereLight(0xffffff, 0x2c1520, 1.15);
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(3, 5, 6);
  const rim = new THREE.DirectionalLight(0xffffff, 3.2);
  rim.position.set(-5, 3, -4);
  const fill = new THREE.PointLight(0xffd0de, 2.2, 6);
  fill.position.set(0, 1.4, 2.4);
  scene.add(hemi, key, rim, fill);
  return { hemi, rim };
}

/** Reads a color token from the page's CSS. */
function pageColor(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return new THREE.Color((value || fallback) as THREE.ColorRepresentation);
}

/** Tints the robot and its lights with the page's palette (day or night). */
export function applyPageColors(m: RobotMaterials, lights: ReturnType<typeof addLights>) {
  const a = pageColor("--accent", "#c2456f");
  const light = pageColor("--accent-light", "#f3b3c7");
  m.accent.color.copy(a);
  m.shell.color.copy(new THREE.Color(0xffffff).lerp(light, 0.28));
  lights.rim.color.copy(light);
  lights.hemi.groundColor.copy(a.clone().multiplyScalar(0.35));
}
