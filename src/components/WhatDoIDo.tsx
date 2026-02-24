import { ArrowRight } from "lucide-react";

const WhatDoIDo = () => {

  return (
    <section 
      className="mx-4 my-8 md:my-4 flex flex-col md:flex-row gap-8 md:gap-4"
      aria-label="Services"
    >
      {/* Design Leadership */}
      <article 
        className="relative overflow-hidden rounded-2xl flex-1 w-full md:w-1/2 flex items-center px-6 md:px-8 lg:px-20 py-12 md:py-16 lg:py-20"
        aria-labelledby="design-leadership-heading"
      >
        {/* Background layer */}
        <div
          className="absolute inset-0 rounded-2xl bg-design-bg-pink"
          aria-hidden="true"
        />

        {/* Content layer */}
        <div 
          className="max-w-xl text-left"
        >
          <h2 
            id="design-leadership-heading"
            className="font-playfair font-black text-3xl lg:text-5xl text-black dark:text-white mb-4 lg:mb-6 leading-tight"
          >
            Design Leadership
          </h2>
          <p className="font-raleway text-lg lg:text-xl text-black dark:text-white leading-relaxed">
            Hands-on design leadership: org design, UX strategy, workflow design, team coaching and upskilling, and design systems.
          </p>
        </div>
      </article>

      {/* AI Training with Background */}
      <article 
        className="relative overflow-hidden rounded-2xl flex-1 w-full md:w-1/2 flex items-end md:justify-end rounded-2xl px-6 md:px-8 lg:px-20 py-12 md:py-16 lg:py-20"
        aria-labelledby="ai-training-heading"
      >
        {/* Background layer */}
        <div
          className="absolute inset-0 rounded-2xl bg-design-bg"
          aria-hidden="true"
        />

        <div 
          className="max-w-xl text-left md:text-right"
        >
          <h2 
            id="ai-training-heading"
            className="font-playfair font-black text-3xl lg:text-5xl text-black dark:text-white mb-4 lg:mb-6 leading-tight"
          >
            AI training for Design and Product teams
          </h2>
          <p className="font-raleway text-lg lg:text-xl text-black dark:text-white mb-6 lg:mb-8 leading-relaxed">
            I run practical workshops and coaching programmes that upskill your team in AI, AI prototyping and UX for AI products.
          </p>
          <a
            href="/#training"
            className="inline-flex items-center gap-2 font-playfair font-medium text-lg lg:text-xl text-black dark:text-white hover:text-design-pink dark:hover:text-design-pink transition-colors duration-300 group"
          >
            Learn more about AI upskilling
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default WhatDoIDo;

