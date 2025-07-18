import HeroCarousel from "../components/HeroCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedTours from "../components/FeaturedTours";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <WhyChooseUs />
      <FeaturedTours />
      <Testimonials />
      <Footer />
    </div>
  );
}
