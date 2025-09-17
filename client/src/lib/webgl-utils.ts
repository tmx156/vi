import { loadThreeJS, type ThreeJS } from './dynamic-loaders';

export async function initializeHeroCanvas(canvas: HTMLCanvasElement): Promise<() => void> {
  const THREE = await loadThreeJS();
  return setupWebGLScene(canvas, THREE);
}

function setupWebGLScene(canvas: HTMLCanvasElement, THREE: ThreeJS): () => void {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  
  // Create elegant particle system
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  const posArray = new Float32Array(particlesCount * 3);
  const scaleArray = new Float32Array(particlesCount);
  
  for (let i = 0; i < particlesCount * 3; i += 3) {
    // More refined distribution
    posArray[i] = (Math.random() - 0.5) * 8;
    posArray[i + 1] = (Math.random() - 0.5) * 8;
    posArray[i + 2] = (Math.random() - 0.5) * 6;
    
    scaleArray[i / 3] = Math.random() * 0.5 + 0.5;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.003,
    color: 0xdcb876,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Add subtle geometric elements
  const ringGeometry = new THREE.RingGeometry(2, 2.1, 64);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0xdcb876,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);
  
  camera.position.z = 4;
  
  let mouseX = 0;
  let mouseY = 0;
  let animationId: number;
  let time = 0;
  
  const handleMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    time += 0.005;
    
    // Elegant particle movement
    particlesMesh.rotation.y += 0.0008;
    particlesMesh.rotation.x = Math.sin(time * 0.5) * 0.1;
    
    // Ring animation
    ring.rotation.z += 0.002;
    ring.material.opacity = 0.05 + Math.sin(time) * 0.03;
    
    // Refined mouse interaction
    particlesMesh.rotation.y += mouseX * 0.00005;
    particlesMesh.rotation.x += mouseY * 0.00005;
    
    // Camera subtle movement
    camera.position.x = Math.sin(time * 0.3) * 0.1;
    camera.position.y = Math.cos(time * 0.2) * 0.05;
    
    renderer.render(scene, camera);
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);
  animate();
  
  return () => {
    cancelAnimationFrame(animationId);
    document.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
  };
}
