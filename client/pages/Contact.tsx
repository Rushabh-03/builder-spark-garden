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
    details: ["+91 98765 43210", "+91 98765 43211"],
    highlight: "24/7 Emergency Support",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Addresses",
    details: ["info@rinkutravels.com", "support@rinkutravels.com"],
    highlight: "Response within 2 hours",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Head Office",
    details: [
      "123 Travel Street",
      "Connaught Place",
      "New Delhi - 110001, India",
    ],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    details: [
      "Monday - Saturday: 9:00 AM - 8:00 PM",
      "Sunday: 10:00 AM - 6:00 PM",
    ],
    highlight: "Emergency support 24/7",
  },
];

const offices: Office[] = [
  {
    name: "Delhi Head Office",
    address: "123 Travel Street, Connaught Place, New Delhi - 110001",
    phone: "+91 98765 43210",
    email: "delhi@rinkutravels.com",
    hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mumbai Branch",
    address: "456 Marine Drive, Mumbai - 400001",
    phone: "+91 98765 43212",
    email: "mumbai@rinkutravels.com",
    hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    image:
      "https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bangalore Office",
    address: "789 MG Road, Bangalore - 560001",
    phone: "+91 98765 43213",
    email: "bangalore@rinkutravels.com",
    hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const faqs = [
  {
    question: "How far in advance should I book my tour?",
    answer:
      "We recommend booking at least 2-3 months in advance for domestic tours and 3-6 months for international tours, especially during peak season. However, we can accommodate last-minute bookings based on availability.",
  },
  {
    question: "What is included in the tour package price?",
    answer:
      "Our tour packages typically include accommodation, meals as specified, transportation, professional guide services, entrance fees to attractions, and permits. International airfare, visa fees, travel insurance, and personal expenses are usually not included unless specified.",
  },
  {
    question: "Do you provide travel insurance?",
    answer:
      "While we strongly recommend travel insurance, we don't provide it directly. We can help you connect with trusted insurance providers and advise on the best coverage for your specific trip.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation policies vary by tour and season. Generally, cancellations 30+ days before departure incur 25% fee, 15-29 days incur 50% fee, and less than 14 days incur 75-100% fee. We provide detailed terms at booking.",
  },
  {
    question: "Are your tours suitable for solo travelers?",
    answer:
      "Absolutely! Many of our tours welcome solo travelers, and we can help match you with like-minded travelers. Some tours offer single room supplements, while others include twin-sharing arrangements.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    groupSize: "",
    budget: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "",
          travelDates: "",
          groupSize: "",
          budget: "",
          message: "",
          inquiryType: "general",
        });
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative h-96 bg-gradient-to-r from-travel-navy to-travel-blue">
          <div className="absolute inset-0 bg-black/20" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Ready to plan your next adventure? We're here to help you create
                unforgettable memories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-travel-orange/90 hover:bg-travel-orange text-white px-8 py-3 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Planning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-travel-navy px-8 py-3 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Multiple ways to reach us - choose what works best for you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center group hover:bg-travel-light-blue rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-travel-blue to-travel-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-travel-navy mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-travel-navy/70">
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
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-8 h-8" />
                <div>
                  <div className="font-semibold">Call Now</div>
                  <div className="text-sm opacity-90">Immediate assistance</div>
                </div>
              </a>
              <a
                href="mailto:info@rinkutravels.com"
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-8 h-8" />
                <div>
                  <div className="font-semibold">Send Email</div>
                  <div className="text-sm opacity-90">Detailed inquiries</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-8 h-8" />
                <div>
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-sm opacity-90">Instant responses</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="py-20 bg-gradient-to-br from-travel-light-blue to-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-travel-navy mb-6">
                  Plan Your Journey
                </h2>
                <p className="text-travel-navy/70 mb-8">
                  Fill out the form below and our travel experts will get back
                  to you within 24 hours with a personalized itinerary.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      Your inquiry has been submitted successfully. Our team
                      will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="booking">New Booking</option>
                          <option value="existing">Existing Booking</option>
                          <option value="custom">Custom Package</option>
                          <option value="group">Group Travel</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Destination
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                          placeholder="e.g., Himalayas, Kerala, Rajasthan"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Travel Dates
                        </label>
                        <input
                          type="text"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                          placeholder="e.g., March 2024 or Flexible"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Group Size
                        </label>
                        <select
                          name="groupSize"
                          value={formData.groupSize}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                        >
                          <option value="">Select group size</option>
                          <option value="1">Solo Traveler</option>
                          <option value="2">2 People</option>
                          <option value="3-5">3-5 People</option>
                          <option value="6-10">6-10 People</option>
                          <option value="10+">10+ People</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-25k">Under ₹25,000</option>
                          <option value="25k-50k">₹25,000 - ₹50,000</option>
                          <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                          <option value="above-100k">Above ₹1,00,000</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                        placeholder="Tell us about your dream trip, special requirements, or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white py-3 text-lg font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Why Choose Us */}
              <div>
                <h3 className="text-2xl font-bold text-travel-navy mb-6">
                  Why Choose Rinku Travels?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-travel-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-travel-navy mb-2">
                        Expert Travel Advisors
                      </h4>
                      <p className="text-travel-navy/70">
                        Our team of experienced travel professionals will help
                        you plan the perfect itinerary based on your interests
                        and budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-travel-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-travel-navy mb-2">
                        24/7 Support
                      </h4>
                      <p className="text-travel-navy/70">
                        Round-the-clock support before, during, and after your
                        trip. We're always here when you need us.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-travel-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-travel-navy mb-2">
                        Personalized Experiences
                      </h4>
                      <p className="text-travel-navy/70">
                        Every trip is tailored to your preferences, ensuring a
                        unique and memorable travel experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-travel-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-travel-navy mb-2">
                        Local Expertise
                      </h4>
                      <p className="text-travel-navy/70">
                        Our local guides and partners provide authentic insights
                        and access to hidden gems you won't find elsewhere.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 p-6 bg-white rounded-xl">
                  <h4 className="font-semibold text-travel-navy mb-4">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Our Office Locations
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Visit us at any of our convenient locations across India
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-travel-navy mb-4">
                      {office.name}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-travel-orange mt-0.5 flex-shrink-0" />
                        <span className="text-travel-navy/70">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-travel-orange" />
                        <span className="text-travel-navy/70">
                          {office.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-travel-orange" />
                        <span className="text-travel-navy/70">
                          {office.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-travel-orange" />
                        <span className="text-travel-navy/70">
                          {office.hours}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-travel-blue hover:bg-travel-blue/90">
                      Get Directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-gradient-to-br from-travel-light-blue to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full text-left p-6 hover:bg-travel-light-blue/30 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-travel-navy">
                        {faq.question}
                      </h3>
                      <div
                        className={`transform transition-transform ${
                          expandedFaq === index ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          className="w-5 h-5 text-travel-blue"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-travel-navy/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
