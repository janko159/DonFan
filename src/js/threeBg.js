import * as THREE from "three";
import images from "../js/images"


const container = document.querySelector(".background");
const loader = new THREE.TextureLoader();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
    antialias:true,
});

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.autoClear=true;
container.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(18, 10, 15,9);
const material = new THREE.MeshBasicMaterial({  map:loader.load(images)});

const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);

camera.position.z = 5;

const count = geometry.attributes.position.count;
const clock = new THREE.Clock();

console.log(count);

function animate(){

    const time = clock.getElapsedTime();
    for(let i = 0; i < count; i++){
        const x = geometry.attributes.position.getX(i); 
        const y = geometry.attributes.position.getY(i); 
    //animations

    const anim1 = 0.5* Math.sin(x*time * 0.05)
        geometry.attributes.position.setZ(i,anim1);
        geometry.computeVertexNormals();
        geometry.attributes.position.needsUpdate = true;
    }
    requestAnimationFrame(animate);
    

    renderer.render(scene,camera);
}

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

animate();