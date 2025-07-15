import { useEffect, useState, useRef } from "react";

interface ListItem {
  title: string;
  description: string;
}

const ScrollStorySection = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(-1);
  const [titleFixed, setTitleFixed] = useState(false);
  const [sectionComplete, setSectionComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const listItems: ListItem[] = [
    {
      title: "Stress Reduction:",
      description: "Beautiful environments lower cortisol and promote relaxation"
    },
    {
      title: "Enhanced Creativity:",
      description: "Aesthetic spaces stimulate innovative thinking and problem-solving"
    },
    {
      title: "Social Connection:",
      description: "Beautiful public spaces encourage community interaction and belonging"
    },
    {
      title: "Physical Health:",
      description: "Access to beautiful natural spaces promotes exercise and outdoor activity"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      
      // Calculate scroll progress through the section
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + sectionHeight)
      ));

      // Title becomes fixed when section starts entering viewport
      if (scrollProgress > 0.1 && !sectionComplete) {
        setTitleFixed(true);
      } else if (scrollProgress <= 0.1 || sectionComplete) {
        setTitleFixed(false);
      }

      // Calculate which item should be active based on scroll progress
      const itemProgress = Math.max(0, (scrollProgress - 0.2) / 0.6);
      const activeIndex = Math.floor(itemProgress * listItems.length);
      
      if (activeIndex >= listItems.length) {
        setSectionComplete(true);
        setCurrentItemIndex(-1);
      } else {
        setSectionComplete(false);
        setCurrentItemIndex(Math.max(-1, activeIndex));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionComplete, listItems.length]);

  return (
    <div 
      ref={sectionRef}
      className="z-50 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-background via-secondary/20 to-background"
      style={{ height: `${100 + (listItems.length * 100)}vh` }}
    >
      {/* Fixed Title */}
      <div
        ref={titleRef}
        className={`transition-all duration-1000 ease-out ${
          titleFixed && !sectionComplete
            ? 'fixed top-1/2 left-8 md:left-16 -translate-y-1/2 z-10'
            : 'relative top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
        }`}
      >
        <h3 className={`ft-headline-medium text-ft-charcoal transition-opacity duration-1000 ease-out ${
          titleFixed && !sectionComplete 
            ? 'text-left w-[54rem] opacity-100 z-0' 
            : 'text-center w-[54rem] opacity-0'
        }`}>
          How beauty impacts our daily lives:
        </h3>
      </div>

      {/* Scrolling List Items */}
      <div className="absolute inset-0">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="absolute right-8 md:right-16 w-full max-w-lg flex items-center justify-end h-screen"
            style={{ top: `${100 + (index * 100)}vh` }}
          >
            <div className="z-50 word-highlight bg-white border-2 border-ft-charcoal rounded p-6 shadow-lg">
              <h4 className="ft-body-large text-ft-charcoal font-semibold mb-3">
                {item.title}
              </h4>
              <p className="ft-body-medium text-ft-brown leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Hint */}
      {!titleFixed && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
          <p className="ft-caption text-ft-light-brown mb-4">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-ft-light-brown rounded-full flex justify-center">
            <div className="w-1 h-3 bg-ft-light-brown rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollStorySection;