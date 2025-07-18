<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";

const tourCategories = [
  {
    id: "adventure",
    name: "Adventure",
    color: "bg-red-100 text-red-800 hover:bg-red-200",
  },
  {
    id: "cultural",
    name: "Cultural",
    color: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  },
  {
    id: "beach",
    name: "Beach",
    color: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200",
  },
  {
    id: "wildlife",
    name: "Wildlife",
    color: "bg-green-100 text-green-800 hover:bg-green-200",
  },
];

export default function Footer() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "1234567890";
    const message = "Hi! I'm interested in planning a tour. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    // Replace with your actual phone number
    window.location.href = "tel:+1234567890";
  };

  const handleEmailClick = () => {
    // Replace with your actual email
    window.location.href = "mailto:info@tourcompany.com?subject=Tour Inquiry";
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Adventure Tours</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover the world with our expertly crafted tour packages. From
              thrilling adventures to cultural experiences, we make your travel
              dreams come true.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Start Planning
              </Button>
              <Button
                onClick={handleCallClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </Button>
            </div>
=======
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
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const tourCategories = [
    "Adventure Tours",
    "Cultural Tours",
    "Beach Holidays",
    "Mountain Treks",
    "Wildlife Safaris",
    "Spiritual Journeys",
  ];

  const destinations = [
    "Himalayas",
    "Kerala",
    "Rajasthan",
    "Goa",
    "Ladakh",
    "Golden Triangle",
  ];

  return (
    <footer className="bg-travel-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-travel-blue to-travel-green rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
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
>>>>>>> origin/main
          </div>

          {/* Tour Categories */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold mb-4">Tour Categories</h4>
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
=======
            <h4 className="text-xl font-bold mb-6">Tour Categories</h4>
            <ul className="space-y-3">
              {tourCategories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-travel-orange transition-colors duration-300"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
>>>>>>> origin/main
          </div>

          {/* Contact Info */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                info@tourcompany.com
              </button>
              <button
                onClick={handleCallClick}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                +1 (234) 567-8900
              </button>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                123 Adventure St, Travel City, TC 12345
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Adventure Tours. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Contact Us
            </Link>
=======
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-travel-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    123 Travel Street,
                    <br />
                    Connaught Place,
                    <br />
                    New Delhi - 110001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-travel-orange" />
                <div>
                  <p className="text-white/80">+91 98765 43210</p>
                  <p className="text-white/80">+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-travel-orange" />
                <p className="text-white/80">info@rinkutravels.com</p>
              </div>
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
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </footer>
  );
}
