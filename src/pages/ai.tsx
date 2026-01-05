import { Link } from "react-router-dom";
import SiteBrand from "@/components/SiteBrand";
import MainNav from "@/components/MainNav";
import Logger from "@/components/Logger";
import WorkshopContact from "@/components/WorkshopContact";
import TrainingTypes from "@/components/TrainingTypes";
import MavenCourse from "@/components/MavenCourse";
import TrainingTopics from "@/components/TrainingTopics";
import TargetAudience from "@/components/TargetAudience";


const AI = () => {

        
  return (
    <main className="py-12 px-8 relative">
      <Logger event="page_view" data={{ page: 'ai_courses' }} />
      
      
    <div className="mx-auto">
        <div className="mb-16 text-center">
          <SiteBrand />
          <div className="mt-6">
            <MainNav />
          </div>
        </div>
    </div> 

    <section className="max-w-6xl mx-auto">
        <h1 className="font-playfair font-black text-4xl md:text-5xl text-black dark:text-white mb-8 mt-24 text-center">
        Build products smarter with AI
        </h1>
        <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-2xl max-w-5xl mx-auto">
        Upskill yourself and your design and product teams with   
          <span className="font-semibold text-design-pink"> Cohort-based workshops </span> or 
          <span className="font-semibold text-design-pink whitespace-nowrap"> in-house trainings </span> tailored to your team’s needs. 
        </p>
        </section>


        {/* Maven course Section */}
        <MavenCourse />
        
        {/* TrainingTypes section */}
        <section className="max-w-6xl mx-auto">
        <TrainingTypes />
        </section>

        {/* TrainingTopics section */}
        <TrainingTopics />
        
        {/* TargetAudience section */}
        <TargetAudience />

      <WorkshopContact />
      
      <footer className="my-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <MainNav />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default AI;