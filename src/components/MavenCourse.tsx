const MavenCourse = () => {
  return (
    <section className="w-full">
      <div className="rounded-2xl bg-vibe-gradient overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 md:gap-4 items-center px-6 py-8 md:px-10 md:py-12">
          {/* Left side - Content */}
          <div className="space-y-6 order-1">
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
              AI Prototyping
              <br />
              for Product Designers
            </h2>

            {/* Sub-points */}
            <div className="space-y-2 font-raleway font-medium text-black dark:text-white" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>
              <p>Build functional apps with design systems and AI-powered functionality.</p>
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
          <div className="relative w-full min-w-0 order-2">
            <div className="relative w-full max-w-[100%]">
              <div className="relative w-full aspect-[2/1] min-h-[16rem] md:min-h-[22rem] lg:min-h-[26rem]">
                {/* Light mode image */}
                <img 
                  src="/avatars/anna-jan-kevin.png" 
                  alt="Anna Arteeva, Jan Six, and Kevin Cannon" 
                  className="w-full h-full object-contain object-center block dark:hidden"
                />
                {/* Dark mode image */}
                <img 
                  src="/avatars/anna-jan-kevin-dark.png" 
                  alt="Anna Arteeva, Jan Six, and Kevin Cannon" 
                  className="w-full h-full object-contain object-center hidden dark:block"
                />
              </div>
            </div>
          </div>
        
        </div>

        {/* Cohort Details & CTA */}
        <div className="maven-course-footer relative px-6 py-6 md:px-10 md:py-8 bg-black/5 dark:bg-black/20">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="space-y-1">
              <h4 className="font-playfair font-black text-xl text-black dark:text-white">
                Next cohorts
              </h4>

              <p className="font-raleway text-black dark:text-white" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', lineHeight: '1.6' }}>
                March 23 - 4 weeks - 8 live sessions × 2.5 hours
              </p>
              <p className="font-raleway text-black dark:text-white" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', lineHeight: '1.6' }}>
                April 20 - 4 weeks - 8 live sessions × 2.5 hours
              </p>
            </div>
            <a
              href="https://maven.com/anna-arteeva/prototyping-for-designers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair font-medium text-base md:text-lg hover:opacity-90 transition flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-design-pink inline-flex items-center gap-2"
              aria-label="Enroll on Maven for AI Prototyping for Product Designers course"
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

