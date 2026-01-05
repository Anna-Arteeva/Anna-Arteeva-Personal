import CinematicHero from "@/components/CinematicHero";
import WhatDoIDo from "@/components/WhatDoIDo";
import Testimonials from "@/components/Testimonials";
import MavenCourse from "@/components/MavenCourse";
import TrainingTypes from "@/components/TrainingTypes";
import TrainingTopics from "@/components/TrainingTopics";
import TargetAudience from "@/components/TargetAudience";
import CustomerLogos from "@/components/CustomerLogos";

const Index = () => {

  return (
    <div className="min-h-screen">
      <CinematicHero />
      <MavenCourse />
      <TrainingTypes />
      <TrainingTopics />
      <TargetAudience />
      <CustomerLogos />
      <Testimonials />
    </div>
  );
};

export default Index;
