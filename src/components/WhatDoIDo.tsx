import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const WhatDoIDo = () => {
  const leadershipRef = useRef<HTMLDivElement>(null);
  const aiTrainingRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Smooth clamp utility to avoid branching noise
  const clamp = (value: number, min: number, max: number) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  };

  // Ease for a more cinematic feel
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  // Returns 0..1 with 1 when element center is near viewport center, fading to 0 near edges
  const getScrollProgress = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (!elementRef.current) return 0;
    const rect = elementRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementCenterY = rect.top + rect.height / 2;
    const viewportCenterY = viewportHeight / 2;
    const distanceFromCenter = Math.abs(elementCenterY - viewportCenterY);
    const maxDistance = viewportHeight * 0.6; // fade out near edges
    const raw = 1 - distanceFromCenter / maxDistance;
    return clamp(raw, 0, 1);
  };

  useEffect(() => {
    // Only enable scroll animations on desktop
    if (isMobile) return;

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
  }, [isMobile]);

  const [leadershipProgress, setLeadershipProgress] = useState(0);
  const [aiTrainingProgress, setAiTrainingProgress] = useState(0);

  useEffect(() => {
    // Only enable scroll animations on desktop
    if (isMobile) {
      setLeadershipProgress(1); // Set to full visibility on mobile
      setAiTrainingProgress(1); // Set to full visibility on mobile
      return;
    }

    const updateOpacity = () => {
      setLeadershipProgress(getScrollProgress(leadershipRef));
      setAiTrainingProgress(getScrollProgress(aiTrainingRef));
    };

    updateOpacity();
    window.addEventListener('scroll', updateOpacity);
    return () => window.removeEventListener('scroll', updateOpacity);
  }, [isMobile]);

  // Derive animation values (background slower, text a bit faster and later)
  const deriveStyles = (progress: number) => {
    const eased = easeOutCubic(progress);
    const bgOpacity = easeOutCubic(clamp(eased, 0, 1));
    const textOpacity = easeOutCubic(clamp((eased - 0.08) / 0.92, 0, 1));
    // Translate from below upwards as it appears
    const bgTranslateY = (1 - bgOpacity) * 24; // px
    const textTranslateY = (1 - textOpacity) * 36; // px
    return {
      bg: { opacity: bgOpacity, translateY: bgTranslateY },
      text: { opacity: textOpacity, translateY: textTranslateY },
    };
  };

  const leadershipAnim = deriveStyles(leadershipProgress);
  // Apply a delay and a gentler falloff to make the second article appear/disappear later
  const aiDelayed = clamp((aiTrainingProgress - 0.12) / 0.88, 0, 1);
  const aiLingering = Math.pow(aiDelayed, 0.85);
  const aiTrainingAnim = deriveStyles(aiLingering);

  return (
    <section 
      className="mx-4 my-8 md:my-4 flex flex-col md:flex-row md:min-h-screen gap-8 md:gap-4"
      aria-label="Services"
    >
      {/* Design Leadership */}
      <article 
        ref={leadershipRef}
        className="relative overflow-hidden rounded-2xl flex-1 w-full md:w-1/2 flex items-start px-6 md:px-8 lg:px-20 pt-12 md:pt-20 lg:pt-32 pb-8 md:pb-20 lg:pb-32"
        aria-labelledby="design-leadership-heading"
      >
        {/* Animated background layer */}
        <div
          className="absolute inset-0 rounded-2xl bg-design-bg-pink"
          style={{
            opacity: leadershipAnim.bg.opacity,
            transform: `translateY(${leadershipAnim.bg.translateY}px)`,
            transition: isMobile ? "none" : "opacity 280ms ease, transform 450ms cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: isMobile ? "auto" : "opacity, transform",
          }}
          aria-hidden="true"
        />

        {/* Content layer */}
        <div className="max-w-xl text-left">
          <h2 
            id="design-leadership-heading"
            className="font-playfair font-black text-3xl lg:text-5xl text-black dark:text-white mb-4 lg:mb-6 leading-tight"
            style={{
              opacity: leadershipAnim.text.opacity,
              transform: `translateY(${leadershipAnim.text.translateY}px)`,
              transition: isMobile ? "none" : "opacity 300ms ease, transform 520ms cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: isMobile ? "auto" : "opacity, transform",
            }}
          >
            Design Leadership
          </h2>
          <p
            className="font-raleway text-lg lg:text-xl text-black dark:text-white mb-6 lg:mb-8 leading-relaxed"
            style={{
              opacity: clamp(leadershipAnim.text.opacity - 0.05, 0, 1),
              transform: `translateY(${leadershipAnim.text.translateY + 4}px)`,
              transition: isMobile ? "none" : "opacity 320ms ease, transform 540ms cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: isMobile ? "auto" : "opacity, transform",
            }}
          >
            Hands-on design leadership: org design, UX strategy, workflow design, team coaching and upskilling, and design systems.
          </p>
          <a
            href="#leadership-portfolio"
            className="inline-flex items-center gap-2 font-playfair font-medium text-lg lg:text-xl text-black dark:text-white hover:text-design-pink dark:hover:text-design-pink transition-colors duration-300 group"
            style={{
              opacity: clamp(leadershipAnim.text.opacity - 0.1, 0, 1),
              transform: `translateY(${leadershipAnim.text.translateY + 6}px)`,
              transition: isMobile ? "none" : "opacity 340ms ease, transform 560ms cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: isMobile ? "auto" : "opacity, transform",
            }}
          >
            Leadership Portfolio
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </article>

      {/* AI Training with Background */}
      <article 
        ref={aiTrainingRef}
        className="relative overflow-hidden rounded-2xl flex-1 w-full md:w-1/2 flex items-end md:justify-end rounded-2xl px-6 md:px-8 lg:px-20 pt-8 md:pt-20 lg:pt-32 pb-12 md:pb-20 lg:pb-32"
        aria-labelledby="ai-training-heading"
      >
        {/* Animated background layer */}
        <div
          className="absolute inset-0 rounded-2xl bg-design-bg"
          style={{
            opacity: aiTrainingAnim.bg.opacity,
            transform: `translateY(${aiTrainingAnim.bg.translateY}px)`,
            transition: isMobile ? "none" : "opacity 280ms ease, transform 450ms cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: isMobile ? "auto" : "opacity, transform",
          }}
          aria-hidden="true"
        />

        <div className="max-w-xl text-right">
          <h2 
            id="ai-training-heading"
            className="font-playfair font-black text-3xl lg:text-5xl text-black dark:text-white mb-4 lg:mb-6 leading-tight"
            style={{
              opacity: aiTrainingAnim.text.opacity,
              transform: `translateY(${aiTrainingAnim.text.translateY}px)`,
              transition: isMobile ? "none" : "opacity 300ms ease, transform 520ms cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: isMobile ? "auto" : "opacity, transform",
            }}
          >
            AI training for Design and Product teams
          </h2>
          <p
            className="font-raleway text-lg lg:text-xl text-black dark:text-white mb-6 lg:mb-8 leading-relaxed"
            style={{
              opacity: clamp(aiTrainingAnim.text.opacity - 0.05, 0, 1),
              transform: `translateY(${aiTrainingAnim.text.translateY + 4}px)`,
              transition: isMobile ? "none" : "opacity 320ms ease, transform 540ms cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: isMobile ? "auto" : "opacity, transform",
            }}
          >
            I run practical workshops and coaching programmes that upskill your team in AI, AI prototyping and UX for AI products.
          </p>
          <a
            href="/ai-courses"
            className="inline-flex items-center gap-2 font-playfair font-medium text-lg lg:text-xl text-black dark:text-white hover:text-design-pink dark:hover:text-design-pink transition-colors duration-300 group"
            style={{
              opacity: clamp(aiTrainingAnim.text.opacity - 0.1, 0, 1),
              transform: `translateY(${aiTrainingAnim.text.translateY + 6}px)`,
              transition: isMobile ? "none" : "opacity 340ms ease, transform 560ms cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: isMobile ? "auto" : "opacity, transform",
            }}
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

