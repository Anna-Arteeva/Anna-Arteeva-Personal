
import { useEffect, useState, useCallback } from "react";
import { Play } from "lucide-react";

interface WordHighlight {
  word: string;
  isActive: boolean;
  delay: number;
}

const CinematicHero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [titleScale, setTitleScale] = useState(1);

  // Main headline words with staggered fade priorities
  const headlineWords = [
    { text: "Shaping", fadeThreshold: 250 },
    { text: "tomorrow's", fadeThreshold: 100 },
    { text: "products,", fadeThreshold: 150 },
    { text: "today", fadeThreshold: 120 },
  ];

  // Interactive words for animation
  const heroWords: WordHighlight[] = [
    { word: "AI", isActive: false, delay: 0 },
    { word: "SaaS", isActive: false, delay: 800 },
    { word: "FinTech", isActive: false, delay: 1600 },
    { word: "B2B", isActive: false, delay: 2400 },
  ];

  // Paragraph words for gradual fade out
  const paragraphWords = [
    { text: "Multi-faceted", fadeThreshold: 80 },
    { text: "hands-on", fadeThreshold: 100 },
    { text: "designer,", fadeThreshold: 120 },
    { text: "product", fadeThreshold: 140 },
    { text: "builder,", fadeThreshold: 160 },
    { text: "and", fadeThreshold: 180 },
    { text: "AI", fadeThreshold: 200 },
    { text: "educator", fadeThreshold: 220 },
    { text: "with", fadeThreshold: 240 },
    { text: "a", fadeThreshold: 260 },
    { text: "knack", fadeThreshold: 280 },
    { text: "for", fadeThreshold: 300 },
    { text: "strategy", fadeThreshold: 320 },
    { text: "and", fadeThreshold: 340 },
    { text: "complex", fadeThreshold: 360 },
    { text: "systems", fadeThreshold: 380 },
    { text: "design.", fadeThreshold: 400 },
  ];

  const [words, setWords] = useState(heroWords);

  const activateWord = useCallback((index: number) => {
    setWords(prev => 
      prev.map((word, i) => ({
        ...word,
        isActive: i === index
      }))
    );
    setCurrentWordIndex(index);
  }, []);

  const deactivateWord = useCallback((index: number) => {
    setWords(prev => 
      prev.map((word, i) => ({
        ...word,
        isActive: i === index ? false : word.isActive
      }))
    );
  }, []);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    // Activate each word with delay
    heroWords.forEach((word, index) => {
      const activateTimeout = setTimeout(() => {
        activateWord(index);
      }, word.delay);
      
      const deactivateTimeout = setTimeout(() => {
        deactivateWord(index);
      }, word.delay + 1600);
      
      timeouts.push(activateTimeout, deactivateTimeout);
    });

    // Mark as complete after all animations
    const completeTimeout = setTimeout(() => {
      setIsComplete(true);
    }, 4800);
    
    timeouts.push(completeTimeout);

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [activateWord, deactivateWord]);

  // Hero elements with their fade thresholds
  const heroElements = {
    name: { fadeThreshold: 60 },
    subtitle: { fadeThreshold: 120 },
    interactiveWords: { fadeThreshold: 160 },
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

  // Scroll effect for title zoom and word fading
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setScrollY(scrollPosition);
      
      // Calculate scale based on scroll position
      const scrollProgress = Math.min(scrollPosition / (windowHeight * 0.8), 1);
      const scale = 1 + (scrollProgress * 0.8);
      
      setTitleScale(scale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollEffect = useCallback(() => {
    const windowHeight = window.innerHeight;
    const targetScroll = windowHeight * 0.9;
    const currentScroll = window.scrollY;
    
    // Scroll down slowly to 90vh
    const scrollDown = () => {
      const startTime = Date.now();
      const duration = 3000; // 3 seconds for slow scroll down
      
      const animateDown = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentPosition = currentScroll + (targetScroll - currentScroll) * easeOut;
        
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
          requestAnimationFrame(animateDown);
        } else {
          // Start scrolling back up after reaching 90vh
          setTimeout(scrollUp, 500); // Small pause before scrolling back
        }
      };
      
      requestAnimationFrame(animateDown);
    };
    
    // Scroll back up faster
    const scrollUp = () => {
      const startTime = Date.now();
      const duration = 1500; // 1.5 seconds for faster scroll up
      const startPosition = window.scrollY;
      
      const animateUp = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition - (startPosition - currentScroll) * easeOut;
        
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
          requestAnimationFrame(animateUp);
        }
      };
      
      requestAnimationFrame(animateUp);
    };
    
    scrollDown();
  }, []);

  return (
    <section className="min-h-screen bg-design-bg relative overflow-hidden flex flex-col">
      {/* Name and Subtitle positioned at top */}
      <div className="pt-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name */}
          <div 
            className="mb-2 transition-all duration-300 ease-out origin-center"
            style={{ 
              transform: `scale(${titleScale})`,
              opacity: getElementOpacity(heroElements.name.fadeThreshold),
              willChange: 'transform, opacity'
            }}
          >
            <h2 className="font-playfair font-black text-3xl text-black leading-none">
              Anna Arteeva
            </h2>
          </div>

          {/* Subtitle */}
          <div 
            className="mb-8 transition-all duration-300 ease-out origin-center"
            style={{ 
              transform: `scale(${titleScale})`,
              opacity: getElementOpacity(heroElements.subtitle.fadeThreshold),
              willChange: 'transform, opacity'
            }}
          >
            <p className="font-allura text-2xl text-black leading-none">
              Designer and Design Leader
            </p>
          </div>
        </div>
      </div>

      {/* Main content centered in the middle */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center relative z-20">
          {/* Main Headline with Cinematic Zoom and Staggered Fade */}
          <div 
            className="mb-12 transition-transform duration-300 ease-out origin-center"
            style={{ 
              transform: `scale(${titleScale})`,
              willChange: 'transform'
            }}
          >
            <h1 className="font-playfair font-black text-7xl text-black leading-[80px]">
              <div className="flex flex-wrap justify-center gap-x-4">
                {headlineWords.map((word, index) => (
                  <span
                    key={index}
                    className="transition-opacity duration-300"
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

          {/* Paragraph with gradual word fade - Now first */}
          <div 
            className="mb-16 transition-all duration-300 ease-out origin-center"
            style={{ 
              transform: `scale(${titleScale})`,
              opacity: getElementOpacity(heroElements.paragraph.fadeThreshold),
              willChange: 'transform, opacity'
            }}
          >
            <p className="font-raleway font-normal text-2xl text-black leading-[38px] max-w-4xl mx-auto">
              {paragraphWords.map((word, index) => (
                <span
                  key={index}
                  className="transition-opacity duration-300"
                  style={{
                    opacity: getElementOpacity(word.fadeThreshold),
                    willChange: 'opacity'
                  }}
                >
                  {word.text === 'designer,' || word.text === 'builder,' || word.text === 'AI' || word.text === 'educator' ? (
                    <span className="text-design-pink">{word.text}</span>
                  ) : (
                    word.text
                  )}
                  {index < paragraphWords.length - 1 && ' '}
                </span>
              ))}
            </p>
          </div>

          {/* Interactive word section - Now second */}
          <div 
            className="transition-all duration-300 ease-out origin-center"
            style={{ 
              transform: `scale(${titleScale})`,
              opacity: getElementOpacity(heroElements.interactiveWords.fadeThreshold),
              willChange: 'transform, opacity'
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`word-highlight ${word.isActive ? 'active' : ''} ${
                    isComplete ? 'opacity-100' : ''
                  }`}
                  style={{
                    animationDelay: `${word.delay}ms`
                  }}
                >
                  {word.word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation positioned at bottom */}
      <div className="pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="transition-all duration-300 ease-out origin-center"
            style={{ 
              transform: `scale(${titleScale})`,
              opacity: getElementOpacity(heroElements.navigation.fadeThreshold),
              willChange: 'transform, opacity'
            }}
          >
            <div className="flex flex-row gap-7 items-center justify-center text-lg text-black font-playfair font-medium">
              <div className="cursor-pointer hover:text-design-pink transition-colors duration-300">
                Blog
              </div>
              <div className="cursor-pointer hover:text-design-pink transition-colors duration-300">
                AI courses
              </div>
              <div className="cursor-pointer hover:text-design-pink transition-colors duration-300">
                Portfolio
              </div>
              <div className="cursor-pointer hover:text-design-pink transition-colors duration-300">
                LinkedIn
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
