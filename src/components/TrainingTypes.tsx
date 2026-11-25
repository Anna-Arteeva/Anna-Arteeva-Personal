const formats = [
  {
    title: "AI in UX, and UX for AI",
    description: "AI foundations, AI for productivity, and designing AI-powered products",
  },
  {
    title: "AI prototyping",
    description:
      "All you need to know to build products with coding agents, tailored to designer use cases and your own design system",
  },
  {
    title: "Prototyping AI experiences",
    description:
      "Learn how to design and prototype AI-powered experiences. Design for functionality with LLM, voice, and image generation logic.",
  },
];

const TrainingTypes = () => {
  return (
    <section id="training" className="max-w-6xl mx-auto px-4 pt-20">
      <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-12 text-center">
        For teams
      </h2>
      <div className="rounded-2xl bg-[rgba(213,69,117,0.1)] p-8 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col">
          <h3 className="font-playfair font-black text-3xl text-black dark:text-white mb-6">
            In-house trainings
          </h3>
          <p className="font-raleway text-lg text-black dark:text-white mb-8 leading-relaxed">
            Tailored to your team's needs. Delivered remote or onsite. Formats from a short clinic to multi-day programmes.
          </p>
          <div className="mt-auto">
            <a
              href="https://www.linkedin.com/in/annaarteeva/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-design-pink text-white font-playfair font-medium hover:opacity-90 transition inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-design-pink"
            >
              Get in touch on LinkedIn <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {formats.map((format) => (
            <div key={format.title}>
              <h4 className="font-playfair font-black text-xl text-black dark:text-white mb-2">
                {format.title}
              </h4>
              <p className="font-raleway text-base text-black dark:text-white leading-relaxed">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="font-raleway text-gray-800 dark:text-gray-200 text-center mt-8">
        Prefer a short open course in European hours? I also teach AI Prototyping with{" "}
        <a
          href="https://push-skills.com/trainings/ai-prototyping-for-designers"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-4 hover:text-design-pink transition-colors"
        >
          PUSH Skills
        </a>
        .
      </p>
    </section>
  );
};

export default TrainingTypes;
