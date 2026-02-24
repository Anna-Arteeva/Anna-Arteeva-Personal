const AIPrototypingProductPeople = () => {
  return (
    <section className="w-full">
      <div className="rounded-2xl bg-ai-product-people overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 md:gap-4 items-center px-6 py-8 md:px-10 md:py-12">
          {/* Left side - Content */}
          <div className="space-y-6 order-1 text-white">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logos/maven-dark-theme.png"
                alt="Maven"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>

            <h2 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              AI Prototyping
              <br />
              for Product
              <br />
              People
            </h2>

            <p className="font-raleway font-medium text-white" style={{ fontSize: 'clamp(1rem, 3vw, 1.35rem)' }}>
              Explore → prototype → validate → ship to production
            </p>

            <div className="flex items-center gap-6 mt-6 flex-wrap">
              <img
                src="/logos/logos.png"
                alt="Lovable, Cursor, and partners"
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
            </div>
          </div>

          {/* Right side - Speakers image (names are on the photo) */}
          <div className="relative w-full min-w-0 order-2">
            <div className="relative w-full aspect-[2/1] min-h-[16rem] md:min-h-[22rem] lg:min-h-[26rem]">
              <img
                src="/avatars/anna-julia-vlad.png"
                alt="Anna Arteeva, Julia Bastian, and Vlad Daskalov"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Cohort Details, badge & CTA */}
        <div className="px-6 py-6 md:px-10 md:py-8 bg-ai-product-people-footer">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="space-y-1">
              <h4 className="font-playfair font-black text-xl text-white">
                First cohort
              </h4>
              <p
                className="font-raleway text-white/95"
                style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', lineHeight: '1.6' }}
              >
                21 April · 4 weeks · 9 live sessions · 2.5 hours each
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0 flex-wrap">
              <a
                href="https://maven.com/anna-arteeva/ai-prototyping-product-people"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-[#0c182a] font-playfair font-medium text-base md:text-lg hover:opacity-90 transition flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Enroll on Maven for AI Prototyping for Product People course"
              >
                Enroll on Maven
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPrototypingProductPeople;
