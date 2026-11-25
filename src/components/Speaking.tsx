// Add future talks as new entries. Wording switches from "upcoming" to "past"
// by itself once the date has passed.
const talks = [
  {
    event: "SmashingConf AI 2027",
    date: "2026-12-01",
    dateLabel: "1 December 2026",
    place: "Online",
    title: "Prototyping AI Functionality",
    description:
      "What changes in the design process when language models, voice and image generation are part of the product itself, and the prototype is live and evolving. Plus a hands-on breakout session with Vitaly Friedman.",
    image: "/talks/smashing-ai-2027.png",
    imageAlt: "SmashingConf AI 2027 speaker card: Anna Arteeva",
    upcomingHref: "https://smashingconf.com/ai-2027-conference",
    upcomingLabel: "Get a ticket",
    pastHref: "https://smashingconf.com/ai-2027-conference",
    pastLabel: "About the conference",
  },
];

const Speaking = () => {
  const now = new Date();

  return (
    <section id="speaking" className="max-w-6xl mx-auto px-4 pt-20">
      <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-12 text-center">
        Speaking
      </h2>
      <div className="flex flex-col gap-6">
        {talks.map((talk) => {
          // Counts as upcoming until the end of the event day.
          const isUpcoming = now < new Date(`${talk.date}T23:59:59`);
          return (
            <article
              key={talk.event}
              className="rounded-2xl bg-design-bg-pink overflow-hidden grid md:grid-cols-2 items-center"
            >
              <img
                src={talk.image}
                alt={talk.imageAlt}
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-6 md:p-10">
                <p className="font-raleway text-sm font-semibold uppercase tracking-wide text-design-pink mb-2">
                  {isUpcoming ? "Upcoming talk" : "Talk"} · {talk.event}
                </p>
                <h3 className="font-playfair font-black text-3xl text-black dark:text-white mb-2">
                  {talk.title}
                </h3>
                <p className="font-raleway font-medium text-black dark:text-white mb-4">
                  {talk.dateLabel} · {talk.place}
                </p>
                <p className="font-raleway text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                  {talk.description}
                </p>
                <a
                  href={isUpcoming ? talk.upcomingHref : talk.pastHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair font-medium hover:opacity-90 transition inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-design-pink"
                >
                  {isUpcoming ? talk.upcomingLabel : talk.pastLabel}{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Speaking;
