import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import SiteBrand from "@/components/SiteBrand";
import MainNav from "@/components/MainNav";
import Logger from "@/components/Logger";
import WorkshopContact from "@/components/WorkshopContact";
import PushCohorts from "@/components/PushCohorts";
import TrainingTypes from "@/components/TrainingTypes";


const AI = () => {
  const [scrollY, setScrollY] = useState(0);
  const trainingTitleRef = useRef<HTMLDivElement>(null);
  const trainingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getElementOpacity = (elementRef: React.RefObject<HTMLDivElement> | HTMLDivElement | null) => {
    if (!elementRef) return 0;
    
    const element = 'current' in elementRef ? elementRef.current : elementRef;
    if (!element) return 0;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Start fading in when element is 50% visible (much earlier)
    const fadeStart = windowHeight * 0.95;
    // Fully visible when element is 20% visible
    const fadeEnd = windowHeight * 0.7;
    
    if (rect.top > fadeStart) return 0;
    if (rect.top < fadeEnd) return 1;
    
    return 1 - (rect.top - fadeEnd) / (fadeStart - fadeEnd);
  };

  const trainingTitleOpacity = getElementOpacity(trainingTitleRef);
  const trainingOpacities = trainingRefs.current.map(ref => getElementOpacity(ref));

        
  return (
    <main className="py-20 px-4">
      <Logger event="page_view" data={{ page: 'ai_courses' }} />
      <div className="max-w-6xl mx-auto">
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
        <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-2xl mb-12 max-w-5xl mx-auto">
        Upskill yourself and your design and product teams with   
          <span className="font-semibold text-design-pink"> Cohort-based workshops </span> or 
          <span className="font-semibold text-design-pink whitespace-nowrap"> in-house trainings </span> tailored to your team’s needs. 
        </p>
        <TrainingTypes />
        </section>


        <section className="max-w-6xl mx-auto py-10">
          <div className="max-w-2xl mx-auto">
            <h2 
              ref={trainingTitleRef}
              className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-12 mt-24 text-center"
         style={{ opacity: trainingTitleOpacity }}
            >
              Training topics
            </h2>

            
            <div className="space-y-12">
              {/* AI literacy */}
              <div 
                ref={el => trainingRefs.current[0] = el}
                className="transition-opacity duration-1000"
                style={{ opacity: trainingOpacities[0] || 0 }}
              >
                <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
                  AI foundations and literacy
                </h3>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  I train non-technical and technical teams in the essentials: what current AI can and cannot do, common failure modes, safety basics, evaluation, and where AI fits in day-to-day work.
                </p>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  Your team will learn to select use cases, write effective prompts, review outputs with simple evaluation methods, and set guardrails.
                </p>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-semibold">Outcomes</span> repeatable practices, shared vocabulary, lower risk.
                </p>
              </div>

              {/* UX for AI */}
              <div 
                ref={el => trainingRefs.current[1] = el}
                className="transition-opacity duration-1000"
                style={{ opacity: trainingOpacities[1] || 0 }}
              >
                <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
                  UX for AI-powered products
                </h3>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  This workshop teaches patterns for non-deterministic systems. We cover prompt UX, feedback loops, error states, transparency, data boundaries, and how to measure quality over time.
                </p>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  Your team will learn to design flows that set expectations, recover gracefully, and improve with real usage.
                </p>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-semibold">Outcomes</span> safer experiences, clearer behaviour, measurable quality.
                </p>
              </div>

              {/* AI prototyping */}
              <div 
                ref={el => trainingRefs.current[2] = el}
                className="transition-opacity duration-1000"
                style={{ opacity: trainingOpacities[2] || 0 }}
              >
                <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
                  AI prototyping and vibe-coding
                </h3>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  A hands-on build session. I teach "vibe-coding" to get from idea to working prototype in minutes. We use modern UI stacks with AI tools so teams ship UI and logic, not just pictures.
                </p>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  Your team will learn to scaffold an app, wire prompts, mock data, and test flows quickly to align stakeholders.
                </p>
                <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-semibold">Outcomes</span> functional demos, faster decisions, earlier learning.
                </p>
              </div>
            </div>

            <div 
              className="rounded-2xl bg-design-bg p-6 text-center mt-12 transition-opacity duration-1000"
              style={{ opacity: trainingOpacities[3] || 0 }}
            >
              <p className="font-raleway text-gray-800 dark:text-gray-200">
                <span className="font-semibold">Included with every workshop</span> recordings, resource kit, prompt and pattern library, and a 30-day follow-up check-in.
              </p>
            </div>
          </div>
        </section>
        
        <div className="border-t border-gray-200 dark:border-gray-800 my-12"></div>

        <section className="max-w-6xl mx-auto py-10">
          <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-12 mt-24 text-center">
            Who is it for?
          </h2>
        
        <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-lg mb-12 max-w-4xl mx-auto">
          This workshop is designed specifically for tech professionals who are already familiar with standard tools and workflows. It's grounded in the real-world challenges of working in teams—navigating design systems and brand guidelines, collaborating effectively, and integrating with existing assets and infrastructure.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm border border-gray-200 dark:border-gray-800">

            <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">UX</h3>
            <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Design smarter. Test faster. Handoff smoother.
            </p>
            <p className="font-raleway text-gray-600 dark:text-gray-300">
              Create impactful designs and validate them with real, functional prototypes — making developer handoff more efficient.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm border border-gray-200 dark:border-gray-800">

            <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">Product</h3>
            <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Validate ideas with real data — not assumptions.
            </p>
            <p className="font-raleway text-gray-600 dark:text-gray-300">
              Test concepts quickly and affordably using functional prototypes instead of static mockups. Get meaningful insights sooner.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm border border-gray-200 dark:border-gray-800">

            <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">Marketing</h3>
            <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Move fast. Experiment. Adapt to your audience.
            </p>
            <p className="font-raleway text-gray-600 dark:text-gray-300">
              Build engaging landing pages and interactive dashboards and mini-apps. Test messaging and adjust content — without waiting on dev.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm border border-gray-200 dark:border-gray-800">

            <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">Engineers</h3>
            <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Get working prototypes with component structure instead of abstract requirements
            </p>
            <p className="font-raleway text-gray-600 dark:text-gray-300">
              Reuse actual code patterns for faster implementation. Shape solutions early instead of just implementing finished designs.
            </p>
          </div>
        </div>
        </section>

    <section className="max-w-6xl mx-auto py-10">
        <PushCohorts />
    </section>
      <WorkshopContact />
      
      <footer className="py-16 px-4">
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
