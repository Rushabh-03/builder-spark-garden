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
          </div>

          {/* Tour Categories */}
          <div>
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
          </div>

          {/* Contact Info */}
          <div>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
