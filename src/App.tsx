import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import UIUXDesign from "./pages/UIUXDesign";
import AnalyticsAutomation from "./pages/AnalyticsAutomation";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/analytics-automation" element={<AnalyticsAutomation />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
