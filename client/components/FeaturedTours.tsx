import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Camera,
  ArrowRight,
} from "lucide-react";
import { featuredTours } from "@shared/tours";

export default function FeaturedTours() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "919825891999";
    const message = "Hi! I'm interested in booking a tour. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    const cardElements = sectionRef.current?.querySelectorAll(".tour-card");
    cardElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-navy mb-6">
            Featured Tours & Packages
          </h2>
          <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular destinations and experiences, carefully
            curated for unforgettable adventures.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour, index) => (
            <div
              key={tour.id}
              data-index={index}
              className={`tour-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visibleCards.includes(index)
                  ? `${index * 150}ms`
                  : "0ms",
              }}
            >
              {/* Image Container */}
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/tour/${tour.id}`)}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-travel-orange text-white rounded-full text-sm font-medium">
                  {tour.category}
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${getDifficultyColor(tour.difficulty)}`}
                  />
                  <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                    {tour.difficulty}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-2xl font-bold text-white">
                    {tour.price}
                  </div>
                  {tour.originalPrice && (
                    <div className="text-sm text-gray-300 line-through">
                      {tour.originalPrice}
                    </div>
                  )}
                </div>

                {/* Photo Count */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                  <Camera className="w-4 h-4" />
                  <span>{Math.floor(Math.random() * 50) + 20}+</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Title and Location */}
                <h3 className="text-xl font-bold text-travel-navy mb-2 group-hover:text-travel-blue transition-colors">
                  {tour.title}
                </h3>
                <div className="flex items-center text-travel-navy/70 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{tour.location}</span>
                </div>

                {/* Tour Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-travel-navy/70">
                    <Calendar className="w-4 h-4 mr-2 text-travel-orange" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-travel-navy/70">
                    <Users className="w-4 h-4 mr-2 text-travel-orange" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{tour.rating}</span>
                    </div>
                    <span className="text-sm text-travel-navy/70">
                      ({tour.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-travel-light-blue text-travel-blue px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    size="sm"
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-travel-blue hover:bg-travel-blue/90 text-white"
                  >
                    Book Now
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => navigate(`/tour/${tour.id}`)}
                    variant="outline"
                    className="border-travel-orange text-travel-orange hover:bg-travel-orange hover:text-white"
                  >
                    View Tour
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-travel-blue group-hover:w-full group-hover:left-0 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* View All Tours CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/tours")}
            className="bg-travel-blue hover:bg-travel-blue/90 text-white px-12 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
          >
            View All Tours
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
