import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

// Animation
const tick = () => {

    const elapsedTime = clock.getElapsedTime()
    mesh.position.x = Math.sin(elapsedTime * 2)
    mesh.position.y = Math.cos(elapsedTime)
    mesh.position.z = Math.cos(elapsedTime * 0.5)
    mesh.rotation.x = elapsedTime
    mesh.rotation.y = elapsedTime

    const r = Math.abs(Math.sin(elapsedTime * 0.05))
    const g = Math.abs(Math.cos(elapsedTime * 0.05))
    const b = Math.abs(Math.sin(elapsedTime * 0.05))

    mesh.material.color = new THREE.Color(r, g , b)
    
    window.requestAnimationFrame(tick)

    renderer.render(scene, camera)
}

tick()
