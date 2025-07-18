import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Tour {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  image: string;
}

const mockTours: Tour[] = [
  {
    id: "1",
    title: "Adventure Mountain Trek",
    description:
      "Experience the thrill of mountain trekking with professional guides.",
    category: "adventure",
    price: 299,
    duration: "3 days",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Cultural Heritage Walk",
    description: "Discover the rich history and culture of our beautiful city.",
    category: "cultural",
    price: 89,
    duration: "1 day",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Beach Paradise Getaway",
    description: "Relax on pristine beaches with crystal clear waters.",
    category: "beach",
    price: 199,
    duration: "2 days",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Wildlife Safari",
    description: "Observe exotic wildlife in their natural habitat.",
    category: "wildlife",
    price: 449,
    duration: "4 days",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Extreme Sports Package",
    description: "Adrenaline-packed activities for thrill seekers.",
    category: "adventure",
    price: 399,
    duration: "2 days",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Historic City Tour",
    description: "Explore ancient monuments and historical sites.",
    category: "cultural",
    price: 129,
    duration: "1 day",
    image: "/placeholder.svg",
  },
];

const categories = [
  { id: "all", name: "All Tours", color: "bg-gray-100 text-gray-800" },
  { id: "adventure", name: "Adventure", color: "bg-red-100 text-red-800" },
  { id: "cultural", name: "Cultural", color: "bg-blue-100 text-blue-800" },
  { id: "beach", name: "Beach", color: "bg-cyan-100 text-cyan-800" },
  { id: "wildlife", name: "Wildlife", color: "bg-green-100 text-green-800" },
];

export default function Tours() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredTours, setFilteredTours] = useState<Tour[]>(mockTours);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredTours(mockTours);
    } else {
      setFilteredTours(
        mockTours.filter((tour) => tour.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Tours
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations and unforgettable experiences with our
            curated tour packages.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    className={
                      categories.find((c) => c.id === tour.category)?.color
                    }
                  >
                    {categories.find((c) => c.id === tour.category)?.name}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{tour.title}</CardTitle>
                <CardDescription>{tour.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-primary">
                    ${tour.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    Duration: {tour.duration}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No tours found
            </h3>
            <p className="text-gray-600">
              Try selecting a different category or check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
