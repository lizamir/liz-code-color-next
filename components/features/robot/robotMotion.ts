import * as THREE from "three";
import type { RobotParts } from "./buildRobot";

/** The robot's life: it floats, follows the pointer, sways one arm, waves the other now and then, and blinks. */
export function createRobotMotion(parts: RobotParts) {
  const { robot, head, eyes, bulb, armL, armR, shadow } = parts;
  let tx = 0, ty = 0, lx = 0, ly = 0, waveUntil = 0, nextWave = 2.5, blinkAt = 3;

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

  return {
    pose,
    /** Starts a wave unless one is already playing. */
    wave: (t: number) => {
      if (waveUntil < t) waveUntil = t + 2.2;
    },
    /** Sets where the robot looks, from -1 to 1 on each axis. */
    look: (x: number, y: number) => {
      tx = x;
      ty = y;
    },
  };
}
