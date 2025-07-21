import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Calendar,
  User,
  Users,
  Plane,
  Camera,
  Star,
  Shield,
  Heart,
} from "lucide-react";
import Footer from "../components/Footer";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  highlight?: string;
}

interface Office {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone Numbers",
    details: [
      "+91 98258 91999 (Mr. Alpesh Patel)",
      "+91 99985 45994 (Mr. Rinkesh Patel)",
    ],
    highlight: "24/7 Emergency Support",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Addresses",
    details: [
      "rinkutravels2005@gmail.com",
      "visa.rinkutravels2005@gmail.com",
      "packages.rinkutravels2005@gmail.com",
    ],
    highlight: "Response within 2 hours",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Head Office",
    details: [
      "B-102, Nirman complex",
      "Opp.Hocco Eatery Nr.Stadium Cross Roads",
      "Navrangpura, Ahmedabad - 380009",
      "Gujarat, India",
    ],
  },
    {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    details: [
      "Mon to Fri: 10:00 AM - 7:00 PM",
      "Sat: 10:00 AM - 5:30 PM",
      "Sunday: Closed",
    ],
    highlight: "Emergency support 24/7",
  },
];

const offices: Office[] = [
  {
    name: "Ahmedabad Head Office",
    address:
      "B-102, Nirman complex, Opp.Hocco Eatery Nr.Stadium Cross Roads, Navrangpura, Ahmedabad - 380009, Gujarat, India",
    phone: "+91 98258 91999",
    email: "rinkutravels2005@gmail.com",
    hours: "Mon-Fri: 10AM-7PM, Sat: 10AM-5:30PM, Sun: Closed",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    travelDate: "",
    travelers: "1",
    destination: "",
    budget: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    // Create WhatsApp message
    const phoneNumber = "919825891999";
    const message = `Hi! I'm interested in planning a trip.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Number of Travelers: ${formData.travelers}
Budget: ${formData.budget}
Message: ${formData.message}

Can you help me plan this trip?`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-travel-navy to-travel-blue text-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Ready to embark on your next adventure? Our travel experts are
                here to help you plan the perfect journey. Contact us today!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-travel-navy mb-6">
                  Plan Your Dream Trip
                </h2>
                <p className="text-travel-navy/70 mb-8">
                  Fill out the form below and our travel experts will get back
                  to you within 24 hours with a customized itinerary.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-travel-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-travel-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-travel-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-travel-navy mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors"
                        placeholder="What can we help you with?"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-travel-navy mb-2">
                        Preferred Travel Date
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-travel-navy mb-2">
                        Number of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5+">5+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-travel-navy mb-2">
                        Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors"
                        placeholder="Where would you like to go?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-travel-navy mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under ₹50,000">Under ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">
                          ₹50,000 - ₹1,00,000
                        </option>
                        <option value="₹1,00,000 - ₹2,00,000">
                          ₹1,00,000 - ₹2,00,000
                        </option>
                        <option value="Above ₹2,00,000">Above ₹2,00,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-travel-navy mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue transition-colors resize-none"
                      placeholder="Tell us about your dream trip..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white py-3 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="lg:pl-8">
                <h2 className="text-3xl font-bold text-travel-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-travel-navy/70 mb-8">
                  Get in touch with us through any of these channels. We're here
                  to help make your travel dreams come true.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {contactInfo.map((info, index) => {
                    const cardColors = [
                      "hover:bg-travel-blue/10 border-travel-blue/20",
                      "hover:bg-travel-blue/10 border-travel-blue/20",
                      "hover:bg-travel-blue/10 border-travel-blue/20",
                      "hover:bg-travel-blue/10 border-travel-blue/20",
                    ];
                    const iconColors = [
                      "bg-travel-blue",
                      "bg-travel-blue",
                      "bg-travel-blue",
                      "bg-travel-blue",
                    ];
                    return (
                      <div
                        key={index}
                        className={`text-center group ${cardColors[index]} border-2 rounded-2xl p-6 transition-all duration-300`}
                      >
                        <div
                          className={`w-16 h-16 ${iconColors[index]} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {info.icon}
                        </div>
                        <h3 className="text-xl font-bold text-travel-navy mb-3">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-3">
                          {info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-travel-navy/70 text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                        {info.highlight && (
                          <p className="text-sm text-travel-orange font-medium">
                            {info.highlight}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="tel:+919825891999"
                    className="flex items-center gap-4 p-4 bg-travel-blue text-white rounded-xl hover:bg-travel-blue/90 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-sm">Instant Support</p>
                    </div>
                  </a>
                  <a
                    href="mailto:rinkutravels2005@gmail.com"
                    className="flex items-center gap-4 p-4 bg-travel-blue text-white rounded-xl hover:bg-travel-blue/90 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-sm">Get Quote</p>
                    </div>
                  </a>
                  <button
                    onClick={() => {
                      const phoneNumber = "919825891999";
                      const message =
                        "Hi! I'm interested in planning a trip. Can you help me?";
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                    className="flex items-center gap-4 p-4 bg-travel-blue text-white rounded-xl hover:bg-travel-blue/90 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm">Chat Now</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="py-20 bg-gradient-to-br from-travel-light-blue to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Our Office Locations
              </h2>
                            <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Visit us at our office in Ahmedabad for personalized travel
                consultation.
              </p>
            </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-md mx-auto">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-travel-navy mb-3">
                      {office.name}
                    </h3>
                    <div className="space-y-3 text-sm text-travel-navy/70">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-travel-orange flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-travel-orange" />
                        <a
                          href={`tel:${office.phone}`}
                          className="hover:text-travel-blue"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-travel-orange" />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-travel-blue"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-travel-orange" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Why Choose Rinku Travels?
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Experience the difference with our personalized service and
                expert travel planning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-travel-navy mb-3">
                  Trusted & Secure
                </h3>
                <p className="text-travel-navy/70">
                  Licensed travel agency with comprehensive insurance coverage.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-travel-navy mb-3">
                  Expert Guides
                </h3>
                <p className="text-travel-navy/70">
                  Professional local guides with deep destination knowledge.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-travel-navy mb-3">
                  Personalized Service
                </h3>
                <p className="text-travel-navy/70">
                  Customized itineraries tailored to your preferences.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-travel-blue to-travel-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-travel-navy mb-3">
                  Global Network
                </h3>
                <p className="text-travel-navy/70">
                  Worldwide partnerships for seamless travel experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
