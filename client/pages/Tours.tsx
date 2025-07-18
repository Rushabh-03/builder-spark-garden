import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Filter,
  Search,
  X,
  SlidersHorizontal,
  ArrowRight,
  Camera,
  Heart,
} from "lucide-react";
import Footer from "../components/Footer";
import { featuredTours } from "@shared/tours";

const allTours = featuredTours;

const categories = [
  "all",
  "Adventure",
  "Culture",
  "Nature",
  "Beach",
  "Heritage",
];
const difficulties = ["All", "Easy", "Moderate", "Challenging"];
const durations = ["All", "1-5 Days", "6-10 Days", "11+ Days"];
const priceRanges = ["All", "Under ₹30k", "₹30k-₹50k", "₹50k+"];

export default function Tours() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredTours, setFilteredTours] = useState(allTours);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = allTours;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (tour) =>
          tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tour.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((tour) => tour.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty !== "All") {
      filtered = filtered.filter(
        (tour) => tour.difficulty === selectedDifficulty,
      );
    }

    // Duration filter
    if (selectedDuration !== "All") {
      filtered = filtered.filter((tour) => {
        const tourDays = parseInt(tour.duration);
        switch (selectedDuration) {
          case "1-5 Days":
            return tourDays <= 5;
          case "6-10 Days":
            return tourDays >= 6 && tourDays <= 10;
          case "11+ Days":
            return tourDays >= 11;
          default:
            return true;
        }
      });
    }

    // Price filter
    if (selectedPriceRange !== "All") {
      filtered = filtered.filter((tour) => {
        const price = parseInt(tour.price.replace(/[₹,]/g, ""));
        switch (selectedPriceRange) {
          case "Under ₹30k":
            return price < 30000;
          case "₹30k-₹50k":
            return price >= 30000 && price <= 50000;
          case "₹50k+":
            return price > 50000;
          default:
            return true;
        }
      });
    }

    setFilteredTours(filtered);
  }, [
    searchTerm,
    selectedCategory,
    selectedDifficulty,
    selectedDuration,
    selectedPriceRange,
  ]);

  const toggleFavorite = (tourId: number) => {
    setFavorites((prev) =>
      prev.includes(tourId)
        ? prev.filter((id) => id !== tourId)
        : [...prev, tourId],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedDifficulty("All");
    setSelectedDuration("All");
    setSelectedPriceRange("All");
    setSearchParams({});
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
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

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "text-green-600 bg-green-100";
      case "Limited":
        return "text-orange-600 bg-orange-100";
      case "Sold Out":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-travel-navy to-travel-blue text-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Amazing Tours
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Explore our comprehensive collection of tours and find your
                perfect adventure
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white shadow-lg border-b">
          <div className="container mx-auto px-6 py-6">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tours, destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
                >
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                </Button>
                {(selectedCategory !== "all" ||
                  selectedDifficulty !== "All" ||
                  selectedDuration !== "All" ||
                  selectedPriceRange !== "All" ||
                  searchTerm) && (
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Clear
                  </Button>
                )}
              </div>
            </div>

            {/* Quick Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => handleCategoryChange(category)}
                  className="rounded-full"
                >
                  {category === "all"
                    ? "All Tours"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>

            {/* Advanced Filter Controls */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                  >
                    {durations.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-travel-blue"
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Results Summary */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <span>
                Showing {filteredTours.length} of {allTours.length} tours
              </span>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="container mx-auto px-6 py-12">
          {filteredTours.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No tours found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters or search terms
              </p>
              <Button
                onClick={clearFilters}
                className="bg-travel-blue hover:bg-travel-blue/90"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <div
                  key={tour.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
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

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <div className="px-3 py-1 bg-travel-orange text-white rounded-full text-sm font-medium">
                        {tour.category}
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(tour.availability)}`}
                      >
                        {tour.availability}
                      </div>
                    </div>

                    {/* Difficulty and Favorite */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${getDifficultyColor(tour.difficulty)}`}
                        />
                        <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                          {tour.difficulty}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleFavorite(tour.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          favorites.includes(tour.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/30 text-white hover:bg-red-500"
                        }`}
                      >
                        <Heart
                          className="w-4 h-4"
                          fill={
                            favorites.includes(tour.id)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>
                    </div>

                    {/* Price */}
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
                    <h3 className="text-xl font-bold text-travel-navy mb-2 group-hover:text-travel-blue transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center text-travel-navy/70 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{tour.location}</span>
                    </div>

                    <p className="text-travel-navy/70 text-sm mb-4 line-clamp-2">
                      {tour.description}
                    </p>

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
                          <span className="ml-1 font-medium">
                            {tour.rating}
                          </span>
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
                        onClick={() => {
                          const phoneNumber = "919825891999";
                          const message = `Hi! I'm interested in booking the ${tour.title} tour. Can you help me?`;
                          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, "_blank");
                        }}
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
