import HeroCarousel from "../components/HeroCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedTours from "../components/FeaturedTours";
import Testimonials from "../components/Testimonials";

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <WhyChooseUs />
      <FeaturedTours />
      <Testimonials />
    </div>
  );
}
