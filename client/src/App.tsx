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
