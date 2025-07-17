import { useEffect, useRef, useState } from "react";
import {
  Shield,
  Award,
  Users,
  Clock,
  Heart,
  Globe,
  Headphones,
  Star,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trusted & Secure",
    description:
      "Licensed travel agency with comprehensive insurance coverage and 24/7 emergency support for worry-free travel.",
    stat: "100% Secure",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Award Winning Service",
    description:
      "Recognized excellence in travel services with multiple industry awards and certifications for quality assurance.",
    stat: "15+ Awards",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Local Guides",
    description:
      "Knowledgeable local guides who bring destinations to life with authentic stories and hidden gems.",
    stat: "500+ Guides",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "15 Years Experience",
    description:
      "Over a decade of crafting unforgettable journeys with deep destination knowledge and industry expertise.",
    stat: "Since 2009",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Customer Satisfaction",
    description:
      "Consistently high ratings and repeat customers who trust us to create their perfect travel experiences.",
    stat: "98% Happy",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Network",
    description:
      "Extensive partnerships worldwide ensuring seamless travel experiences and exclusive access to unique locations.",
    stat: "50+ Countries",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support available before, during, and after your journey for complete peace of mind.",
    stat: "Always Here",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Premium Quality",
    description:
      "Carefully selected accommodations, transportation, and experiences that meet our high standards for excellence.",
    stat: "5-Star Rated",
  },
];

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    const featureElements =
      sectionRef.current?.querySelectorAll(".feature-item");
    featureElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-br from-travel-light-blue to-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-navy mb-6">
            Why Choose Rinku Travels?
          </h2>
          <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience crafting extraordinary journeys,
            we're your trusted partner in creating memories that last a
            lifetime.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-item group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visibleItems.includes(index)
                  ? `${index * 100}ms`
                  : "0ms",
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-travel-blue/5 to-travel-orange/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-travel-blue to-travel-green rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-travel-navy mb-3 group-hover:text-travel-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-travel-navy/70 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-travel-orange to-travel-green text-white font-bold rounded-full text-sm">
                  {feature.stat}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-travel-blue to-travel-orange group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-travel-navy mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-travel-navy/70 mb-6">
              Join thousands of happy travelers who chose Rinku Travels
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-travel-blue hover:bg-travel-blue/90 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
                Plan My Trip
              </button>
              <button className="border-2 border-travel-orange text-travel-orange hover:bg-travel-orange hover:text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
                View Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
