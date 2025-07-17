import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";

interface TourPackage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  destinations: string[];
  groupSize: string;
}

const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Himalayan Adventure",
    subtitle: "Experience the Majesty of Mountains",
    description:
      "Embark on an unforgettable journey through the breathtaking Himalayan ranges with expert guides and comfortable accommodations.",
    price: "₹45,999",
    duration: "8 Days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    destinations: ["Manali", "Leh", "Ladakh"],
    groupSize: "6-12 people",
  },
  {
    id: 2,
    title: "Kerala Backwaters",
    subtitle: "Serenity in God's Own Country",
    description:
      "Discover the tranquil beauty of Kerala's backwaters with luxurious houseboat stays and authentic local experiences.",
    price: "₹28,999",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    destinations: ["Alleppey", "Kumarakom", "Kochi"],
    groupSize: "4-8 people",
  },
  {
    id: 3,
    title: "Rajasthan Royal",
    subtitle: "Desert Palaces & Royal Heritage",
    description:
      "Step into the world of maharajas with palace stays, camel safaris, and cultural performances in the heart of Rajasthan.",
    price: "₹38,999",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    destinations: ["Jaipur", "Udaipur", "Jodhpur"],
    groupSize: "8-15 people",
  },
  {
    id: 4,
    title: "Goa Beach Bliss",
    subtitle: "Sun, Sand & Portuguese Heritage",
    description:
      "Relax on pristine beaches, explore historic churches, and enjoy vibrant nightlife in India's beach paradise.",
    price: "₹22,999",
    duration: "4 Days",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    destinations: ["North Goa", "South Goa", "Old Goa"],
    groupSize: "2-10 people",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % tourPackages.length);
      setIsTransitioning(false);
    }, 50);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + tourPackages.length) % tourPackages.length,
      );
      setIsTransitioning(false);
    }, 50);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 50);
  };

  const currentPackage = tourPackages[currentSlide];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {tourPackages.map((pkg, index) => (
          <div
            key={pkg.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div
              className={`transition-all duration-1000 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
                {currentPackage.title}
              </h1>
              <p className="text-2xl md:text-3xl text-travel-orange font-medium mb-6">
                {currentPackage.subtitle}
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                {currentPackage.description}
              </p>

              {/* Package Info */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-white/90">
                  <Calendar className="w-5 h-5 mr-2 text-travel-orange" />
                  <span className="font-medium">{currentPackage.duration}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Users className="w-5 h-5 mr-2 text-travel-orange" />
                  <span className="font-medium">
                    {currentPackage.groupSize}
                  </span>
                </div>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-5 h-5 mr-2 text-travel-orange" />
                  <span className="font-medium">
                    {currentPackage.destinations.join(", ")}
                  </span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-white">
                  <span className="text-lg text-white/80">Starting from</span>
                  <div className="text-4xl font-bold text-travel-orange">
                    {currentPackage.price}
                  </div>
                  <span className="text-sm text-white/80">per person</span>
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-travel-blue hover:bg-travel-blue/90 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    Book Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-travel-navy px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {tourPackages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-travel-orange scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
