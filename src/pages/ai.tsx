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
        <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-2xl max-w-5xl mx-auto">
        Upskill yourself and your design and product teams with   
          <span className="font-semibold text-design-pink"> Cohort-based workshops </span> or 
          <span className="font-semibold text-design-pink whitespace-nowrap"> in-house trainings </span> tailored to your team’s needs. 
        </p>
        </section>


        {/* Maven course Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <div className="rounded-2xl bg-vibe-gradient overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-12 md:p-16 " >
              {/* Left side - Content */}
              <div className="space-y-6">
                {/* Maven logo */}
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src="/logos/maven.png" 
                    alt="Maven" 
                    className="h-8 w-auto block dark:hidden"
                  />
                  <img 
                    src="/logos/maven-dark-theme.png" 
                    alt="Maven" 
                    className="h-8 w-auto hidden dark:block"
                  />
                </div>

                {/* Main title */}
                <h2 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-black dark:text-white leading-tight">
                  Vibe-coding
                  <br />
                  for Designers
                </h2>

                {/* Sub-points */}
                <div className="space-y-2 font-raleway font-medium text-black dark:text-white" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>
                  <p>Design Systems, AI features, Dev Collaboration</p>
                </div>

                {/* Logos */}
                <div className="flex items-center gap-6 mt-8 pt-6 dark:border-gray-700">
                  <img 
                    src="/logos/logos.png" 
                    alt="Partner logos" 
                    className="h-12 w-auto block dark:hidden"
                  />
                  <img 
                    src="/logos/logos-dark-theme.png" 
                    alt="Partner logos" 
                    className="h-12 w-auto hidden dark:block"
                  />
                </div>

              </div>

              {/* Right side - Speaker image */}
              <div className="relative flex justify-center md:justify-end">
                <div className="relative">
                  {/* Image container */}
                  <div className="relative w-[21rem] h-[21rem] md:w-[22rem] md:h-[22rem] lg:w-[23rem] lg:h-[23rem]">
                    <img 
                      src="/avatars/anna-arteeva-maven.png" 
                      alt="Anna Arteeva" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            
            </div>

                {/* Cohort Details & CTA */}
                <div className="px-12 py-8 md:px-16 bg-black/5 dark:bg-white/10">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="space-y-1">
                      <h4 className="font-playfair font-black text-xl text-black dark:text-white">
                        Next cohort
                      </h4>
                      <p className="font-raleway text-black dark:text-white" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', lineHeight: '1.6' }}>
                        January 5th - 4 weeks - 8 live sessions × 2.5 hours
                      </p>
                    </div>
                    <a
                      href="https://maven.com/anna-arteeva/vibe-coding-for-designers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair font-medium text-base md:text-lg hover:opacity-90 transition flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-design-pink inline-flex items-center gap-2"
                      aria-label="Enroll on Maven for Vibe-coding for Designers course"
                    >
                      Enroll on Maven
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
          </div>
        </section>
        
        {/* TrainingTypes section */}
        <section className="max-w-6xl mx-auto">
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
