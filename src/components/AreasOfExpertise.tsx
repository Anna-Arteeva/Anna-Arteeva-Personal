import { useRef, useEffect, useState } from "react";

const AreasOfExpertise = () => {
  const [scrollY, setScrollY] = useState(0);
  const expertiseTitleRef = useRef<HTMLDivElement>(null);
  const expertiseRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const expertiseTitleOpacity = getElementOpacity(expertiseTitleRef);
  const expertiseOpacities = expertiseRefs.current.map(ref => getElementOpacity(ref));

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 
          ref={expertiseTitleRef}
          className="font-playfair font-black text-4xl text-black dark:text-white mb-8 transition-opacity duration-1000"
          style={{ opacity: expertiseTitleOpacity }}
        >
          Areas of Expertise
        </h2>
        
        <div className="space-y-12">
          {/* Leading Designers */}
          <div 
            ref={el => expertiseRefs.current[0] = el}
            className="transition-opacity duration-1000"
            style={{ opacity: expertiseOpacities[0] || 0 }}
          >
            <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
              Leading Designers in Cross-Functional Teams
            </h3>
            <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              I'm a big believer in the power of cross-functional collaboration. The best work happens when designers build strong partnerships with product, engineering, data, marketing, support — even sales. Whether it's through embedded teams or simply stepping outside the design bubble, I encourage designers to be curious, strategic collaborators who can connect dots across the organisation.
            </p>
          </div>

          {/* Diversity & Multicultural Communication */}
          <div 
            ref={el => expertiseRefs.current[1] = el}
            className="transition-opacity duration-1000"
            style={{ opacity: expertiseOpacities[1] || 0 }}
          >
            <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
              Diversity & Multicultural Communication
            </h3>
            <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Diverse teams make better products — but they're also harder to run. I've worked across cultures, time zones, and communication styles, and I care deeply about helping teams build trust and psychological safety. With a background in intercultural communication (and plenty of hands-on experience), I help teams navigate subtle dynamics and create inclusive, high-performing environments.
            </p>
          </div>

          {/* Holistic Customer Experience */}
          <div 
            ref={el => expertiseRefs.current[2] = el}
            className="transition-opacity duration-1000"
            style={{ opacity: expertiseOpacities[2] || 0 }}
          >
            <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
              Holistic Customer Experience & Service Design
            </h3>
            <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Design doesn't stop at the UI. I see customer experience as a full journey — from first impressions to support tickets to offline moments that often go unnoticed. Designers are uniquely positioned to step back and bring it all together. I love helping teams uncover blind spots, break down silos, and craft experiences that actually feel intentional, end to end.
            </p>
          </div>

          {/* Product Strategy */}
          <div 
            ref={el => expertiseRefs.current[3] = el}
            className="transition-opacity duration-1000"
            style={{ opacity: expertiseOpacities[3] || 0 }}
          >
            <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
              Product Strategy, Research & Workflow Design
            </h3>
            <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Switching between big-picture thinking and practical delivery is a constant challenge in design. I support teams in defining a sharp UX vision, building smart workflows, and making space for both deep exploration and consistent execution. I'm a fan of dual-track agile, lean research, and lightweight processes that free up energy for the work that really matters.
            </p>
          </div>

          {/* AI in Design */}
          <div 
            ref={el => expertiseRefs.current[4] = el}
            className="transition-opacity duration-1000"
            style={{ opacity: expertiseOpacities[4] || 0 }}
          >
            <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
              AI in the Design Lifecycle
            </h3>
            <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              I'm deeply curious about how AI is reshaping the way we design — and how designers can shape AI in return. I help teams bring AI into the entire design lifecycle: from user research and ideation to wireframing, content, and prototyping. Lately, I've been focused on AI prototyping — using new tools to generate functional concepts fast, test ideas early, and go beyond mockups. It's an exciting time to rethink how we work — and where design fits in the product development process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;

