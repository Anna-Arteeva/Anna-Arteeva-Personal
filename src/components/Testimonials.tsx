import { useRef, useEffect, useState } from "react";
import testimonialsData from "../data/testimonials.json";

const Testimonials = () => {
  const [scrollY, setScrollY] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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

  const testimonialsOpacity = getElementOpacity(testimonialsRef);

  return (
    <section 
      ref={testimonialsRef}
      className="py-20 px-4 transition-opacity duration-1000"
      style={{ opacity: testimonialsOpacity }}
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="font-playfair font-bold text-3xl text-black dark:text-white mb-12 text-center">
          What People Say
        </h3>
        
        {/* Masonry Layout using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`p-6 rounded-2xl mb-8 break-inside-avoid ${!testimonial.backgroundColor ? 'bg-design-bg' : ''}`}
              style={testimonial.backgroundColor ? { backgroundColor: testimonial.backgroundColor } : undefined}
            >
              <div className="inline-block px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full mb-4">
                <span className="font-raleway text-xs font-semibold text-black dark:text-white">
                  {testimonial.category}
                </span>
              </div>
              <p className="font-raleway text-gray-700 dark:text-gray-300 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-2">
                {testimonial.linkedinUrl ? (
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-playfair font-semibold text-black dark:text-white hover:opacity-70 transition-opacity"
                  >
                    {testimonial.author}
                  </a>
                ) : (
                  <p className="font-playfair font-semibold text-black dark:text-white">
                    {testimonial.author}
                  </p>
                )}
                {testimonial.linkedinUrl && (
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:opacity-70 transition-opacity"
                    aria-label={`View ${testimonial.author}'s LinkedIn profile`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="flex-shrink-0"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="font-raleway text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

