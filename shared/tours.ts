export interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  image: string;
  highlights: string[];
  difficulty: "Easy" | "Moderate" | "Challenging";
  category: string;
  description: string;
  availability: "Available" | "Limited" | "Sold Out";
}

export interface TourDetails extends Tour {
  images: string[];
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

export const toursData: TourDetails[] = [
  {
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
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759844-d150ce1fb2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1418065460487-3d7063cc7824?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
        description:
          "Cross suspension bridges and ascend to the Sherpa capital.",
        activities: [
          "Cross Dudh Koshi River",
          "Enter Sagarmatha National Park",
          "First views of Everest",
          "Reach Namche Bazaar",
        ],
      },
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
        comment:
          "Best adventure of my life! Everything was perfectly organized.",
        date: "September 2024",
      },
    ],
  },
  {
    id: 2,
    title: "Kerala Backwater Paradise",
    location: "Kerala, India",
    duration: "6 Days",
    groupSize: "4-8 people",
    rating: 4.8,
    reviews: 256,
    price: "₹32,999",
    difficulty: "Easy",
    category: "Nature",
    availability: "Available",
    description:
      "Experience the serene beauty of Kerala's famous backwaters on this relaxing 6-day journey. Cruise through palm-fringed canals on traditional houseboats, explore spice plantations, and rejuvenate with authentic Ayurvedic treatments in God's Own Country.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: [
      "Houseboat Stay",
      "Spice Gardens",
      "Ayurveda Spa",
      "Traditional Cuisine",
      "Kathakali Dance",
      "Tea Plantations",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description:
          "Welcome to Kerala! Explore the historic port city of Kochi.",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Chinese fishing nets tour",
          "Spice market visit",
        ],
      },
      {
        day: 2,
        title: "Kochi to Munnar",
        description:
          "Journey to the hill station of Munnar through scenic landscapes.",
        activities: [
          "Drive to Munnar",
          "Tea plantation tour",
          "Tea museum visit",
          "Evening at leisure",
        ],
      },
      {
        day: 3,
        title: "Munnar Sightseeing",
        description: "Explore the natural beauty of Munnar hill station.",
        activities: [
          "Eravikulam National Park",
          "Mattupetty Dam",
          "Echo Point",
          "Kundala Lake",
        ],
      },
    ],
    included: [
      "All accommodation (hotels/houseboats)",
      "All meals as per itinerary",
      "Transportation in AC vehicle",
      "Professional guide",
      "Houseboat cruise",
      "Entry fees to attractions",
      "Ayurvedic massage session",
      "Airport transfers",
    ],
    excluded: [
      "Flights to/from Kerala",
      "Personal expenses",
      "Additional Ayurvedic treatments",
      "Alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Optional activities",
    ],
    requirements: [
      "Basic fitness level",
      "Comfortable walking shoes",
      "Light cotton clothing",
      "Sun protection",
      "Camera for memories",
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment:
          "The houseboat experience was magical! Kerala's beauty is unmatched.",
        date: "November 2024",
      },
      {
        name: "David Wilson",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment:
          "Perfect blend of relaxation and cultural experiences. Highly recommended!",
        date: "October 2024",
      },
    ],
  },
  {
    id: 3,
    title: "Royal Rajasthan Heritage",
    location: "Rajasthan, India",
    duration: "8 Days",
    groupSize: "10-15 people",
    rating: 4.7,
    reviews: 189,
    price: "₹45,999",
    originalPrice: "₹52,999",
    difficulty: "Moderate",
    category: "Culture",
    availability: "Limited",
    description:
      "Step into the royal heritage of Rajasthan on this magnificent 8-day journey through the land of kings. Experience opulent palaces, majestic forts, vibrant markets, and the timeless traditions of royal Rajasthan.",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: [
      "Palace Hotels",
      "Camel Safari",
      "Folk Performances",
      "Amber Fort",
      "City Palace",
      "Hawa Mahal",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description:
          "Welcome to the Pink City! Explore the royal capital of Rajasthan.",
        activities: [
          "Airport pickup",
          "City Palace tour",
          "Hawa Mahal visit",
          "Local market shopping",
        ],
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description: "Discover the magnificent forts and palaces of Jaipur.",
        activities: [
          "Amber Fort tour",
          "Elephant ride",
          "Jantar Mantar visit",
          "Traditional lunch",
        ],
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description: "Travel to the Blue City of Jodhpur.",
        activities: [
          "Drive to Jodhpur",
          "Mehrangarh Fort",
          "Jaswant Thada",
          "Blue city walk",
        ],
      },
    ],
    included: [
      "Heritage hotel accommodation",
      "All meals as per itinerary",
      "AC transportation",
      "Professional guide",
      "Camel safari in desert",
      "Cultural performances",
      "Entry fees to monuments",
      "Airport transfers",
    ],
    excluded: [
      "Flights to/from Rajasthan",
      "Personal expenses",
      "Alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Optional activities",
      "Shopping expenses",
    ],
    requirements: [
      "Moderate walking required",
      "Comfortable shoes",
      "Modest clothing for temples",
      "Sun protection",
      "Camera for heritage sites",
    ],
    testimonials: [
      {
        name: "Emma Thompson",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment:
          "Living like royalty! The palace hotels and heritage sites were spectacular.",
        date: "December 2024",
      },
      {
        name: "Raj Patel",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 4,
        comment:
          "Amazing cultural experience. The camel safari was unforgettable!",
        date: "November 2024",
      },
    ],
  },
  {
    id: 4,
    title: "Goa Beach & Nightlife",
    location: "Goa, India",
    duration: "5 Days",
    groupSize: "6-10 people",
    rating: 4.6,
    reviews: 428,
    price: "₹25,999",
    difficulty: "Easy",
    category: "Beach",
    availability: "Available",
    description:
      "Dive into the perfect blend of beach relaxation and vibrant nightlife in Goa. Experience pristine beaches, water sports, Portuguese heritage, and the legendary Goan party scene on this exciting 5-day getaway.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: [
      "Beach Clubs",
      "Water Sports",
      "Portuguese Heritage",
      "Night Markets",
      "Sunset Cruise",
      "Casino Experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description:
          "Welcome to the beach paradise! Settle in and explore local beaches.",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Calangute Beach",
          "Beach shack dinner",
        ],
      },
      {
        day: 2,
        title: "South Goa Exploration",
        description: "Discover the serene beaches and heritage of South Goa.",
        activities: [
          "Palolem Beach",
          "Basilica of Bom Jesus",
          "Se Cathedral",
          "Spice plantation tour",
        ],
      },
      {
        day: 3,
        title: "Water Sports & Adventure",
        description: "Thrilling water sports and adventure activities.",
        activities: [
          "Parasailing",
          "Jet skiing",
          "Banana boat ride",
          "Sunset cruise",
        ],
      },
    ],
    included: [
      "Beach resort accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Water sports activities",
      "Sunset cruise",
      "Spice plantation visit",
      "Professional guide",
      "Welcome drink",
    ],
    excluded: [
      "Flights to/from Goa",
      "Lunch and dinner (except mentioned)",
      "Alcoholic beverages",
      "Casino entry fees",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
    ],
    requirements: [
      "Swimming ability for water sports",
      "Beach appropriate clothing",
      "Sun protection",
      "Valid ID for casinos",
      "Light casual wear",
    ],
    testimonials: [
      {
        name: "Alex Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment:
          "Perfect beach vacation! Great mix of relaxation and adventure.",
        date: "January 2024",
      },
      {
        name: "Lisa Kumar",
        avatar:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 4,
        comment:
          "Loved the water sports and beach vibes. Goa never disappoints!",
        date: "December 2023",
      },
    ],
  },
  {
    id: 5,
    title: "Ladakh Adventure Circuit",
    location: "Ladakh, India",
    duration: "10 Days",
    groupSize: "6-12 people",
    rating: 4.9,
    reviews: 167,
    price: "₹58,999",
    difficulty: "Challenging",
    category: "Adventure",
    availability: "Available",
    description:
      "Embark on an epic high-altitude adventure through the mystical landscapes of Ladakh. Experience ancient monasteries, pristine lakes, rugged mountains, and the unique culture of the Trans-Himalayan region.",
    image:
      "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617469165786-8007eda386b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: [
      "Magnetic Hill",
      "Pangong Lake",
      "Buddhist Monasteries",
      "Nubra Valley",
      "Khardung La Pass",
      "Leh Palace",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description: "Arrive in Leh and acclimatize to the high altitude.",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Rest and acclimatization",
          "Light evening walk",
        ],
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        description: "Explore the cultural treasures of Leh.",
        activities: [
          "Leh Palace",
          "Shanti Stupa",
          "Leh Market",
          "Hemis Monastery",
        ],
      },
      {
        day: 3,
        title: "Leh to Nubra Valley",
        description: "Cross Khardung La Pass to reach Nubra Valley.",
        activities: [
          "Khardung La Pass",
          "Diskit Monastery",
          "Camel safari",
          "Overnight camping",
        ],
      },
    ],
    included: [
      "All accommodation (hotels/camps)",
      "All meals during trek",
      "Airport transfers",
      "Inner line permits",
      "Professional guide",
      "Camping equipment",
      "Oxygen cylinder backup",
      "First aid kit",
    ],
    excluded: [
      "Flights to/from Leh",
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses",
      "Tips for guides",
      "Additional permits",
      "Emergency evacuation",
    ],
    requirements: [
      "Excellent physical fitness",
      "High altitude experience preferred",
      "Medical fitness certificate",
      "Proper winter clothing",
      "Travel insurance mandatory",
    ],
    testimonials: [
      {
        name: "Tom Anderson",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment:
          "Ladakh is otherworldly! The landscapes and monasteries were breathtaking.",
        date: "August 2024",
      },
      {
        name: "Meera Singh",
        avatar:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment:
          "Challenging but incredibly rewarding. The high-altitude adventure was amazing!",
        date: "July 2024",
      },
    ],
  },
  {
    id: 6,
    title: "Golden Triangle Classic",
    location: "Delhi, Agra, Jaipur",
    duration: "7 Days",
    groupSize: "8-15 people",
    rating: 4.5,
    reviews: 634,
    price: "₹35,999",
    originalPrice: "₹42,999",
    difficulty: "Easy",
    category: "Heritage",
    availability: "Available",
    description:
      "Discover India's most iconic Golden Triangle circuit covering Delhi, Agra, and Jaipur. Experience the grandeur of the Taj Mahal, explore magnificent forts and palaces, and immerse yourself in India's rich cultural heritage.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: [
      "Taj Mahal",
      "Red Fort",
      "Amber Palace",
      "Hawa Mahal",
      "India Gate",
      "Qutub Minar",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Welcome to India's capital! Explore Old and New Delhi.",
        activities: [
          "Airport pickup",
          "Red Fort",
          "Jama Masjid",
          "India Gate drive",
        ],
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description: "Continue exploring Delhi's historical monuments.",
        activities: [
          "Qutub Minar",
          "Humayun's Tomb",
          "Lotus Temple",
          "Connaught Place",
        ],
      },
      {
        day: 3,
        title: "Delhi to Agra",
        description: "Travel to Agra, home of the magnificent Taj Mahal.",
        activities: [
          "Drive to Agra",
          "Taj Mahal sunset visit",
          "Hotel check-in",
          "Local markets",
        ],
      },
    ],
    included: [
      "Heritage hotel accommodation",
      "All meals as per itinerary",
      "AC transportation",
      "Professional guide",
      "Monument entry fees",
      "Cultural performances",
      "Photography permits",
      "Airport transfers",
    ],
    excluded: [
      "International flights",
      "Personal expenses",
      "Alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Optional activities",
      "Shopping expenses",
    ],
    requirements: [
      "Basic fitness for walking",
      "Comfortable walking shoes",
      "Modest dress for monuments",
      "Sun protection",
      "Valid photo ID",
    ],
    testimonials: [
      {
        name: "Jennifer Brown",
        avatar:
          "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment:
          "The Taj Mahal was absolutely magical! Perfect introduction to India.",
        date: "February 2024",
      },
      {
        name: "Robert Johnson",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 4,
        comment:
          "Great tour covering all the major highlights. Excellent organization!",
        date: "January 2024",
      },
    ],
  },
];

export const featuredTours: Tour[] = toursData.map((tour) => ({
  id: tour.id,
  title: tour.title,
  location: tour.location,
  duration: tour.duration,
  groupSize: tour.groupSize,
  rating: tour.rating,
  reviews: tour.reviews,
  price: tour.price,
  originalPrice: tour.originalPrice,
  image: tour.image,
  highlights: tour.highlights,
  difficulty: tour.difficulty,
  category: tour.category,
  description: tour.description,
  availability: tour.availability,
}));
