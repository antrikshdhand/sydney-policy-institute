import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-academic-light border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Sydney Policy Institute</h3>
            <p className="text-sm text-muted-foreground">
              Policy made clear. Ideas made actionable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/publications/op-eds" className="text-muted-foreground hover:text-primary transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="font-body font-semibold mb-4">Initiatives</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/initiatives/job-security" className="text-muted-foreground hover:text-primary transition-colors">
                  Job Security & Inflation
                </Link>
              </li>
              <li>
                <Link to="/initiatives/immigration" className="text-muted-foreground hover:text-primary transition-colors">
                  Immigration & Justice
                </Link>
              </li>
              <li>
                <Link to="/initiatives/housing" className="text-muted-foreground hover:text-primary transition-colors">
                  Housing Policy
                </Link>
              </li>
              <li>
                <Link to="/initiatives/ai-regulation" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Regulation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/spi_usyd?igsh=MWhlcXh0bzNka3Y4bQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Sydney Policy Institute &copy; 2026. A student-led policy studio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
