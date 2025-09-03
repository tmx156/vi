declare const THREE: any;

export function initializeHeroCanvas(canvas: HTMLCanvasElement): () => void {
  if (typeof window === 'undefined' || !window.THREE) {
    // Load Three.js dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/three@0.155.0/build/three.min.js';
    script.onload = () => {
      setupWebGLScene(canvas);
    };
    document.head.appendChild(script);
    return () => {};
  }

  return setupWebGLScene(canvas);
}

function setupWebGLScene(canvas: HTMLCanvasElement): () => void {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  
  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  const posArray = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: 0xd4af37,
    transparent: true,
    opacity: 0.8
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  camera.position.z = 3;
  
  let mouseX = 0;
  let mouseY = 0;
  let animationId: number;
  
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
    
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;
    
    // Mouse interaction
    particlesMesh.rotation.y += mouseX * 0.0001;
    particlesMesh.rotation.x += mouseY * 0.0001;
    
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
