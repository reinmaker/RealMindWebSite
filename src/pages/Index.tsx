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
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const offset = 80; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    scrollToHash();
    
    // Also handle hash changes
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
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
