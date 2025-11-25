const TargetAudience = () => {
  return (
    <section className="max-w-7xl mx-auto py-5">
      <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-12 text-center">
        Who is it for?
      </h2>
    
      <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-lg mb-12 max-w-4xl mx-auto">
        This training is designed for tech professionals who already work with standard tools and workflows. It is grounded in real-world challenges: navigating design systems and brand guidelines, collaborating across functions, and integrating with existing assets and infrastructure.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-2xl bg-design-bg p-6 ">
          <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">UX</h3>
          <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Design smarter. Test faster. Handoff smoother.
          </p>
          <p className="font-raleway text-gray-600 dark:text-gray-300">
            Elevate every part of your design workflow and create more impactful experiences that go beyond visual interactions. Design non-deterministic, multimodal flows and hand off running code instead of annotated images.
          </p>
        </div>

        <div className="rounded-2xl bg-design-bg-pink p-6 ">
          <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">Product</h3>
          <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Validate ideas with real behaviour, not assumptions.
          </p>
          <p className="font-raleway text-gray-600 dark:text-gray-300">
            Expand your role and become a true product builder. Identify the right AI use cases, define clear outcomes and guardrails, and measure quality over time for meaningful insights sooner.
          </p>
        </div>

        <div className="rounded-2xl bg-design-bg p-6">
          <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">Marketing and Sales</h3>
          <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Move fast. Experiment. Adapt to your audience.
          </p>
          <p className="font-raleway text-gray-600 dark:text-gray-300">
            Build dashboards, test infinite variants of personalized landing pages, and create mini-apps and internal tools—all without waiting for development. Create product demos tailored to your customers, complete with fresh features from your roadmap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

