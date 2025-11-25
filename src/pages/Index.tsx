import CinematicHero from "@/components/CinematicHero";
import MainNav from "@/components/MainNav";
import WhatDoIDo from "@/components/WhatDoIDo";
import Testimonials from "@/components/Testimonials";
import MavenCourse from "@/components/MavenCourse";
import TrainingTypes from "@/components/TrainingTypes";
import TrainingTopics from "@/components/TrainingTopics";
import TargetAudience from "@/components/TargetAudience";

const Index = () => {

  return (
    <div className="min-h-screen">
      <CinematicHero />
      <MavenCourse />
      <TrainingTypes />
      <TrainingTopics />
      <TargetAudience />
      <Testimonials />

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <MainNav />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
