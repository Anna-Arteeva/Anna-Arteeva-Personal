const VibeBuildingMaven = () => {
  const instructors = [
    {
      name: "Anna Arteeva",
      title: "Product Design Leader and AI educator",
      avatar: "/avatars/vibe_building/anna_arteeva_blue.png",
    },
    {
      name: "Julia Bastian",
      title: "Product Leader, AI Educator",
      avatar: "/avatars/vibe_building/julia_bastian.png",
    },
    {
      name: "Jan Six",
      title: "Principal Product Designer at GitHub Copilot",
      avatar: "/avatars/vibe_building/jan_six.png",
      company: "GitHub",
    },
    {
      name: "Vlad Daskalov",
      title: "Agentic AI advocate, Senior Solution Architect",
      avatar: "/avatars/vibe_building/vlad_daskatov.png",
    },
    {
      name: "Paul Leibssle",
      title: "Full-stack Marketer",
      avatar: "/avatars/vibe_building/paul_leibsle.png",
    },
    {
      name: "Stacy Faizulina & Alina Annayeva",
      title: "Senior Engineers at Shopify",
      avatar: "/avatars/vibe_building/shopify_stacy_alina.png",
      isDouble: true,
    },
  ];

  return (
    <section className="w-full">
      <div className="rounded-2xl bg-vibe-building-gradient overflow-hidden">
        {/* Main Content */}
        <div className="p-12 md:p-16 space-y-12">
          {/* Header */}
          <div className="text-left space-y-6">
            <h2 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-black dark:text-white leading-tight">
              Vibe-Building across the Org
            </h2>
            <p className="font-raleway font-medium text-black dark:text-white text-xl md:text-2xl max-w-4xl">
              AI building skills for non-developers across product, design, sales, marketing and HR teams.
            </p>
          </div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className={`relative overflow-visible ${
                    instructor.isDouble 
                      ? 'w-32 h-24 md:w-40 md:h-28 rounded-2xl' 
                      : 'w-24 h-24 md:w-28 md:h-28'
                  }`}>
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-full h-full object-cover overflow-visible"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className={instructor.isDouble ? 'flex-1 pt-2 max-w-[180px]' : 'flex-1 pt-2'}>
                  <h3 className="font-playfair font-black text-xl md:text-2xl text-black dark:text-white mb-2">
                    {instructor.name}
                  </h3>
                  <p className="font-raleway font-medium text-black dark:text-white text-base md:text-lg">
                    {instructor.title}
                  </p>
                  {instructor.company && (
                    <div className="mt-2 inline-flex items-center gap-2 text-black dark:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      <span className="text-sm font-raleway">GitHub</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Company Logos */}
          <div className="flex items-center justify-between gap-8 flex-wrap pt-8 border-t border-black/10 dark:border-white/10">
            {/* Left side - Partner and Tool logos */}
            <div className="flex items-center gap-8 flex-wrap">
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
              <img 
                src="/logos/ChatGPT-Logo.svg" 
                alt="ChatGPT" 
                className="h-6 w-auto dark:brightness-0 dark:invert"
              />
              <img 
                src="/logos/gemini.svg" 
                alt="Gemini" 
                className="h-6 w-auto dark:brightness-0 dark:invert"
              />
              <img 
                src="/logos/make-logo.svg" 
                alt="Make" 
                className="h-6 w-auto dark:brightness-0 dark:invert"
              />
            </div>

            {/* Right side - Maven logo */}
            <div className="flex items-center">
              <img 
                src="/logos/maven.png" 
                alt="Maven" 
                className="h-10 w-auto block dark:hidden"
              />
              <img 
                src="/logos/maven-dark-theme.png" 
                alt="Maven" 
                className="h-10 w-auto hidden dark:block"
              />
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
                February 24th - 4 weeks - 8 live sessions x 2.5 hours
              </p>
            </div>
            <a
              href="https://maven.com/anna-arteeva/vibe-building-across-the-org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair font-medium text-base md:text-lg hover:opacity-90 transition flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-design-pink inline-flex items-center gap-2"
              aria-label="Enroll on Maven for Vibe-Building across the Org course"
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

export default VibeBuildingMaven;

