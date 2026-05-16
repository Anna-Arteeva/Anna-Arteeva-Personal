
import { useEffect, useState } from "react";
import MainNav from "./MainNav";
import SiteBrand from "./SiteBrand";

const CinematicHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [titleScale, setTitleScale] = useState(1);

  // Main headline words with staggered fade priorities
  const headlineWords = [
    { text: "Hi,", fadeThreshold: 250 },
    { text: "I", fadeThreshold: 100 },
    { text: "am", fadeThreshold: 150 },
    { text: "Anna", fadeThreshold: 120 },
  ];

  // Paragraph words for gradual fade out
  const paragraphWords = [
    { text: "Product", fadeThreshold: 100 },
    { text: "design leader", fadeThreshold: 120 },
    { text: "and", fadeThreshold: 140 },
    { text: "AI coach.", fadeThreshold: 160 },
    { text: "I help", fadeThreshold: 180 },
    { text: "teams and individuals", fadeThreshold: 200 },
    { text: "to build", fadeThreshold: 220 },
    { text: "with", fadeThreshold: 240 },
    { text: "AI", fadeThreshold: 260 },
    { text: "and", fadeThreshold: 280 },
    { text: "design", fadeThreshold: 300 },
    { text: "AI-powered", fadeThreshold: 340 },
    { text: "products", fadeThreshold: 360 },
  ];

  // Hero elements with their fade thresholds
  const heroElements = {
    name: { fadeThreshold: 60 },
    subtitle: { fadeThreshold: 120 },
    paragraph: { fadeThreshold: 200 },
    navigation: { fadeThreshold: 300 },
    scrollIndicator: { fadeThreshold: 140 },
    scrollButton: { fadeThreshold: 350 }
  };

  // Calculate element opacity based on scroll position
  const getElementOpacity = (fadeThreshold: number) => {
    const fadeStart = fadeThreshold;
    const fadeEnd = fadeThreshold + 100;

    if (scrollY < fadeStart) return 1;
    if (scrollY > fadeEnd) return 0;

    return 1 - ((scrollY - fadeStart) / (fadeEnd - fadeStart));
  };

  // rAF-throttled scroll handler — drives opacity directly from scroll position
  // so word/element fades track the cursor 1:1 instead of chasing it via transitions.
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(y / (windowHeight * 0.8), 1);
        setScrollY(y);
        setTitleScale(1 + scrollProgress * 0.8);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col bg-design-bg rounded-2xl m-4">

      {/* Site Brand positioned at top */}
      <div className="pt-8 px-4 text-center">
        <div className="">
          <div
            className="mb-8 origin-center"
            style={{
              transform: `scale(${titleScale})`,
              opacity: getElementOpacity(heroElements.name.fadeThreshold),
              willChange: 'transform, opacity'
            }}
          >
            <SiteBrand align="center" />
          </div>
        </div>
      </div>

      {/* Main content centered in the middle */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center relative z-20">
          {/* Main Headline with Cinematic Zoom and Staggered Fade */}
          <div
            className="mb-8 origin-center"
            style={{
              transform: `scale(${titleScale})`,
              willChange: 'transform'
            }}
          >
            <h1 className="font-playfair font-black text-7xl text-black dark:text-white leading-[80px]">
              <div className="flex flex-wrap justify-center gap-x-4">
                {headlineWords.map((word, index) => (
                  <span
                    key={index}
                    style={{
                      opacity: getElementOpacity(word.fadeThreshold),
                      willChange: 'opacity'
                    }}
                  >
                    {word.text}
                  </span>
                ))}
              </div>
            </h1>
          </div>

          {/* Paragraph with gradual word fade */}
          <div
            className="mb-16 origin-center"
            style={{
              transform: `scale(${titleScale})`,
              opacity: getElementOpacity(heroElements.paragraph.fadeThreshold),
              willChange: 'transform, opacity'
            }}
          >
            <p className="font-raleway font-normal text-2xl text-black dark:text-white leading-[38px] max-w-4xl mx-auto">
              {paragraphWords.map((word, index) => (
                <span
                  key={index}
                  style={{
                    opacity: getElementOpacity(word.fadeThreshold),
                    willChange: 'opacity'
                  }}
                >
                  {word.text === 'design leader' || word.text === 'AI coach.' ? (
                    <span className="text-design-pink">{word.text}</span>
                  ) : (
                    word.text
                  )}
                  {index < paragraphWords.length - 1 && ' '}
                </span>
              ))}
            </p>
          </div>

          {/* CTA */}
          <div
            className="origin-center"
            style={{
              transform: `scale(${titleScale})`,
              opacity: getElementOpacity(heroElements.paragraph.fadeThreshold),
              willChange: 'transform, opacity',
            }}
          >
            <div className="flex flex-row gap-4 items-center justify-center">
              <a target="_blank"
                href="https://www.linkedin.com/in/annaarteeva/"
                className="px-6 py-3 border-2 border-design-pink bg-design-pink text-white font-playfair font-medium rounded-xl
                 hover:bg-opacity-90 transition-transform duration-300 ease-out hover:scale-105"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation positioned at bottom */}
      <div className="pb-8 px-4">
        <div className="mx-auto text-center">
          <div
            className="origin-center"
            style={{
              opacity: getElementOpacity(heroElements.navigation.fadeThreshold),
              willChange: 'opacity'
            }}
          >
            <MainNav />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
