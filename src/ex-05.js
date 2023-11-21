import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  const renderer = new THREE.WebGLBufferRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  renderer.render(scene, camera)
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
