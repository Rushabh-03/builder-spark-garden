import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Shield,
  Camera,
  Heart,
  Share2,
  ArrowLeft,
  CheckCircle,
  X,
  Phone,
  Mail,
  MessageCircle,
  Award,
  Globe,
} from "lucide-react";
import Footer from "../components/Footer";
import { TourDetails, toursData } from "@shared/tours";

export default function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState<TourDetails | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      const tourId = parseInt(id);
      const foundTour = toursData.find((tour) => tour.id === tourId);
      setTour(foundTour || null);
    }
  }, [id]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-travel-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading tour details...</p>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-travel-blue/70";
      case "Moderate":
        return "bg-travel-blue";
      case "Challenging":
        return "bg-travel-blue/90";
      default:
        return "bg-travel-blue/50";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative h-96 md:h-[500px] overflow-hidden pt-20 md:pt-28">
          <img
            src={tour.images[currentImageIndex]}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />

          {/* Back Button */}
          <Link
            to="/tours"
            className="absolute top-24 left-6 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>

          {/* Action Buttons */}
          <div className="absolute top-24 right-6 z-20 flex gap-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                isFavorite
                  ? "bg-travel-blue text-white"
                  : "bg-white/20 text-white hover:bg-travel-blue"
              }`}
            >
              <Heart
                className="w-6 h-6"
                fill={isFavorite ? "currentColor" : "none"}
              />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: tour?.title,
                    text: `Check out this amazing tour: ${tour?.title}`,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
            >
              <Share2 className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Tour Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-travel-orange rounded-full text-sm font-medium">
                      {tour.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${getDifficultyColor(tour.difficulty)}`}
                      />
                      <span className="text-sm">{tour.difficulty}</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {tour.title}
                  </h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-travel-orange">
                    {tour.price}
                  </div>
                  {tour.originalPrice && (
                    <div className="text-lg text-gray-300 line-through">
                      {tour.originalPrice}
                    </div>
                  )}
                  <div className="text-sm text-white/80">per person</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Tour Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-travel-navy mb-6">
                  Tour Overview
                </h2>
                <p className="text-travel-navy/80 leading-relaxed mb-6">
                  {tour.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-travel-navy mb-4">
                    Tour Highlights
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {tour.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-travel-light-blue rounded-lg"
                      >
                        <CheckCircle className="w-4 h-4 text-travel-blue" />
                        <span className="text-sm text-travel-navy">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-xl font-bold">{tour.rating}</span>
                    <span className="text-travel-navy/70">
                      ({tour.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">Verified Tour</span>
                  </div>
                </div>
              </section>

              {/* Itinerary */}
              <section>
                <h2 className="text-2xl font-bold text-travel-navy mb-6">
                  Detailed Itinerary
                </h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-travel-blue text-white rounded-full flex items-center justify-center font-bold">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-travel-navy mb-2">
                            Day {day.day}: {day.title}
                          </h3>
                          <p className="text-travel-navy/70 mb-4">
                            {day.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {day.activities.map((activity, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle className="w-3 h-3 text-travel-green" />
                                <span>{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Included/Excluded */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-travel-navy mb-4">
                      What's Included
                    </h3>
                    <div className="space-y-2">
                      {tour.included.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <span className="text-sm text-travel-navy/80">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-travel-navy mb-4">
                      What's Not Included
                    </h3>
                    <div className="space-y-2">
                      {tour.excluded.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5" />
                          <span className="text-sm text-travel-navy/80">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Requirements */}
              <section>
                <h3 className="text-xl font-bold text-travel-navy mb-4">
                  Requirements & Recommendations
                </h3>
                <div className="bg-travel-blue/5 border border-travel-blue/20 rounded-lg p-4">
                  <div className="space-y-2">
                    {tour.requirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-yellow-600 mt-0.5" />
                        <span className="text-sm text-yellow-800">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Reviews */}
              <section>
                <h2 className="text-2xl font-bold text-travel-navy mb-6">
                  Recent Reviews
                </h2>
                <div className="space-y-6">
                  {tour.testimonials.map((review, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-travel-navy">
                              {review.name}
                            </h4>
                            <span className="text-sm text-travel-navy/60">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-travel-navy/80">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-travel-navy">
                      {tour.price}
                    </div>
                    {tour.originalPrice && (
                      <div className="text-lg text-gray-500 line-through">
                        {tour.originalPrice}
                      </div>
                    )}
                    <div className="text-sm text-travel-navy/70">
                      per person
                    </div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                        tour.availability === "Available"
                          ? "bg-travel-blue/10 text-travel-blue"
                          : tour.availability === "Limited"
                            ? "bg-travel-blue/20 text-travel-blue"
                            : "bg-travel-blue/30 text-travel-blue"
                      }`}
                    >
                      {tour.availability}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button
                      onClick={() => setShowBookingModal(true)}
                      className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white py-3 text-lg font-semibold"
                      disabled={tour.availability === "Sold Out"}
                    >
                      {tour.availability === "Sold Out"
                        ? "Sold Out"
                        : "Book This Tour"}
                    </Button>
                    <Button
                      onClick={() => {
                        const phoneNumber = "919825891999";
                        const message = `Hi! I'm interested in getting a quote for the ${tour.title} tour. Can you help me?`;
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                      variant="outline"
                      className="w-full border-travel-orange text-travel-orange hover:bg-travel-orange hover:text-white"
                    >
                      Get Free Quote
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-travel-navy mb-4">
                      Need Help?
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="tel:+919825891999"
                        className="flex items-center gap-3 text-sm text-travel-navy/70 hover:text-travel-blue"
                      >
                        <Phone className="w-4 h-4" />
                        <span>+91 98258 91999</span>
                      </a>
                      <a
                        href="mailto:rinkutravels2005@gmail.com"
                        className="flex items-center gap-3 text-sm text-travel-navy/70 hover:text-travel-blue"
                      >
                        <Mail className="w-4 h-4" />
                        <span>rinkutravels2005@gmail.com</span>
                      </a>
                      <button
                        onClick={() => {
                          const phoneNumber = "919825891999";
                          const message = `Hi! I have questions about the ${tour.title} tour. Can you help me?`;
                          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, "_blank");
                        }}
                        className="flex items-center gap-3 text-sm text-travel-navy/70 hover:text-travel-blue"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat with us</span>
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <div className="flex items-center gap-2 text-sm text-travel-navy/70">
                      <Globe className="w-4 h-4" />
                      <span>Free cancellation up to 48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-travel-navy">
                  Book Tour
                </h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                    rows={3}
                    placeholder="Any special requirements or questions..."
                  />
                </div>

                <Button className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white py-3 text-lg font-semibold">
                  Submit Booking Request
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our terms and conditions. We'll
                  contact you within 24 hours to confirm your booking.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
