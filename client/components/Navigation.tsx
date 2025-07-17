import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Plane,
  Mountain,
  Car,
} from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-travel-navy text-white py-2 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@rinkutravels.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        style={{ top: isScrolled ? "0" : "40px" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-travel-blue to-travel-green rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className={`text-2xl font-bold ${
                    isScrolled ? "text-travel-navy" : "text-white"
                  }`}
                >
                  Rinku Travels
                </h1>
                <p
                  className={`text-xs ${
                    isScrolled ? "text-travel-navy/70" : "text-white/80"
                  }`}
                >
                  Explore. Dream. Discover.
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`font-medium transition-colors duration-200 hover:text-travel-orange relative ${
                    isScrolled ? "text-travel-navy" : "text-white"
                  } ${
                    isActivePage(item.href)
                      ? isScrolled
                        ? "text-travel-blue font-semibold"
                        : "text-travel-orange font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                  {isActivePage(item.href) && (
                    <div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? "bg-travel-blue" : "bg-travel-orange"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="outline"
                className={`border-2 transition-all duration-200 ${
                  isScrolled
                    ? "border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
                    : "border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-travel-navy shadow-lg"
                }`}
              >
                Get Quote
              </Button>
              <Button className="bg-travel-orange hover:bg-travel-orange/90 text-white">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-travel-navy" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 hover:text-travel-orange transition-colors relative ${
                    isActivePage(item.href)
                      ? "text-travel-blue font-semibold"
                      : "text-travel-navy"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                  {isActivePage(item.href) && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-travel-blue rounded-r" />
                  )}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
                >
                  Get Quote
                </Button>
                <Button className="bg-travel-orange hover:bg-travel-orange/90 text-white">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
