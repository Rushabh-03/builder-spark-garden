import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import {
  Award,
  Users,
  Globe,
  Heart,
  Target,
  Eye,
  Shield,
  Star,
  Calendar,
  MapPin,
  Quote,
  CheckCircle,
  Plane,
  Camera,
  Mountain,
} from "lucide-react";
import Footer from "../components/Footer";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  image: string;
  description: string;
  specialities: string[];
}

interface Achievement {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rinkesh Patel",
    role: "Founder & CEO",
    experience: "15+ Years",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description:
      "Passionate traveler turned entrepreneur, Rinku founded the company with a vision to make authentic travel experiences accessible to everyone.",
    specialities: ["Adventure Travel", "Cultural Tours", "Team Leadership"],
  },
  {
    id: 2,
    name: "Priya Gupta",
    role: "Head of Operations",
    experience: "12+ Years",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description:
      "Expert in logistics and operations, Priya ensures every journey runs smoothly from planning to execution.",
    specialities: [
      "Operations Management",
      "Customer Service",
      "Quality Control",
    ],
  },
  {
    id: 3,
    name: "Alpesh Patel",
    role: "Proprietor",
    experience: "10+ Years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description:
      "Certified mountaineer and adventure guide, Arjun designs and leads our most challenging expeditions.",
    specialities: ["Mountain Climbing", "Trekking", "Safety Management"],
  },
  {
    id: 4,
    name: "Meera Singh",
    role: "Cultural Experience Designer",
    experience: "8+ Years",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description:
      "Cultural historian and local experience curator, Meera creates immersive cultural journeys that connect travelers with authentic traditions.",
    specialities: ["Cultural Tours", "Heritage Sites", "Local Communities"],
  },
];

const achievements: Achievement[] = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "25,000+",
    label: "Happy Travelers",
    description: "Satisfied customers who trusted us with their journeys",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    number: "50+",
    label: "Destinations",
    description: "Carefully curated destinations across multiple countries",
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "15+",
    label: "Industry Awards",
    description: "Recognition for excellence in travel and tourism",
  },
  {
    icon: <Star className="w-8 h-8" />,
    number: "4.8/5",
    label: "Average Rating",
    description: "Consistently high ratings from our valued customers",
  },
];

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion for Travel",
    description:
      "We believe travel has the power to transform lives, create connections, and build understanding between cultures.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Safety First",
    description:
      "Your safety is our top priority. We maintain the highest safety standards and provide comprehensive support throughout your journey.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Local Communities",
    description:
      "We work closely with local communities, ensuring our travels benefit the places we visit and the people who call them home.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Authentic Experiences",
    description:
      "We create genuine, immersive experiences that go beyond typical tourism to reveal the true essence of each destination.",
  },
];

export default function About() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const testimonials = [
    {
      quote:
        "Rinku Travels transformed how I see the world. Their attention to detail and genuine care for travelers is unmatched.",
      author: "Sarah Johnson",
      location: "London, UK",
      tour: "Golden Triangle Experience",
    },
    {
      quote:
        "The team's expertise and passion shine through in every aspect of the journey. Truly a life-changing experience.",
      author: "Michael Chen",
      location: "San Francisco, USA",
      tour: "Himalayan Adventure",
    },
    {
      quote:
        "Professional, friendly, and incredibly knowledgeable. They made our dream vacation a perfect reality.",
      author: "Emma Wilson",
      location: "Sydney, Australia",
      tour: "Kerala Backwaters",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            if (sectionId && !visibleSections.includes(sectionId)) {
              setVisibleSections((prev) => [...prev, sectionId]);
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const setSectionRef = (sectionId: string) => (ref: HTMLDivElement | null) => {
    sectionRefs.current[sectionId] = ref;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Story, Your Adventure
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Discover the passion, expertise, and dedication that drives us
                to create extraordinary travel experiences.
              </p>
              <Button
                size="lg"
                className="bg-travel-orange hover:bg-travel-orange/90 text-white px-8 py-3"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div
          className="py-20 bg-white"
          ref={setSectionRef("story")}
          data-section="story"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.includes("story")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                  Born from a Passion for Exploration
                </h2>
                <p className="text-lg text-travel-navy/80 mb-6 leading-relaxed">
                  Founded in 2009 by travel enthusiast Rinkesh Patel, our
                  company began with a simple belief: travel should be
                  transformative, authentic, and accessible to everyone. What
                  started as a small local tour operation has grown into a
                  trusted travel partner for thousands of adventurers worldwide.
                </p>
                <p className="text-lg text-travel-navy/80 mb-6 leading-relaxed">
                  Over the years, we've maintained our commitment to creating
                  meaningful connections between travelers and destinations,
                  while supporting local communities and preserving the natural
                  beauty of the places we visit.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-travel-orange">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Established 2009</span>
                  </div>
                  <div className="flex items-center gap-2 text-travel-orange">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Based in Ahmedabad</span>
                  </div>
                </div>
              </div>
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  visibleSections.includes("story")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Our Story"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-travel-blue rounded-full flex items-center justify-center text-white">
                  <Plane className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-20 bg-gradient-to-br from-travel-light-blue to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Guided by purpose, driven by passion
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-travel-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-travel-navy/80 leading-relaxed">
                  To create transformative travel experiences that connect
                  people with diverse cultures, breathtaking landscapes, and
                  unforgettable adventures while promoting sustainable tourism
                  and supporting local communities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-travel-navy mb-4">
                  Our Vision
                </h3>
                <p className="text-travel-navy/80 leading-relaxed">
                  To be the world's most trusted travel partner, inspiring
                  global citizens to explore responsibly, understand deeply, and
                  contribute positively to the destinations they visit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div
          className="py-20 bg-white"
          ref={setSectionRef("values")}
          data-section="values"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`text-center group transition-all duration-1000 ${
                    visibleSections.includes("values")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visibleSections.includes("values")
                      ? `${index * 200}ms`
                      : "0ms",
                  }}
                >
                  <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-travel-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-travel-navy/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          className="py-20 bg-gradient-to-r from-travel-navy to-travel-blue text-white"
          ref={setSectionRef("achievements")}
          data-section="achievements"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Milestones that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ${
                    visibleSections.includes("achievements")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visibleSections.includes("achievements")
                      ? `${index * 200}ms`
                      : "0ms",
                  }}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-travel-orange">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-white/80 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div
          className="py-20 bg-white"
          ref={setSectionRef("team")}
          data-section="team"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Passionate professionals dedicated to creating your perfect
                journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    visibleSections.includes("team")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visibleSections.includes("team")
                      ? `${index * 200}ms`
                      : "0ms",
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm font-medium">
                        {member.experience}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-travel-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-travel-orange font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-travel-navy/70 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialities.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-travel-light-blue text-travel-blue px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 bg-gradient-to-br from-travel-light-blue to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                What Travelers Say About Us
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Real experiences from real adventurers
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-center">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <p className="text-xl md:text-2xl text-travel-navy/80 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="border-t pt-8">
                  <h4 className="text-xl font-bold text-travel-navy">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-travel-navy/70">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-sm text-travel-orange font-medium mt-1">
                    {testimonials[currentTestimonial].tour}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-travel-orange scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Partnerships */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Certifications & Partnerships
              </h2>
              <p className="text-xl text-travel-navy/70 max-w-3xl mx-auto">
                Trusted by industry leaders and certified for excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-travel-navy mb-2">
                  IATA Certified
                </h3>
                <p className="text-travel-navy/70">
                  International Air Transport Association certified travel
                  agency
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-travel-navy mb-2">
                  Safety Certified
                </h3>
                <p className="text-travel-navy/70">
                  Adventure Travel Trade Association safety standards compliant
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-travel-navy mb-2">
                  Global Network
                </h3>
                <p className="text-travel-navy/70">
                  Partnerships with leading tour operators worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 bg-gradient-to-r from-travel-navy to-travel-blue">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have trusted us with
              their dream journeys.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-travel-orange hover:bg-travel-orange/90 text-white px-8 py-3 shadow-lg"
              >
                Plan Your Trip
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-travel-navy px-8 py-3 shadow-lg"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
