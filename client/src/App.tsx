import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, lazy, Suspense } from "react";
import NotFound from "@/pages/not-found";
import Home3 from "@/pages/home3";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/contexts/ModalContext";

// Type declarations for JotForm scripts
declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, base: string) => void;
    JotformFeedback?: new (config: {
      formId: string;
      base: string;
      windowTitle: string;
      backgroundColor: string;
      fontColor: string;
      type: string;
      height: number;
      width: number;
      openOnLoad: boolean;
    }) => void;
  }
}

// Lazy load non-critical pages to reduce initial bundle size
const About = lazy(() => import("@/pages/about"));
const Gallery = lazy(() => import("@/pages/gallery"));
const Locations = lazy(() => import("@/pages/locations"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
// Import Test directly to avoid lazy loading issues
import Test from "@/pages/test";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Switch>
          <Route path="/" component={Home3} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/locations" component={Locations} />
          <Route path="/test" component={Test} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  // Modal handler function
  const handleOpenModal = () => {
    // This would typically open a modal, for now it's a placeholder
    console.log('Modal opened');
  };

  // Load JotForm scripts once at app level to persist across route changes
  useEffect(() => {
    // Check if scripts are already loaded
    if (document.querySelector('script[src="https://cdn.jotfor.ms/s/static/latest/static/feedback2.js"]')) {
      return;
    }

    // Load feedback script
    const feedbackScript = document.createElement('script');
    feedbackScript.src = 'https://cdn.jotfor.ms/s/static/latest/static/feedback2.js';
    feedbackScript.type = 'text/javascript';
    feedbackScript.async = true;

    // Load embed handler script
    const embedScript = document.createElement('script');
    embedScript.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    embedScript.async = true;

    document.head.appendChild(feedbackScript);
    document.head.appendChild(embedScript);

    // Initialize the form handler after scripts load
    embedScript.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='252563602964360']", "https://form.jotform.com/");
      }
    };

    // Initialize JotformFeedback after feedback script loads
    feedbackScript.onload = () => {
      if (window.JotformFeedback) {
        new window.JotformFeedback({
          formId: '252563602964360',
          base: 'https://form.jotform.com/',
          windowTitle: 'Clone of Form',
          backgroundColor: '#FFA500',
          fontColor: '#FFFFFF',
          type: '0',
          height: 500,
          width: 700,
          openOnLoad: false
        });
      }
    };

    return () => {
      // Don't remove scripts on cleanup to keep them across route changes
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ModalProvider openModal={handleOpenModal}>
          <Toaster />
          <Router />
        </ModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
