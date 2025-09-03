declare global {
  interface Window {
    THREE: any;
  }
}

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

  // Add camera flash lights with lens flare effect
  const flashLights = [];
  const flashGeometry = new THREE.SphereGeometry(0.1, 16, 16);
  const flareGeometry = new THREE.PlaneGeometry(0.8, 0.8);
  
  for (let i = 0; i < 6; i++) {
    // Main flash light
    const flashMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      emissive: 0xffffff,
      emissiveIntensity: 0
    });
    const flashLight = new THREE.Mesh(flashGeometry, flashMaterial);
    
    // Lens flare effect
    const flareMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthTest: false
    });
    const flareLight = new THREE.Mesh(flareGeometry, flareMaterial);
    
    // Position lights around the scene
    const angle = (i / 6) * Math.PI * 2;
    const radius = 2.5 + Math.random() * 1;
    flashLight.position.x = Math.cos(angle) * radius;
    flashLight.position.y = Math.sin(angle) * 1.5 + (Math.random() - 0.5) * 0.8;
    flashLight.position.z = Math.random() * 3 - 1.5;
    
    flareLight.position.copy(flashLight.position);
    flareLight.lookAt(camera.position);
    
    flashLights.push({
      mesh: flashLight,
      flare: flareLight,
      flashTimer: Math.random() * 150,
      flashDuration: 0,
      isFlashing: false,
      intensity: Math.random() * 0.5 + 0.5
    });
    
    scene.add(flashLight);
    scene.add(flareLight);
  }
  
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
    
    // Dramatic camera flash effects
    flashLights.forEach((flash, index) => {
      flash.flashTimer += 1;
      
      if (!flash.isFlashing && flash.flashTimer > 80 + Math.random() * 100) {
        // Start a new flash
        flash.isFlashing = true;
        flash.flashDuration = 0;
        flash.flashTimer = 0;
      }
      
      if (flash.isFlashing) {
        flash.flashDuration += 1;
        
        if (flash.flashDuration < 3) {
          // Intense flash burst
          const intensity = flash.intensity * (1.5 + Math.random() * 0.5);
          flash.mesh.material.opacity = intensity;
          flash.mesh.material.emissiveIntensity = intensity * 2;
          flash.mesh.scale.setScalar(3 + Math.random() * 2);
          
          // Lens flare effect
          flash.flare.material.opacity = intensity * 0.8;
          flash.flare.scale.setScalar(4 + Math.random() * 3);
          
          // Camera flash color variation
          if (Math.random() > 0.6) {
            flash.mesh.material.color.setHex(0xfff8dc); // Warm flash
            flash.flare.material.color.setHex(0xfff8dc);
          } else {
            flash.mesh.material.color.setHex(0xffffff); // Cool flash
            flash.flare.material.color.setHex(0xffffff);
          }
        } else if (flash.flashDuration < 12) {
          // Quick fade out
          const fadeOut = 1 - ((flash.flashDuration - 3) / 9);
          flash.mesh.material.opacity = flash.intensity * fadeOut;
          flash.mesh.material.emissiveIntensity = flash.intensity * fadeOut * 2;
          flash.mesh.scale.setScalar(1 + fadeOut * 2);
          
          flash.flare.material.opacity = flash.intensity * fadeOut * 0.6;
          flash.flare.scale.setScalar(1 + fadeOut * 4);
        } else {
          // End flash
          flash.isFlashing = false;
          flash.mesh.material.opacity = 0;
          flash.mesh.material.emissiveIntensity = 0;
          flash.mesh.scale.setScalar(1);
          flash.flare.material.opacity = 0;
          flash.flare.scale.setScalar(1);
          flash.mesh.material.color.setHex(0xffffff);
          flash.flare.material.color.setHex(0xffffff);
        }
      }
    });
    
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
