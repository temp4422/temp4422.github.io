import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// const renderer = new THREE.WebGLRenderer()
const renderer = new THREE.WebGLRenderer({ alpha: true }) // Add alpha for transparent bg
const controls = new OrbitControls(camera, renderer.domElement)

// Render scene
const box = document.querySelector('#box')
renderer.setSize(box.clientWidth, box.clientHeight)
// renderer.setSize(window.innerWidth, window.innerHeight)
box.appendChild(renderer.domElement)

// Add lights
const ambient = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 0.9)
scene.add(ambient)
const light = new THREE.DirectionalLight()
light.position.set(0.2, 1, 1)
// light.castShadow = true
scene.add(light)

// Set camera position
camera.position.set(20, 30, 30)

// Add controls
//controls.update() must be called after any manual changes to the camera's transform
controls.update()
controls.enableZoom = false

// Add 3d object from assets
const loader = new GLTFLoader()
loader.load(
  // '/assets/3d/x-drive.glb',
  '/assets/3d/cake.glb',
  (gltf) => {
    const model = gltf.scene
    model.translateY(-15)
    scene.add(model)

    // Animate object 60times/second
    function animate() {
      model.rotation.y += 0.005
      renderer.render(scene, camera)
      // controls.update()
    }
    renderer.setAnimationLoop(animate)
  },
  undefined,
  (error) => console.error(error)
)
