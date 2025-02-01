
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructor from "./components/Instructor";
import MusicTextimonialCards from "./components/TextimonialCards";
import UpcomingWebinar from "./components/UpcomingWebinar";
import WhyChooseUs from "./components/WhyChooseUs";




export default function Home() {
  return (
    <main className=" bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs />
      <MusicTextimonialCards />
      <UpcomingWebinar />
      <Instructor />
      
    </main>
  );
}
