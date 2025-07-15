
const ArticleContent = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      {/* Article Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="ft-body-large text-ft-charcoal leading-relaxed mb-8">
          The spaces we inhabit, the objects we surround ourselves with, and the natural environments we encounter daily have a profound impact on our psychological well-being, sense of safety, and overall happiness.
        </p>

        <p className="ft-body-medium text-ft-brown leading-relaxed mb-8">
          Research in environmental psychology has consistently shown that aesthetic beauty—whether found in architecture, urban design, nature, or personal spaces—directly influences our mental health, stress levels, and social behavior.
        </p>

        <p className="ft-body-medium text-ft-brown leading-relaxed mb-12">
          Cities and communities that prioritize beauty through thoughtful design, green spaces, and artistic elements report higher levels of resident satisfaction, lower crime rates, and stronger social cohesion. This isn't merely correlation—beauty has measurable effects on human well-being.
        </p>

        {/* Quote Section */}
        <blockquote className="border-l-4 border-ft-salmon pl-6 py-4 my-12 bg-secondary/30">
          <p className="ft-body-large text-ft-charcoal italic leading-relaxed mb-4">
            "Beautiful environments don't just make us feel good—they make us behave better, think more clearly, and connect more deeply with our communities. Beauty is not a luxury; it's a necessity for human flourishing."
          </p>
          <cite className="ft-caption text-ft-light-brown">
            — Dr. Sally Augustin, Environmental Design Research Association
          </cite>
        </blockquote>

        <p className="ft-body-medium text-ft-brown leading-relaxed mb-8">
          Studies have shown that exposure to beautiful environments can reduce cortisol levels, lower blood pressure, and improve cognitive function. Patients in hospitals with views of gardens recover faster than those facing blank walls.
        </p>

        <p className="ft-body-medium text-ft-brown leading-relaxed mb-12">
          The absence of beauty—characterized by neglected public spaces, monotonous architecture, and lack of natural elements—contributes to what researchers call "environmental stress," leading to increased anxiety, depression, and antisocial behavior.
        </p>

        {/* Section Header */}
        <h2 className="ft-headline-medium text-ft-charcoal mb-8 pt-8 border-t border-border">
          The Science of Aesthetic Well-being
        </h2>

        <p className="ft-body-medium text-ft-brown leading-relaxed mb-8">
          Neuroscience research reveals that our brains are hardwired to respond positively to certain aesthetic elements: natural patterns, symmetry, appropriate scale, and harmonious color combinations. These responses evolved over millennia and remain deeply embedded in our psychology.
        </p>

        <p className="ft-body-medium text-ft-brown leading-relaxed mb-8">
          When we encounter beautiful environments, our brains release dopamine and serotonin—the same neurotransmitters associated with happiness and well-being. This biological response explains why beautiful spaces feel restorative and energizing.
        </p>

        {/* Key Points - This content is now handled by ScrollStorySection */}

        <p className="ft-body-medium text-ft-brown leading-relaxed mb-8">
          The implications extend beyond individual well-being to community safety and social cohesion. Neighborhoods with well-maintained, aesthetically pleasing public spaces experience lower crime rates and stronger social networks.
        </p>

        <p className="ft-body-medium text-ft-brown leading-relaxed">
          As we continue to urbanize and spend more time indoors, prioritizing beauty in our built environments becomes not just desirable but essential for creating sustainable, healthy communities where all people can thrive.
        </p>
      </div>
    </article>
  );
};

export default ArticleContent;
