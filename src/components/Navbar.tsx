import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-white.svg";

const navLinks = [
  { href: "#hero", label: "בית" },
  { href: "#how-it-works", label: "איך זה עובד" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#pricing", label: "מחירים" },
  { href: "#faq", label: "שאלות נפוצות" },
  { href: "#about", label: "אודות" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex flex-col items-center gap-1">
            {!isScrolled && <img src={logo} alt="RealMind" className="h-12" />}
            <h1 className={`text-xl font-bold font-varela transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>RealMind</h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              className="bg-accent hover:bg-accent/90 text-white rounded-full"
              onClick={() => window.location.href = 'https://realmind.netlify.app/login'}
            >
              הירשם עכשיו
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-card rounded-b-2xl shadow-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-accent font-medium transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full"
                  onClick={() => {
                    window.location.href = 'https://realmind.netlify.app/login';
                    setIsMobileMenuOpen(false);
                  }}
                >
                  הירשם עכשיו
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
