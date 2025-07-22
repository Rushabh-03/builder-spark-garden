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
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const getEmailForPage = () => {
    switch (location.pathname) {
      case "/visas":
        return "visa.rinkutravels2005@gmail.com";
      case "/tours":
        return "packages.rinkutravels2005@gmail.com";
      default:
        return "rinkutravels2005@gmail.com";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "Visas", href: "/visas" },
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
              <button
                onClick={() => (window.location.href = "tel:+919825891999")}
                className="flex items-center gap-2 hover:text-travel-orange transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 98258 91999</span>
              </button>
              <button
                onClick={() =>
                  (window.location.href = `mailto:${getEmailForPage()}`)
                }
                className="flex items-center gap-2 hover:text-travel-orange transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{getEmailForPage()}</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ahmedabad, Gujarat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300`}
        style={{
          top: isScrolled || isMobile ? "0" : "40px",
          background:
            isScrolled || isMobileMenuOpen
              ? "rgba(255, 255, 255, 0.98)"
              : "transparent",
          backdropFilter:
            isScrolled || isMobileMenuOpen ? "blur(16px)" : "none",
          boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Rinku Tours & Travels"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div>
                <h1
                  className={`text-xl font-bold ${
                    isScrolled || isMobileMenuOpen
                      ? "text-travel-navy"
                      : "text-white"
                  }`}
                >
                  Rinku Tours & Travels
                </h1>
                <p
                  className={`text-xs ${
                    isScrolled || isMobileMenuOpen
                      ? "text-travel-navy/70"
                      : "text-white/80"
                  }`}
                >
                  Enjoy The Travel Freedom
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
                    isScrolled || isMobileMenuOpen
                      ? "text-travel-navy"
                      : "text-white"
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
                onClick={() => {
                  const phoneNumber = "919825891999";
                  const message =
                    "Hi! I'm interested in getting a quote for a tour. Can you help me?";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className={`border-2 transition-all duration-200 ${
                  isScrolled
                    ? "border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
                    : "border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-travel-navy shadow-lg"
                }`}
              >
                Get Quote
              </Button>
              <Button
                onClick={() => {
                  const phoneNumber = "919825891999";
                  const message =
                    "Hi! I'm interested in booking a tour. Can you help me?";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="bg-travel-blue hover:bg-travel-blue/90 text-white"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className={`md:hidden p-2 rounded-lg transition-colors relative z-50 ${
                isScrolled || isMobileMenuOpen
                  ? "text-travel-navy"
                  : "text-white"
              }`}
              aria-label="Toggle mobile menu"
              type="button"
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
          className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-3 pl-6 pr-4 hover:text-travel-orange transition-colors relative ${
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
              <div className="flex flex-col gap-3 pt-6 mt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => {
                    const phoneNumber = "919825891999";
                    const message =
                      "Hi! I'm interested in getting a quote for a tour. Can you help me?";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white w-full"
                >
                  Get Quote
                </Button>
                <Button
                  onClick={() => {
                    const phoneNumber = "919825891999";
                    const message =
                      "Hi! I'm interested in booking a tour. Can you help me?";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-travel-blue hover:bg-travel-blue/90 text-white w-full"
                >
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
