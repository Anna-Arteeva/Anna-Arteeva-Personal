import CinematicHero from "@/components/CinematicHero";
import WhatDoIDo from "@/components/WhatDoIDo";
import Testimonials from "@/components/Testimonials";
import MavenCourse from "@/components/MavenCourse";
import VibeBuildingMaven from "@/components/VibeBuildingMaven";
import TrainingTypes from "@/components/TrainingTypes";
import TrainingTopics from "@/components/TrainingTopics";
import TargetAudience from "@/components/TargetAudience";
import CustomerLogos from "@/components/CustomerLogos";

const Index = () => {

  return (
    <div className="min-h-screen">
      <CinematicHero />

      <div className="max-w-6xl mx-auto flex flex-col gap-8 py-8 px-4">
        <MavenCourse />
        <VibeBuildingMaven />
      </div>
      <TrainingTypes />
      <TrainingTopics />
      <TargetAudience />
      <CustomerLogos />
      <Testimonials />
    </div>
  );
};

export default Index;
