import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Button from "../components/Button";
import logo from "../assets/AcruxSiriuslogo-1.png";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setIsMobileMenuVisible(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setIsMobileMenuVisible(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  };

  return (
    <section>
      <header className="w-full fixed p-4 top-0 z-50">
        <nav className="container flex justify-between items-center py-3 mx-auto">
          <a href="#" className="w-10">
            <img src={logo} alt="Logo" className="w-full" />
          </a>

          <div className="hidden sm:flex items-center justify-between px-6 py-3 gap-10 glass-dark rounded-full">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-text-muted hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-4">
            {/* CTA Button */}
            <Button>
              Contact Me <ArrowUpRight size={18} />
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button className="block sm:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuVisible && (
          <div className="mt-6 mx-auto flex sm:hidden flex-col gap-5 glass-dark rounded-md px-6 py-3">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button>
              Contact Me <ArrowUpRight size={18} />
            </Button>
          </div>
        )}
      </header>
    </section>
  );
};

export default Navbar;
