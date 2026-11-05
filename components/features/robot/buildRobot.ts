import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import type { RobotMaterials } from "./studio";

/** Head with visor, happy eyes, smile, ears and antenna. */
function buildHead(m: RobotMaterials) {
  const head = new THREE.Group();
  head.position.y = 1.35;
  head.add(new THREE.Mesh(new RoundedBoxGeometry(2.3, 1.7, 1.7, 8, 0.62), m.shell));
  const face = new THREE.Mesh(new RoundedBoxGeometry(1.86, 1.16, 0.4, 6, 0.18), m.visor);
  face.position.set(0, -0.02, 0.72);
  head.add(face);
  const shine = new THREE.Mesh(
    new THREE.PlaneGeometry(0.9, 0.12),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 }),
  );
  shine.position.set(-0.32, 0.38, 0.93);
  shine.rotation.z = 0.08;
  head.add(shine);

  const eyes = new THREE.Group();
  eyes.position.set(0, 0.06, 0.93);
  head.add(eyes);
  const eyeGeo = new THREE.TorusGeometry(0.17, 0.055, 12, 36, Math.PI);
  for (const x of [-0.4, 0.4]) {
    const e = new THREE.Mesh(eyeGeo, m.glow);
    e.position.x = x;
    eyes.add(e);
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.04, 10, 30, Math.PI), m.glow);
  smile.rotation.z = Math.PI;
  smile.position.set(0, -0.28, 0.93);
  head.add(smile);

  const earGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.22, 32);
  for (const x of [-1.2, 1.2]) {
    const ear = new THREE.Mesh(earGeo, m.accent);
    ear.rotation.z = Math.PI / 2;
    ear.position.set(x, 0, 0);
    head.add(ear);
  }
  const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 12), m.accent);
  stalk.position.y = 1.07;
  head.add(stalk);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.15, 24, 24), m.glow);
  bulb.position.y = 1.38;
  head.add(bulb);
  return { head, eyes, bulb };
}

/** Neck, body and the star on the chest. */
function addBody(robot: THREE.Group, m: RobotMaterials) {
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.36, 0.3, 24), m.accent);
  neck.position.y = 0.38;
  robot.add(neck);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.82, 0.55, 10, 32), m.shell);
  body.position.y = -0.62;
  body.scale.set(1, 1, 0.86);
  robot.add(body);
  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 40), m.visor);
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
  const core = new THREE.Mesh(new THREE.ShapeGeometry(star), m.glow);
  core.position.set(0, -0.5, 0.77);
  robot.add(core);
}

/** Two arms that pivot at the shoulder, so they swing naturally. */
function addArms(robot: THREE.Group, m: RobotMaterials) {
  const armGeo = new THREE.CapsuleGeometry(0.2, 0.62, 8, 20);
  const handGeo = new THREE.SphereGeometry(0.27, 28, 28);
  const makeArm = (side: 1 | -1) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.98, -0.2, 0);
    const arm = new THREE.Mesh(armGeo, m.accent);
    arm.position.y = -0.5;
    const hand = new THREE.Mesh(handGeo, m.shell);
    hand.position.y = -1.0;
    pivot.add(arm, hand);
    robot.add(pivot);
    return pivot;
  };
  return { armL: makeArm(-1), armR: makeArm(1) };
}

/** A soft round shadow on the floor, painted on a small canvas. */
function buildShadow() {
  const sc = document.createElement("canvas");
  sc.width = sc.height = 128;
  const g = sc.getContext("2d")!;
  const grd = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grd.addColorStop(0, "rgba(0,0,0,0.45)");
  grd.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 0.9),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -2.15;
  return shadow;
}

export type RobotParts = ReturnType<typeof buildRobot>;

/** Assembles the robot from primitives, adds it to the scene, and returns the parts that move. */
export function buildRobot(scene: THREE.Scene, m: RobotMaterials) {
  const robot = new THREE.Group();
  scene.add(robot);
  const { head, eyes, bulb } = buildHead(m);
  robot.add(head);
  addBody(robot, m);
  const { armL, armR } = addArms(robot, m);
  const shadow = buildShadow();
  scene.add(shadow);
  return { robot, head, eyes, bulb, armL, armR, shadow };
}
