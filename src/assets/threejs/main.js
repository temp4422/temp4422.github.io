import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer() // Add alpha for transparent bg
// const renderer = new THREE.WebGLRenderer({ alpha: true }) // Add alpha for transparent bg

// Render scene
const box = document.querySelector('#box')
renderer.setSize(box.clientWidth, box.clientHeight)
// renderer.setSize(window.innerWidth, window.innerHeight)
box.appendChild(renderer.domElement)

// Add object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 3

// Animate object 60times/s
function animate() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)
