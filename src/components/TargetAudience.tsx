const audiences = [
  {
    title: "Product designers and teams",
    lead: "Prototype with your real design system. Hand off running code.",
    description:
      "Build functional prototypes with your brand, your components and real data. Test flows with users earlier and hand off working code instead of annotated screens. For individual designers and whole design teams.",
    background: "bg-design-bg",
  },
  {
    title: "Creative designers",
    lead: "Keep your taste. Skip the generic look.",
    description:
      "For brand, visual and interaction designers and art directors. Build your own visual language with a coding agent, then finish art-directed work with motion, scroll interactions and 3D.",
    background: "bg-design-bg-pink",
  },
  {
    title: "Product managers",
    lead: "Validate ideas with real behaviour, not assumptions.",
    description:
      "Turn an idea into a working prototype you can put in front of users and stakeholders, and share a common language with design and engineering.",
    background: "bg-design-bg",
  },
];

const TargetAudience = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-16 text-center">
        Who is it for?
      </h2>

      <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-lg mb-12 max-w-4xl mx-auto">
        My courses and trainings are for professionals who already work with standard tools and workflows. They are grounded in real-world challenges: navigating design systems and brand guidelines, collaborating across functions, and integrating with existing assets and infrastructure.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {audiences.map((audience) => (
          <div key={audience.title} className={`rounded-2xl p-6 ${audience.background}`}>
            <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-2">
              {audience.title}
            </h3>
            <p className="font-raleway font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {audience.lead}
            </p>
            <p className="font-raleway text-gray-600 dark:text-gray-300">
              {audience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetAudience;
