import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const WhatDoIDo = () => {
  const leadershipRef = useRef<HTMLDivElement>(null);
  const aiTrainingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger re-render on scroll for opacity calculations
      requestAnimationFrame(() => {
        if (leadershipRef.current || aiTrainingRef.current) {
          leadershipRef.current?.dispatchEvent(new Event('scroll'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getElementOpacity = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (!elementRef.current) return 0;
    
    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Start fading in when element is 50% visible (much earlier)
    const fadeStart = windowHeight * 0.95;
    // Fully visible when element is 20% visible
    const fadeEnd = windowHeight * 0.7;
    
    if (rect.top > fadeStart) return 0;
    if (rect.top < fadeEnd) return 1;
    
    return 1 - (rect.top - fadeEnd) / (fadeStart - fadeEnd);
  };

  const [leadershipOpacity, setLeadershipOpacity] = useState(0);
  const [aiTrainingOpacity, setAiTrainingOpacity] = useState(0);

  useEffect(() => {
    const updateOpacity = () => {
      setLeadershipOpacity(getElementOpacity(leadershipRef));
      setAiTrainingOpacity(getElementOpacity(aiTrainingRef));
    };

    updateOpacity();
    window.addEventListener('scroll', updateOpacity);
    return () => window.removeEventListener('scroll', updateOpacity);
  }, []);

  return (
    <section 
      className="mx-4 my-8 md:my-4 flex flex-col md:flex-row md:min-h-screen gap-8 md:gap-0"
      aria-label="Services"
    >
      {/* Design Leadership */}
      <article 
        ref={leadershipRef}
        className="flex-1 w-full md:w-1/2 flex items-start px-6 md:px-8 lg:px-20 pt-12 md:pt-20 lg:pt-32 pb-8 md:pb-20 lg:pb-32 transition-opacity duration-1000"
        style={{ opacity: leadershipOpacity }}
        aria-labelledby="design-leadership-heading"
      >
        <div className="max-w-xl text-left">
          <h2 
            id="design-leadership-heading"
            className="font-playfair font-black text-3xl lg:text-5xl text-black dark:text-white mb-4 lg:mb-6 leading-tight"
          >
            Design Leadership
          </h2>
          <p className="font-raleway text-lg lg:text-xl text-black dark:text-white mb-6 lg:mb-8 leading-relaxed">
            Hands-on design leadership: org design, UX strategy, workflow design, team coaching and upskilling, and design systems.
          </p>
          <a
            href="#leadership-portfolio"
            className="inline-flex items-center gap-2 font-playfair font-medium text-lg lg:text-xl text-black dark:text-white hover:text-design-pink dark:hover:text-design-pink transition-colors duration-300 group"
          >
            Leadership Portfolio
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </article>

      {/* AI Training with Background */}
      <article 
        ref={aiTrainingRef}
        className="flex-1 w-full md:w-1/2 flex items-end md:justify-end rounded-2xl px-6 md:px-8 lg:px-20 pt-8 md:pt-20 lg:pt-32 pb-12 md:pb-20 lg:pb-32 transition-opacity duration-1000"
        style={{ 
          opacity: aiTrainingOpacity,
          background: `
            radial-gradient(circle at 20% 100%, hsl(var(--design-bg)) 0%, transparent 70%),
            radial-gradient(circle, hsl(var(--design-bg) / 0.8) 1px, transparent 1px),
            radial-gradient(circle, hsl(var(--design-bg) / 0.6) 1px, transparent 1px),
            radial-gradient(circle, hsl(var(--design-bg) / 0.7) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 20px 20px, 40px 40px, 60px 60px",
          backgroundPosition: "0 0, 0 0, 10px 10px, 30px 30px",
        }}
        aria-labelledby="ai-training-heading"
      >
        <div className="max-w-xl text-right">
          <h2 
            id="ai-training-heading"
            className="font-playfair font-black text-3xl lg:text-5xl text-black dark:text-white mb-4 lg:mb-6 leading-tight"
          >
            AI training for Design and Product teams
          </h2>
          <p className="font-raleway text-lg lg:text-xl text-black dark:text-white mb-6 lg:mb-8 leading-relaxed">
            I run practical workshops and coaching programmes that upskill your team in AI, AI prototyping and UX for AI products.
          </p>
          <a
            href="/ai-courses"
            className="inline-flex items-center gap-2 font-playfair font-medium text-lg lg:text-xl text-black dark:text-white hover:text-design-pink dark:hover:text-design-pink transition-colors duration-300 group"
          >
            Learn more about AI upskilling
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default WhatDoIDo;

