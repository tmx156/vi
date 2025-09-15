// Mobile-critical CSS inliner for ultra-fast FCP
export const getMobileCriticalCSS = () => {
  return `
    /* ULTRA-CRITICAL mobile styles for instant FCP */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; -webkit-text-size-adjust: 100%; }
    body { 
      margin: 0; padding: 0; font-family: 'Montserrat', sans-serif; 
      background: linear-gradient(135deg, #1a1a2e, #16213e); color: #f2f0e6; 
      -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeSpeed; overflow-x: hidden; min-height: 100vh; min-height: 100dvh;
    }
    .hero-section { 
      position: relative; height: 100vh; height: 100dvh; display: flex; 
      align-items: center; justify-content: center; overflow: hidden;
      contain: layout style paint; transform: translateZ(0); backface-visibility: hidden;
    }
    .hero-bg { 
      position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
      object-fit: cover; z-index: 0; contain: layout style paint; 
      transform: translateZ(0); backface-visibility: hidden; will-change: auto;
      image-rendering: optimizeSpeed; image-rendering: -webkit-optimize-contrast;
    }
    .hero-content { 
      position: relative; z-index: 20; text-align: center; max-width: 64rem; 
      margin: 0 auto; padding: 0 1.5rem; contain: layout style paint; 
      transform: translateZ(0); backface-visibility: hidden;
    }
    .hero-title { 
      font-size: 2.5rem; font-weight: 300; margin-bottom: 2rem; line-height: 1; 
      letter-spacing: 0.05em; background: linear-gradient(135deg, #dcb876 0%, #e8d5a3 25%, #dcb876 50%, #c9a96e 75%, #dcb876 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      contain: layout style paint; opacity: 1 !important; transform: translateZ(0) !important;
      animation: none !important; transition: none !important; visibility: visible !important;
      display: block !important; background-size: 100% 100% !important; will-change: auto !important;
      backface-visibility: hidden !important; text-rendering: optimizeSpeed !important;
      -webkit-font-smoothing: antialiased !important; -moz-osx-font-smoothing: grayscale !important;
    }
    img { 
      max-width: 100%; height: auto; image-rendering: optimizeSpeed; 
      image-rendering: -webkit-optimize-contrast; contain: layout style paint; 
      transform: translateZ(0); backface-visibility: hidden; will-change: auto;
    }
    *, *::before, *::after { 
      animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; 
      transition-duration: 0.01ms !important; transition-delay: 0ms !important;
      animation-delay: 0ms !important; animation-fill-mode: none !important; 
      transition-timing-function: linear !important;
    }
    button, a, input, select, textarea { 
      touch-action: manipulation; -webkit-tap-highlight-color: transparent; 
      -webkit-touch-callout: none; -webkit-user-select: none; user-select: none;
      contain: layout style paint; transform: translateZ(0);
    }
    h1, h2, h3, h4, h5, h6, p, span, div, a, button { 
      text-rendering: optimizeSpeed; -webkit-font-smoothing: antialiased; 
      -moz-osx-font-smoothing: grayscale; font-smooth: never; -webkit-font-smooth: never;
      contain: layout style paint; transform: translateZ(0); backface-visibility: hidden; will-change: auto;
    }
  `;
};

// Inject critical CSS immediately for mobile
export const injectMobileCriticalCSS = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    const style = document.createElement('style');
    style.textContent = getMobileCriticalCSS();
    style.setAttribute('data-mobile-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
  }
};
