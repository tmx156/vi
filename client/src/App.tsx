import { Switch, Route, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Create query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/home3"));
const About = lazy(() => import("@/pages/about"));
const Gallery = lazy(() => import("@/pages/gallery"));
const Locations = lazy(() => import("@/pages/locations"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

// Loading component
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="luxury-gradient text-xl font-serif animate-pulse">Loading...</div>
    </div>
  );
}

function Router() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingClick = () => setIsBookingOpen(true);

  return (
    <>
      <ScrollToTop />
      <Navigation onBookingClick={handleBookingClick} />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={() => <Home onBookingClick={handleBookingClick} />} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/locations" component={Locations} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer onBookingClick={handleBookingClick} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Router />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </div>
    </QueryClientProvider>
  );
}

