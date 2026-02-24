import CinematicHero from "@/components/CinematicHero";
import Testimonials from "@/components/Testimonials";
import AIprototypingDesigners from "@/components/AIprototypingDesigners";
import AIPrototypingProductPeople from "@/components/AIPrototypingProductPeople";
import TrainingTypes from "@/components/TrainingTypes";
import TrainingTopics from "@/components/TrainingTopics";
import TargetAudience from "@/components/TargetAudience";
import CustomerLogos from "@/components/CustomerLogos";
import WorkshopContact from "@/components/WorkshopContact";
import Logger from "@/components/Logger";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Logger event="page_view" data={{ page: "home" }} />
      <CinematicHero />

      <section id="training" className="max-w-6xl mx-auto px-4 pt-8">
        <h2 className="font-playfair font-black text-4xl md:text-5xl text-black dark:text-white mb-8 mt-8 text-center">
          Build products smarter with AI
        </h2>
        <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-2xl max-w-5xl mx-auto">
          Upskill yourself and your design and product teams with{" "}
          <span className="font-semibold text-design-pink">Cohort-based workshops</span> or{" "}
          <span className="font-semibold text-design-pink whitespace-nowrap">in-house trainings</span> tailored to your team’s needs.
        </p>
      </section>

      <div className="max-w-6xl mx-auto flex flex-col gap-8 py-8 px-4">
        <AIprototypingDesigners />
        <AIPrototypingProductPeople />
      </div>
      <section className="max-w-6xl mx-auto">
        <TrainingTypes />
      </section>
      <TrainingTopics />
      <TargetAudience />
      <CustomerLogos />
      <WorkshopContact />
      <Testimonials />
    </div>
  );
};

export default Index;
