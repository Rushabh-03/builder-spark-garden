import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import Footer from "../components/Footer";

interface PlaceholderPageProps {
  pageName: string;
  description?: string;
}

export default function PlaceholderPage({
  pageName,
  description = "This page is coming soon! We're working hard to bring you an amazing experience.",
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-gradient-to-br from-travel-light-blue to-white flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Icon */}
            <div className="w-24 h-24 bg-gradient-to-r from-travel-blue to-travel-orange rounded-full flex items-center justify-center mx-auto mb-8">
              <Construction className="w-12 h-12 text-white" />
            </div>

            {/* Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-travel-navy mb-6">
              {pageName} Page
            </h1>
            <p className="text-xl text-travel-navy/70 mb-8 leading-relaxed">
              {description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button className="bg-travel-blue hover:bg-travel-blue/90 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <p className="text-travel-navy/60">
                Continue exploring our homepage for amazing tours and packages!
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-travel-navy mb-4">
                Want to see this page in action?
              </h3>
              <p className="text-travel-navy/70">
                Let us know what you'd like to see on this page and we'll help
                build it for you! Contact us for custom development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
