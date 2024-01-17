import * as THREE from 'three';

export function initParticles() {
  var mousePos = {x:.5,y:.5};
  var phase = 0;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  var container = document.getElementById('particle-container');
  container.appendChild(renderer.domElement);

  var boxSize = 0.2;
  var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  var materialGreen = new THREE.MeshBasicMaterial({transparent: true,  color: "red",  opacity: 0.4,  side: THREE.DoubleSide});

  var pitchSegments = 60;
  var elevationSegments = pitchSegments/2;
  var particles = pitchSegments*elevationSegments
  var side = Math.pow(particles, 1/3);

  var radius = 16;

  var parentContainer = new THREE.Object3D();
  scene.add(parentContainer);

  for (var p = 0; p < pitchSegments; p++) {
    var pitch = Math.PI * 2 * p / pitchSegments ;
    for (var e = 0; e < elevationSegments; e++) {
      var elevation = Math.PI  * ((e / elevationSegments)-0.5)
      var particle = new THREE.Mesh(geometry, materialGreen);
      
      parentContainer.add(particle);

      var dest = new THREE.Vector3();
      dest.z = (Math.sin(pitch) * Math.cos(elevation)) * radius; //z pos in sphere
      dest.x = (Math.cos(pitch) * Math.cos(elevation)) * radius; //x pos in sphere
      dest.y = Math.sin(elevation) * radius; //y pos in sphere

      // Set the particle's position to the sphere position
      particle.position.copy(dest);
    }
  }


  function render() {
    phase += 0.002;

    parentContainer.rotation.y = phase*3;
    parentContainer.rotation.x = (mousePos.y-0.5) * Math.PI;
    parentContainer.rotation.z = (mousePos.x-0.5) * Math.PI;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();
}