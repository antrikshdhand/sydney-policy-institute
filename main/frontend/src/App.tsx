import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Join from "./pages/Join";
import Events from "./pages/Events";
import Partnerships from "./pages/Partnerships";
import EconomicPolicy from "./pages/initiatives/EconomicPolicy";
import MediaDemocracy from "./pages/initiatives/MediaDemocracy";
import HousingCities from "./pages/initiatives/HousingCities";
import AITech from "./pages/initiatives/AITech";
import ForeignPolicy from "./pages/initiatives/ForeignPolicy";
import OpEds from "./pages/publications/OpEds";
import Briefs from "./pages/publications/Briefs";
import Comics from "./pages/publications/Comics";
import Reels from "./pages/publications/Reels";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/join" element={<Join />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partnerships" element={<Partnerships />} />
          
          {/* Initiatives */}
          <Route path="/initiatives/economic-policy" element={<EconomicPolicy />} />
          <Route path="/initiatives/media-democracy" element={<MediaDemocracy />} />
          <Route path="/initiatives/housing-cities" element={<HousingCities />} />
          <Route path="/initiatives/ai-tech" element={<AITech />} />
          <Route path="/initiatives/foreign-policy" element={<ForeignPolicy />} />
          
          {/* Publications */}
          <Route path="/publications/op-eds" element={<OpEds />} />
          <Route path="/publications/briefs" element={<Briefs />} />
          <Route path="/publications/comics" element={<Comics />} />
          <Route path="/publications/reels" element={<Reels />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
