import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Plane,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  MessageCircle,
} from "lucide-react";

const tourCategories = [
  {
    id: "adventure",
    name: "Adventure",
    color: "bg-travel-blue/10 text-travel-blue hover:bg-travel-blue/20",
  },
  {
    id: "cultural",
    name: "Cultural",
    color: "bg-travel-blue/10 text-travel-blue hover:bg-travel-blue/20",
  },
  {
    id: "beach",
    name: "Beach",
    color: "bg-travel-blue/10 text-travel-blue hover:bg-travel-blue/20",
  },
  {
    id: "wildlife",
    name: "Wildlife",
    color: "bg-travel-blue/10 text-travel-blue hover:bg-travel-blue/20",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const phoneNumber = "919825891999";
    const message = "Hi! I'm interested in planning a tour. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919825891999";
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:rinkutravels2005@gmail.com?subject=Tour Inquiry";
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-travel-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d3a31e4d4646768cdedd809fafd132%2F32b519e4083a46ec9e2fc63848b7f9ae?format=webp&width=800"
                  alt="Rinku Tours & Travels"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rinku Travels</h3>
                <p className="text-sm text-white/80">
                  Explore. Dream. Discover.
                </p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Creating unforgettable travel experiences since 2009. We
              specialize in authentic, immersive journeys that connect you with
              the heart and soul of every destination.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-travel-blue hover:bg-travel-blue/90 text-white flex items-center gap-2 justify-center"
              >
                <MessageCircle size={18} />
                Start Planning
              </Button>
              <Button
                onClick={handleCallClick}
                variant="outline"
                className="border-travel-orange text-travel-orange hover:bg-travel-orange hover:text-white flex items-center gap-2 justify-center"
              >
                <Phone size={18} />
                Call Now
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-travel-blue rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-travel-blue rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-travel-blue rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-travel-blue rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-travel-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-travel-orange transition-colors duration-300"
                >
                  Travel Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6">Tour Categories</h4>
            <div className="flex flex-col gap-2">
              {tourCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/tours?category=${category.id}`}
                  className="inline-block w-fit"
                >
                  <Badge
                    className={`${category.color} cursor-pointer transition-colors`}
                  >
                    {category.name}
                  </Badge>
                </Link>
              ))}
              <Link to="/tours" className="inline-block w-fit mt-2">
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer transition-colors">
                  View All Tours
                </Badge>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-travel-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    B-102, Nirman complex,
                    <br />
                    Opp.Hocco Eatery Nr.Stadium Cross Roads,
                    <br />
                    Navrangpura, Ahmedabad - 380009
                    <br />
                    Gujarat, India
                  </p>
                </div>
              </div>
              <button
                onClick={handleCallClick}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-travel-orange group-hover:scale-110 transition-transform" />
                <div>
                  <p>+91 98258 91999 (Mr. Alpesh Patel)</p>
                  <p>+91 99985 45994 (Mr. Rinkesh Patel)</p>
                </div>
              </button>
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-travel-orange group-hover:scale-110 transition-transform" />
                <div>
                  <p>rinkutravels2005@gmail.com</p>
                  <p className="text-sm">visa.rinkutravels2005@gmail.com</p>
                  <p className="text-sm">packages.rinkutravels2005@gmail.com</p>
                </div>
              </button>
            </div>

            {/* Operating Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-semibold mb-2">Operating Hours</h5>
              <p className="text-sm text-white/80">
                Mon - Sat: 9:00 AM - 8:00 PM
                <br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-4">
              Subscribe to Our Travel Newsletter
            </h4>
            <p className="text-white/80 mb-6">
              Get the latest travel tips, destination guides, and exclusive
              offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-travel-orange"
              />
              <button className="bg-travel-orange hover:bg-travel-orange/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/80">
              <p>© {currentYear} Rinku Travels. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-travel-orange fill-current" />
                <span>in India</span>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/80 hover:text-travel-orange transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-travel-orange transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-travel-orange transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
