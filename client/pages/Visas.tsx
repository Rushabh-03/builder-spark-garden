import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Globe,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  Calendar,
  DollarSign,
  Users,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Footer from "../components/Footer";

interface VisaService {
  id: number;
  country: string;
  flag: string;
  processingTime: string;
  price: string;
  validity: string;
  visaType: string;
  requirements: string[];
  description: string;
  popular: boolean;
}

const visaServices: VisaService[] = [
  {
    id: 1,
    country: "United States",
    flag: "🇺🇸",
    processingTime: "15-20 days",
    price: "₹18,000",
    validity: "10 years",
    visaType: "B1/B2 Tourist",
    requirements: [
      "Valid Passport",
      "DS-160 Form",
      "Visa Interview",
      "Financial Documents",
      "Travel Itinerary",
    ],
    description: "Tourist and business visa for the United States",
    popular: true,
  },
  {
    id: 2,
    country: "Schengen (Europe)",
    flag: "🇪🇺",
    processingTime: "10-15 days",
    price: "₹8,500",
    validity: "90 days",
    visaType: "Tourist/Business",
    requirements: [
      "Valid Passport",
      "Application Form",
      "Travel Insurance",
      "Hotel Bookings",
      "Flight Tickets",
    ],
    description: "Access to 26 European countries with single visa",
    popular: true,
  },
  {
    id: 3,
    country: "United Kingdom",
    flag: "🇬🇧",
    processingTime: "15-20 days",
    price: "₹12,000",
    validity: "6 months",
    visaType: "Standard Visitor",
    requirements: [
      "Valid Passport",
      "Online Application",
      "Biometrics",
      "Financial Proof",
      "Accommodation Details",
    ],
    description: "Tourist and business visitor visa for UK",
    popular: true,
  },
  {
    id: 4,
    country: "Canada",
    flag: "🇨🇦",
    processingTime: "20-30 days",
    price: "₹9,500",
    validity: "10 years",
    visaType: "Visitor Visa",
    requirements: [
      "Valid Passport",
      "Online Application",
      "Biometrics",
      "Medical Exam",
      "Police Certificate",
    ],
    description: "Temporary resident visa for Canada",
    popular: false,
  },
  {
    id: 5,
    country: "Australia",
    flag: "🇦🇺",
    processingTime: "15-25 days",
    price: "₹11,000",
    validity: "1 year",
    visaType: "eVisitor",
    requirements: [
      "Valid Passport",
      "Online Application",
      "Health Insurance",
      "Financial Proof",
      "Character Assessment",
    ],
    description: "Electronic visitor visa for Australia",
    popular: false,
  },
  {
    id: 6,
    country: "Dubai (UAE)",
    flag: "🇦🇪",
    processingTime: "3-5 days",
    price: "₹4,500",
    validity: "30 days",
    visaType: "Tourist Visa",
    requirements: [
      "Valid Passport",
      "Passport Photos",
      "Hotel Bookings",
      "Flight Tickets",
      "Sponsor Letter",
    ],
    description: "Tourist visa for United Arab Emirates",
    popular: true,
  },
];

export default function Visas() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredVisas =
    selectedCategory === "all"
      ? visaServices
      : visaServices.filter((visa) =>
          selectedCategory === "popular" ? visa.popular : !visa.popular,
        );

  const handleWhatsAppClick = () => {
    const phoneNumber = "919825891999";
    const message = "Hi! I'm interested in visa services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919825891999";
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:visa.rinkutravels2005@gmail.com?subject=Visa Inquiry";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-travel-navy to-travel-blue text-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Visa Services
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Expert visa assistance for hassle-free international travel. We
                handle all the paperwork so you can focus on planning your
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-travel-blue hover:bg-travel-blue/90 text-white px-8 py-3 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Consultation
                </Button>
                <Button
                  onClick={handleCallClick}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-travel-navy px-8 py-3 flex items-center gap-2 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call for Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-travel-navy mb-4">
                Why Choose Our Visa Services?
              </h2>
              <p className="text-travel-navy/70 max-w-2xl mx-auto">
                With years of experience and a high success rate, we make visa
                applications simple and stress-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-travel-navy mb-2">
                  98% Success Rate
                </h3>
                <p className="text-travel-navy/70">
                  High approval rate with expert guidance
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-travel-navy mb-2">
                  Fast Processing
                </h3>
                <p className="text-travel-navy/70">
                  Quick turnaround times for all visa types
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-travel-navy mb-2">
                  Expert Support
                </h3>
                <p className="text-travel-navy/70">
                  Dedicated visa consultants for personalized assistance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visa Categories Filter */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-6">
            <div className="flex justify-center gap-4">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className="rounded-full"
              >
                All Countries
              </Button>
              <Button
                variant={selectedCategory === "popular" ? "default" : "outline"}
                onClick={() => setSelectedCategory("popular")}
                className="rounded-full"
              >
                Popular Destinations
              </Button>
              <Button
                variant={selectedCategory === "other" ? "default" : "outline"}
                onClick={() => setSelectedCategory("other")}
                className="rounded-full"
              >
                Other Countries
              </Button>
            </div>
          </div>
        </div>

        {/* Visa Services Grid */}
        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVisas.map((visa) => (
                <div
                  key={visa.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Header */}
                  <div className="relative p-6 bg-travel-blue text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl mb-2">{visa.flag}</div>
                        <h3 className="text-xl font-bold">{visa.country}</h3>
                        <p className="text-white/80">{visa.visaType}</p>
                      </div>
                      {visa.popular && (
                        <div className="bg-travel-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          Popular
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-travel-navy/70 mb-4">
                      {visa.description}
                    </p>

                    {/* Key Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-travel-orange" />
                        <div>
                          <p className="text-sm text-travel-navy/60">
                            Processing
                          </p>
                          <p className="font-medium text-travel-navy">
                            {visa.processingTime}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-travel-orange" />
                        <div>
                          <p className="text-sm text-travel-navy/60">Price</p>
                          <p className="font-medium text-travel-navy">
                            {visa.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-travel-orange" />
                        <div>
                          <p className="text-sm text-travel-navy/60">
                            Validity
                          </p>
                          <p className="font-medium text-travel-navy">
                            {visa.validity}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-travel-orange" />
                        <div>
                          <p className="text-sm text-travel-navy/60">
                            Documents
                          </p>
                          <p className="font-medium text-travel-navy">
                            {visa.requirements.length} items
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-travel-navy mb-2">
                        Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {visa.requirements.slice(0, 3).map((req, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm text-travel-navy/70"
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {visa.requirements.length > 3 && (
                          <li className="text-sm text-travel-navy/50">
                            +{visa.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        onClick={handleWhatsAppClick}
                        className="flex-1 bg-travel-blue hover:bg-travel-blue/90"
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-travel-orange text-travel-orange hover:bg-travel-orange hover:text-white"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-travel-navy text-white py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Need Visa Assistance?</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our visa experts are here to help you with personalized guidance
                and support throughout the process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-white/80 mb-4">
                  Speak directly with our visa experts
                </p>
                <Button
                  onClick={handleCallClick}
                  className="bg-travel-blue hover:bg-travel-blue/90 text-white font-medium"
                >
                  +91 98258 91999
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-white/80 mb-4">
                  Send us your visa requirements
                </p>
                <Button
                  onClick={handleEmailClick}
                  className="bg-travel-blue hover:bg-travel-blue/90 text-white font-medium"
                >
                  Send Email
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-white/80 mb-4">
                  Quick responses via WhatsApp
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-travel-blue hover:bg-travel-blue/90"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
