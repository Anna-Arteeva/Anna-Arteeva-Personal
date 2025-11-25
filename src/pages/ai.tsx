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
    <main className="py-12 px-4 relative">
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
                  Understand different AI models and where and how to get the most out of them, how to prompt like a pro for different use cases for AI productivity, 
                  as well as making system prompts for your product features. 
                  Explore practical tools such as ChatGPT, Google AI Studio, NotebookLM, 
                  ElevenLabs, Midjourney, Stable Diffusion, Wispr Flow, Cursor, and Lovable, v0, Replit, Claude 
                  and understand when to use them in your research, ideation, and product-building process.
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
                  It's one thing to use AI in your workflow; another to design for AI-powered products. UX and behaviour patterns are changing; they are no longer deterministic, nor linear, and not even purely visual. Voice, vision, and haptic interactions are becoming must-haves and must be designed alongside visual UI. Command-based interfaces are being replaced with outcome-based ones, where instead of navigating filters and forms you can tell the product what you want to achieve. Ultimately, we now build products not only for human users but also for agentic users. This leads to a redefinition of the design role itself: instead of creating visual assets in visual tools, designers are becoming orchestrators of the invisible.
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
                  And that brings us to prototyping with AI. Building functional apps and features takes design to the next level, starting with elevating craft and allowing us to take care of things that were not available in conventional products, such as micro-interactions, more nuanced responsiveness, and deeper personalisation. It improves handoff and reduces the amount lost in translation, as we hand off chunks of code instead of annotated images. Ultimately, it allows us to design across more modalities, such as voice, vision, and gestures (haptic), with real data and functionality, connecting AI models.
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
        

        <section className="max-w-6xl mx-auto py-5">
          <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-12 text-center">
            Who is it for?
          </h2>
        
        <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-lg mb-12 max-w-4xl mx-auto">
          This training is designed for tech professionals who already work with standard tools and workflows. It is grounded in real-world challenges: navigating design systems and brand guidelines, collaborating across functions, and integrating with existing assets and infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl  bg-design-bg  p-6 shadow-sm  ">

            <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">UX</h3>
            <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Design smarter. Test faster. Handoff smoother.
            </p>
            <p className="font-raleway text-gray-600 dark:text-gray-300">
              Elevate every part of your design workflow and create more impactful experiences that go beyond visual interactions. Design non-deterministic, multimodal flows and hand off running code instead of annotated images.
            </p>
          </div>

          <div className="rounded-2xl  bg-design-bg  p-6 shadow-sm  ">

            <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">Product</h3>
            <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Validate ideas with real behaviour, not assumptions.
            </p>
            <p className="font-raleway text-gray-600 dark:text-gray-300">
            Expand your role and become a true product builder. Identify the right AI use cases, define clear outcomes and guardrails, and measure quality over time for meaningful insights sooner.
            </p>
          </div>

          <div className="rounded-2xl  bg-design-bg  p-6 shadow-sm  ">

            <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">Marketing and Sales</h3>
            <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Move fast. Experiment. Adapt to your audience.
            </p>
            <p className="font-raleway text-gray-600 dark:text-gray-300">
            Build dashboards, test infinite variants of personalized landing pages, and create mini-apps and internal tools—all without waiting for development. Create product demos tailored to your customers, complete with fresh features from your roadmap. 
             </p>
          </div>
        </div>
        </section>

    <section className="max-w-6xl mx-auto py-10 mb-20">
        <PushCohorts />
    </section>

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
