import CinematicHero from "@/components/CinematicHero";
import CourseCards from "@/components/CourseCards";
import Speaking from "@/components/Speaking";
import TrainingTypes from "@/components/TrainingTypes";
import TrainingTopics from "@/components/TrainingTopics";
import TargetAudience from "@/components/TargetAudience";
import CustomerLogos from "@/components/CustomerLogos";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import SiteFooter from "@/components/SiteFooter";
import Logger from "@/components/Logger";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Logger event="page_view" data={{ page: "home" }} />
      <CinematicHero />
      <CourseCards />
      <Speaking />
      <TrainingTypes />
      <TrainingTopics />
      <TargetAudience />
      <CustomerLogos />
      <Testimonials />
      <About />
      <SiteFooter />
    </div>
  );
};

export default Index;
