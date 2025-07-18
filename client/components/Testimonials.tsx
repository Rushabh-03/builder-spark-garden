import { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  tour: string;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    review:
      "Absolutely incredible experience! The Himalayan trek was perfectly organized and our guide was knowledgeable and friendly. Every detail was taken care of, from comfortable accommodations to delicious meals. This trip exceeded all our expectations!",
    tour: "Himalayan Adventure",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b19c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "December 2024",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    review:
      "The Kerala backwater tour was magical! Staying in the houseboat was a unique experience. The team at Rinku Travels made sure everything went smoothly. The spice garden tour and Ayurveda treatments were highlights of our trip.",
    tour: "Kerala Backwaters",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "November 2024",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    review:
      "As international travelers, we were amazed by the level of service and attention to detail. The Golden Triangle tour was perfectly paced, and our guide's English was excellent. Rinku Travels made India accessible and enjoyable for us!",
    tour: "Golden Triangle",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "October 2024",
  },
  {
    id: 4,
    name: "Amit Patel",
    location: "Ahmedabad, India",
    rating: 4,
    review:
      "Great value for money! The Rajasthan heritage tour covered all major attractions and the palace hotel stay was unforgettable. The camel safari in Jaisalmer was an adventure of a lifetime. Highly recommend Rinku Travels!",
    tour: "Royal Rajasthan",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "September 2024",
  },
  {
    id: 5,
    name: "Lisa Chen",
    location: "Singapore",
    rating: 5,
    review:
      "The Ladakh adventure was breathtaking! The high-altitude landscapes and Buddhist monasteries created an almost spiritual experience. Despite the challenging terrain, everything was well-organized and safe. Worth every penny!",
    tour: "Ladakh Circuit",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "August 2024",
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Jaipur, India",
    rating: 5,
    review:
      "Perfect family vacation in Goa! The beach resorts were excellent and the water sports activities kept everyone entertained. The Portuguese heritage tour was educational and fun. Rinku Travels knows how to create perfect family experiences!",
    tour: "Goa Beach Bliss",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "July 2024",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 2; // 100% in 5 seconds (100/2 = 50 intervals * 100ms = 5000ms)
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentTestimonial, isAutoPlaying]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentTestimonial(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToTestimonial = (index: number) => {
    if (isTransitioning || index === currentTestimonial) return;
    setIsTransitioning(true);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setIsTransitioning(false);
      // Resume autoplay after 10 seconds
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }, 300);
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-travel-navy to-travel-navy/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Real experiences from real travelers who chose Rinku Travels for
            their adventures.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 transform scale-95"
                : "opacity-100 transform scale-100"
            }`}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Review Content */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-travel-navy/80 leading-relaxed mb-6 italic">
                "{currentReview.review}"
              </p>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < currentReview.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <img
                src={currentReview.avatar}
                alt={currentReview.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-travel-light-blue"
              />
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-travel-navy">
                  {currentReview.name}
                </h4>
                <p className="text-travel-navy/70">{currentReview.location}</p>
                <p className="text-sm text-travel-orange font-medium">
                  {currentReview.tour} • {currentReview.date}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center mt-12 gap-6">
          {/* Progress Indicators with Loading Animation */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-travel-orange scale-110"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              >
                {index === currentTestimonial && isAutoPlaying && (
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white/40 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
                <span
                  className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${
                    index === currentTestimonial
                      ? "text-white"
                      : "text-white/80"
                  }`}
                >
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
