import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  MapPin,
  Star,
  Calendar,
  Thermometer,
  Camera,
  ArrowRight,
  Search,
  Filter,
  Mountain,
  Waves,
  TreePine,
  Building,
  Heart,
  Users,
} from "lucide-react";
import Footer from "../components/Footer";

interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  bestTime: string;
  temperature: string;
  image: string;
  gallery: string[];
  highlights: string[];
  category: string;
  rating: number;
  reviews: number;
  tourCount: number;
  priceFrom: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  duration: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Himalayas",
    country: "Nepal & India",
    description:
      "Experience the world's highest mountain range with breathtaking views, ancient monasteries, and challenging treks through pristine wilderness.",
    bestTime: "Oct - May",
    temperature: "-5°C to 15°C",
    category: "Mountain",
    rating: 4.9,
    reviews: 1247,
    tourCount: 12,
    priceFrom: "₹45,999",
    difficulty: "Challenging",
    duration: "7-21 Days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    highlights: [
      "Everest Base Camp",
      "Annapurna Circuit",
      "Buddhist Monasteries",
      "Sherpa Culture",
      "High Altitude Lakes",
    ],
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    country: "India",
    description:
      "Cruise through serene waterways lined with coconut palms, experience authentic village life, and enjoy Ayurvedic treatments in God's Own Country.",
    bestTime: "Dec - Mar",
    temperature: "23°C to 32°C",
    category: "Nature",
    rating: 4.8,
    reviews: 892,
    tourCount: 8,
    priceFrom: "₹28,999",
    difficulty: "Easy",
    duration: "4-7 Days",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1592037129877-34098d59e43b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    highlights: [
      "Houseboat Cruises",
      "Spice Plantations",
      "Ayurveda Spas",
      "Traditional Villages",
      "Wildlife Sanctuaries",
    ],
  },
  {
    id: 3,
    name: "Rajasthan",
    country: "India",
    description:
      "Discover the land of kings with majestic palaces, vibrant markets, desert safaris, and rich cultural heritage spanning centuries.",
    bestTime: "Nov - Mar",
    temperature: "10°C to 25°C",
    category: "Culture",
    rating: 4.7,
    reviews: 1156,
    tourCount: 15,
    priceFrom: "₹35,999",
    difficulty: "Moderate",
    duration: "5-12 Days",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    highlights: [
      "Majestic Palaces",
      "Thar Desert Safari",
      "Folk Performances",
      "Royal Heritage",
      "Colorful Markets",
    ],
  },
  {
    id: 4,
    name: "Goa Beaches",
    country: "India",
    description:
      "Relax on pristine beaches, explore Portuguese colonial architecture, enjoy vibrant nightlife, and indulge in fresh seafood cuisine.",
    bestTime: "Nov - Mar",
    temperature: "20°C to 32°C",
    category: "Beach",
    rating: 4.6,
    reviews: 2134,
    tourCount: 10,
    priceFrom: "₹22,999",
    difficulty: "Easy",
    duration: "3-6 Days",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    highlights: [
      "Pristine Beaches",
      "Water Sports",
      "Beach Clubs",
      "Portuguese Heritage",
      "Sunset Cruises",
    ],
  },
  {
    id: 5,
    name: "Ladakh",
    country: "India",
    description:
      "Explore the moonlike landscapes of the high Himalayas, visit ancient Buddhist monasteries, and experience unique Ladakhi culture.",
    bestTime: "May - Sep",
    temperature: "5°C to 20°C",
    category: "Adventure",
    rating: 4.9,
    reviews: 743,
    tourCount: 9,
    priceFrom: "₹52,999",
    difficulty: "Challenging",
    duration: "7-14 Days",
    image:
      "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    highlights: [
      "Pangong Lake",
      "Magnetic Hill",
      "Buddhist Monasteries",
      "High Altitude Desert",
      "Traditional Culture",
    ],
  },
  {
    id: 6,
    name: "Golden Triangle",
    country: "India",
    description:
      "Visit India's most iconic monuments including the Taj Mahal, explore vibrant Delhi, and discover the pink city of Jaipur.",
    bestTime: "Oct - Mar",
    temperature: "15°C to 30°C",
    category: "Heritage",
    rating: 4.5,
    reviews: 1890,
    tourCount: 18,
    priceFrom: "₹32,999",
    difficulty: "Easy",
    duration: "5-8 Days",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1477586957327-9c4de7c77473?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    highlights: [
      "Taj Mahal",
      "Red Fort",
      "Amber Palace",
      "India Gate",
      "Historical Museums",
    ],
  },
];

const categories = [
  "All",
  "Mountain",
  "Beach",
  "Culture",
  "Nature",
  "Adventure",
  "Heritage",
];

export default function Destinations() {
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = destinations;

    if (searchTerm) {
      filtered = filtered.filter(
        (dest) =>
          dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((dest) => dest.category === selectedCategory);
    }

    setFilteredDestinations(filtered);
  }, [searchTerm, selectedCategory]);

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

    const cardElements =
      sectionRef.current?.querySelectorAll(".destination-card");
    cardElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredDestinations]);

  const toggleFavorite = (destId: number) => {
    setFavorites((prev) =>
      prev.includes(destId)
        ? prev.filter((id) => id !== destId)
        : [...prev, destId],
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mountain":
        return <Mountain className="w-4 h-4" />;
      case "Beach":
        return <Waves className="w-4 h-4" />;
      case "Nature":
        return <TreePine className="w-4 h-4" />;
      case "Culture":
      case "Heritage":
        return <Building className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

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
                <div className="relative min-h-[500px] h-auto bg-gradient-to-r from-travel-navy to-travel-blue overflow-hidden pt-20 md:pt-28 pb-8">
          <div className="absolute inset-0 bg-black/20" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
                    <div className="relative z-10 container mx-auto px-6 h-full flex items-center py-8">
            <div className="text-white max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Amazing Destinations
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                From majestic mountains to pristine beaches, explore the world's
                most breathtaking destinations with expert guidance.
              </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-travel-orange/90 hover:bg-travel-orange text-white px-8 py-3 shadow-lg w-full sm:w-auto"
                >
                  Explore All Tours
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-travel-navy px-8 py-3 shadow-lg w-full sm:w-auto"
                >
                  Plan My Trip
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white shadow-md border-b">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-travel-blue text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {getCategoryIcon(category)}
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredDestinations.length} destinations
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="container mx-auto px-6 py-16" ref={sectionRef}>
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No destinations found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-travel-blue hover:bg-travel-blue/90"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <div
                  key={destination.id}
                  data-index={index}
                  className={`destination-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${
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
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-travel-orange text-white rounded-full text-sm font-medium">
                      {getCategoryIcon(destination.category)}
                      <span>{destination.category}</span>
                    </div>

                    {/* Favorite & Difficulty */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      <button
                        onClick={() => toggleFavorite(destination.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          favorites.includes(destination.id)
                            ? "bg-travel-blue text-white"
                            : "bg-white/30 text-white hover:bg-travel-blue"
                        }`}
                      >
                        <Heart
                          className="w-4 h-4"
                          fill={
                            favorites.includes(destination.id)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${getDifficultyColor(destination.difficulty)}`}
                        />
                        <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                          {destination.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Photo Count */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Camera className="w-4 h-4" />
                      <span>{destination.gallery.length}+</span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 right-4 text-white text-right">
                      <div className="text-sm text-white/80">From</div>
                      <div className="text-xl font-bold">
                        {destination.priceFrom}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title & Location */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-travel-navy mb-1 group-hover:text-travel-blue transition-colors">
                        {destination.name}
                      </h3>
                      <div className="flex items-center text-travel-navy/70 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{destination.country}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-travel-navy/70 text-sm mb-4 line-clamp-3">
                      {destination.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-travel-navy/70">
                        <Calendar className="w-4 h-4 mr-2 text-travel-orange" />
                        <span>{destination.bestTime}</span>
                      </div>
                      <div className="flex items-center text-travel-navy/70">
                        <Thermometer className="w-4 h-4 mr-2 text-travel-orange" />
                        <span>{destination.temperature}</span>
                      </div>
                      <div className="flex items-center text-travel-navy/70">
                        <Users className="w-4 h-4 mr-2 text-travel-orange" />
                        <span>{destination.tourCount} tours</span>
                      </div>
                      <div className="flex items-center text-travel-navy/70">
                        <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                        <span>
                          {destination.rating} ({destination.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights
                          .slice(0, 3)
                          .map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-travel-light-blue text-travel-blue px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        {destination.highlights.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{destination.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <Link to="/tours" className="flex-1">
                        <Button
                          size="sm"
                          className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white"
                        >
                          View Tours
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        onClick={() => {
                          console.log("Navigating to tour:", dest.id);
                          navigate(`/tour/${dest.id}`);
                        }}
                        variant="outline"
                        className="border-travel-orange text-travel-orange hover:bg-travel-orange hover:text-white"
                      >
                        View Tour
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-travel-navy to-travel-blue py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore the World?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our travel experts help you plan the perfect journey to any of
              these amazing destinations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-travel-orange hover:bg-travel-orange/90 text-white px-8 py-3 shadow-lg"
              >
                Start Planning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-travel-navy px-8 py-3 shadow-lg"
              >
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
