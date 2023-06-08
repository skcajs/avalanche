import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const mesh1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(mesh1)

const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 1, 32),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
mesh2.position.x = - 2
group.add(mesh2)

const mesh3 = new THREE.Mesh(
    new THREE.CylinderGeometry( 1, 1, 1, 32 ),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
mesh3.position.x = 2
group.add(mesh3)

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
scene.add(camera)

// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)