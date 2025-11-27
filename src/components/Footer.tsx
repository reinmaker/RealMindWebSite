import logo from "@/assets/logo-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RealMind" className="h-12" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/80">
              © {new Date().getFullYear()} Real Mind. כל הזכויות שמורות.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">
              שאלות נפוצות
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              אודות
            </a>
            <Link to="/agencies" className="text-white/80 hover:text-white transition-colors">
              שותפויות
            </Link>
            <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-colors">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
