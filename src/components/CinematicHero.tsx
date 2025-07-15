
import { useEffect, useState, useCallback } from "react";

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
    { text: "Beauty", fadeThreshold: 250 }, // Fades last
    { text: "is", fadeThreshold: 100 },
    { text: "essential", fadeThreshold: 150 },
    { text: "for", fadeThreshold: 120 },
    { text: "sustainable", fadeThreshold: 180 },
    { text: "living", fadeThreshold: 200 },
  ];

  const heroWords: WordHighlight[] = [
    { word: "Aesthetics", isActive: false, delay: 0 },
    { word: "transforms", isActive: false, delay: 800 },
    { word: "our", isActive: false, delay: 1600 },
    { word: "daily", isActive: false, delay: 2400 },
    { word: "experience", isActive: false, delay: 3200 }
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

  // Calculate word opacity based on scroll position
  const getWordOpacity = (fadeThreshold: number) => {
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
      const scale = 1 + (scrollProgress * 0.3);
      
      setTitleScale(scale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-background relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://uwnedyuvsqhwrerzjeae.supabase.co/storage/v1/object/public/story-audio//social_annaart_39271_httpss.mj.runV_ntCHMI9Zs_--ar_11_--video_1_f1202a22-825a-4694-b523-3a24f6809715_1.mp4" type="video/mp4" />
      </video>
      
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/100 z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Category Badge */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-ft-salmon text-sm font-medium border border-ft-salmon rounded">
            Wellness & Design
          </span>
        </div>

        {/* Main Headline with Cinematic Zoom and Staggered Fade */}
        <div 
          className="mb-12 transition-transform duration-300 ease-out origin-center"
          style={{ 
            transform: `scale(${titleScale})`,
            willChange: 'transform'
          }}
        >
          <h1 className="ft-headline-giant text-white leading-none">
            <div className="flex flex-wrap justify-center gap-x-4">
              {headlineWords.slice(0, 4).map((word, index) => (
                <span
                  key={index}
                  className="transition-opacity duration-300"
                  style={{
                    opacity: getWordOpacity(word.fadeThreshold),
                    willChange: 'opacity'
                  }}
                >
                  {word.text}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-4">
              {headlineWords.slice(4).map((word, index) => (
                <span
                  key={index + 4}
                  className="transition-opacity duration-300"
                  style={{
                    opacity: getWordOpacity(word.fadeThreshold),
                    willChange: 'opacity'
                  }}
                >
                  {word.text}
                </span>
              ))}
            </div>
          </h1>
        </div>

        {/* Interactive word section */}
        <div className="mb-16">
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

        {/* Byline */}
        <div className="text-white ft-caption">
          <p className="mb-2">
            By <span className="text-ft-salmon font-medium">Lovable</span> and <span className="text-ft-salmon font-medium">Anna Arteeva</span> in München, Germany
          </p>
          <p>July 14 2025</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
