import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// cube.scale.x = 2;
scene.add(cube);

camera.position.z = 4;

const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

let clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate);
  cube.rotation.x = clock.getElapsedTime();
  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate();
