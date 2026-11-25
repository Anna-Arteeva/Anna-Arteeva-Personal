import testimonialsData from "../data/testimonials.json";

const About = () => {
  const recommendation = testimonialsData.find(
    (testimonial) => testimonial.category === "Design & Leadership"
  );

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 pb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-8 text-center">
          About
        </h2>
        <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
          I have spent about 15 years in product, UX and interaction design, most recently as Head of
          Product Design at Payoneer, and I started out in frontend. Today I teach designers and
          product teams the practical skills and judgement to build with coding agents.
        </p>
        {recommendation && (
          <figure className="rounded-2xl bg-design-bg p-6">
            <blockquote className="font-raleway text-gray-700 dark:text-gray-300 italic mb-4">
              "{recommendation.quote}"
            </blockquote>
            <figcaption className="flex items-center gap-3">
              {recommendation.profileImage && (
                <img
                  src={recommendation.profileImage}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <a
                  href={recommendation.linkedinUrl ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-playfair font-semibold text-black dark:text-white hover:opacity-70 transition-opacity"
                >
                  {recommendation.author}
                </a>
                <p className="font-raleway text-sm text-gray-600 dark:text-gray-400">
                  {recommendation.role}
                </p>
              </div>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
};

export default About;
