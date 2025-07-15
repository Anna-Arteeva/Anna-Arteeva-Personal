import FTHeader from "@/components/FTHeader";
import CinematicHero from "@/components/CinematicHero";
import ArticleContent from "@/components/ArticleContent";
import ScrollStorySection from "@/components/ScrollStorySection";
import FTFooter from "@/components/FTFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FTHeader />
      <CinematicHero />
      <ArticleContent />
      <ScrollStorySection />
      <FTFooter />
    </div>
  );
};

export default Index;
