import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-white.svg";

const navLinks = [
  { href: "#hero", label: "בית", isRoute: false },
  { href: "#how-it-works", label: "איך זה עובד", isRoute: false },
  { href: "#testimonials", label: "המלצות", isRoute: false },
  { href: "#pricing", label: "מחירים", isRoute: false },
  { href: "#faq", label: "שאלות נפוצות", isRoute: false },
  { href: "#about", label: "אודות", isRoute: false }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, navigate to home page with hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {isScrolled ? (
              <img src="/realestate-exam-logo-outline.svg" alt="RealMind" className="h-10" />
            ) : (
              <img src={logo} alt="RealMind" className="h-12" />
            )}
            <h1 className={`text-xl font-bold font-varela transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>RealMind</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors hover:text-accent cursor-pointer ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/agencies">
              <Button
                className={`rounded-full ${
                  isScrolled 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                סוכנויות נדלן
              </Button>
            </Link>
            <Button
              className="bg-accent hover:bg-accent/90 text-white rounded-full"
              onClick={() => window.location.href = 'https://app.realmind.co.il'}
            >
              הירשם עכשיו
            </Button>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/agencies">
              <Button
                size="sm"
                className={`rounded-full text-xs px-3 py-1.5 ${
                  isScrolled 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                סוכנויות
              </Button>
            </Link>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-white rounded-full text-xs px-3 py-1.5"
              onClick={() => window.location.href = 'https://app.realmind.co.il'}
            >
              הירשם
            </Button>
            {/* Mobile Menu Button */}
            <button
              className={`${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-card rounded-b-2xl shadow-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground hover:text-accent font-medium transition-colors px-4 py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4">
                <Link to="/agencies" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full"
                  >
                    סוכנויות נדלן
                  </Button>
                </Link>
              </div>
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full"
                  onClick={() => {
                    window.location.href = 'https://app.realmind.co.il';
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
