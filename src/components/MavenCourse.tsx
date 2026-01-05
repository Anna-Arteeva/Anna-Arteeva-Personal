const MavenCourse = () => {
  return (
    <section className="w-full">
      <div className="rounded-2xl bg-vibe-gradient overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center p-12 md:p-16 " >
          {/* Left side - Content */}
          <div className="space-y-6 order-2 md:order-1">
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
          <div className="relative flex md:justify-center sm:justify-start order-1 md:order-2">
            <div className="relative">
              {/* Image container */}
              <div className="relative w-[14rem] h-[14rem] md:w-[22rem] md:h-[22rem] lg:w-[23rem] lg:h-[23rem]">
                <img 
                  src="/avatars/anna-arteeva-maven.png" 
                  alt="Anna Arteeva" 
                  className="md:w-full h-full object-contain"
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
                April 20th - 4 weeks - 8 live sessions × 2.5 hours
              </p>
              <p className="font-raleway text-black dark:text-white line-through" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', lineHeight: '1.6' }}>
                January 5th - 4 weeks - 8 live sessions × 2.5 hours
              </p>
            </div>
            <a
              href="https://maven.com/anna-arteeva/prototyping-for-designers"
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
  );
};

export default MavenCourse;

