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

interface TourDetails {
  id: number;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  images: string[];
  highlights: string[];
  difficulty: "Easy" | "Moderate" | "Challenging";
  category: string;
  description: string;
  availability: "Available" | "Limited" | "Sold Out";
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    activities: string[];
  }>;
  included: string[];
  excluded: string[];
  requirements: string[];
  testimonials: Array<{
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

// Mock data - in real app this would come from API
const tourData: TourDetails = {
  id: 1,
  title: "Himalayan Base Camp Trek",
  location: "Nepal & India",
  duration: "14 Days",
  groupSize: "8-12 people",
  rating: 4.9,
  reviews: 342,
  price: "₹65,999",
  originalPrice: "₹75,999",
  difficulty: "Challenging",
  category: "Adventure",
  availability: "Available",
  description:
    "Embark on the adventure of a lifetime with our comprehensive Himalayan Base Camp Trek. This carefully planned 14-day journey takes you through some of the most spectacular mountain scenery on Earth, offering breathtaking views of the world's highest peaks, unique Sherpa culture, and an unforgettable high-altitude adventure.",
  images: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  ],
  highlights: [
    "Everest Base Camp",
    "Sherpa Culture",
    "Mountain Views",
    "High Altitude Trek",
    "Buddhist Monasteries",
    "Suspension Bridges",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Kathmandu",
      description:
        "Welcome to Nepal! Transfer to hotel and trek briefing session.",
      activities: [
        "Airport pickup",
        "Hotel check-in",
        "Welcome dinner",
        "Trek briefing",
      ],
    },
    {
      day: 2,
      title: "Fly to Lukla, Trek to Phakding",
      description:
        "Scenic mountain flight to Lukla and begin trek to Phakding.",
      activities: [
        "Mountain flight",
        "Meet trekking crew",
        "Trek to Phakding",
        "Overnight in teahouse",
      ],
    },
    {
      day: 3,
      title: "Trek to Namche Bazaar",
      description: "Cross suspension bridges and ascend to the Sherpa capital.",
      activities: [
        "Cross Dudh Koshi River",
        "Enter Sagarmatha National Park",
        "First views of Everest",
        "Reach Namche Bazaar",
      ],
    },
    // Add more days as needed
  ],
  included: [
    "All accommodation (teahouses/lodges)",
    "All meals during trek",
    "Domestic flights (Kathmandu-Lukla-Kathmandu)",
    "Experienced trekking guide",
    "Porter service",
    "All permits and fees",
    "Medical kit and oxygen meter",
    "Airport transfers",
  ],
  excluded: [
    "International flights",
    "Nepal visa fees",
    "Travel insurance",
    "Personal equipment",
    "Tips for guides and porters",
    "Extra meals in Kathmandu",
    "Personal expenses",
  ],
  requirements: [
    "Good physical fitness required",
    "Previous trekking experience recommended",
    "Travel insurance mandatory",
    "Medical clearance for high altitude",
    "Proper trekking gear",
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b19c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      comment:
        "Absolutely incredible experience! The guides were professional and the views were breathtaking.",
      date: "October 2024",
    },
    {
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      comment: "Best adventure of my life! Everything was perfectly organized.",
      date: "September 2024",
    },
  ],
};

export default function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState<TourDetails | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // In real app, fetch tour details by ID
    setTour(tourData);
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
        return "bg-green-500";
      case "Moderate":
        return "bg-yellow-500";
      case "Challenging":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
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
                  ? "bg-red-500 text-white"
                  : "bg-white/20 text-white hover:bg-red-500"
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
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
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
                          ? "bg-green-100 text-green-800"
                          : tour.availability === "Limited"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
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
                        href="tel:+919876543210"
                        className="flex items-center gap-3 text-sm text-travel-navy/70 hover:text-travel-blue"
                      >
                        <Phone className="w-4 h-4" />
                        <span>+91 98765 43210</span>
                      </a>
                      <a
                        href="mailto:info@rinkutravels.com"
                        className="flex items-center gap-3 text-sm text-travel-navy/70 hover:text-travel-blue"
                      >
                        <Mail className="w-4 h-4" />
                        <span>info@rinkutravels.com</span>
                      </a>
                      <button className="flex items-center gap-3 text-sm text-travel-navy/70 hover:text-travel-blue">
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
