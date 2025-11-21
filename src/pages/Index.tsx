import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import WhyHarder from "@/components/sections/WhyHarder";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    // Handle hash scrolling when navigating from other pages
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <WhyHarder />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
