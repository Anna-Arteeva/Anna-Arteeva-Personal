import { Link } from "react-router-dom";

const Card = ({
  title,
  duration,
  price,
  description,
  sessions,
  ctaHref,
}: {
  title: string;
  duration: string;
  price: string;
  description: string;
  sessions: { label: string; href?: string }[];
  ctaHref: string;
}) => (
  <div className="rounded-2xl bg-design-bg pt-6 px-6 flex flex-col">
    <h2 className="font-playfair font-black text-3xl text-black dark:text-white mb-2">{title}</h2>
    <p className="font-raleway text-gray-800 dark:text-gray-200 mb-4">{duration} · from {price} · Cohort-based Course</p>
    <p className="font-raleway text-gray-800 dark:text-gray-200 mb-6">{description}</p>
    <hr className="border-gray-200 dark:border-gray-800 my-4" />
    <ul className="space-y-4 mb-6">
      {sessions.map((s, i) => (
        <li key={i} className="flex items-center justify-between">
          <span className={`font-raleway text-black dark:text-white ${!s.href ? 'line-through opacity-50' : ''}`}>{s.label}</span>
          {s.href ? (
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair hover:opacity-90 transition"
            >
              Enroll
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair opacity-50 cursor-not-allowed"
              title="Enrollment temporarily disabled"
            >
              Enroll
            </button>
          )}
        </li>
      ))}
    </ul>
    <div className="">
      <div className="border-t border-gray-200 dark:border-gray-800 text-center">
        {ctaHref.startsWith('http') ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-5 font-playfair text-black dark:text-white hover:text-design-pink transition-colors"
            role="button"
            aria-label={`Course description ${title}`}
          >
           Course description →
          </a>
        ) : (
          <Link
            to={ctaHref}
            className="block w-full py-5 font-playfair text-black dark:text-white hover:text-design-pink transition-colors"
            role="button"
            aria-label={`Course description ${title}`}
          >
            Course description →
          </Link>
        )}
      </div>
    </div>
  </div>
);

const PushCohorts = () => {
  return (
    <>
      <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-12 mt-24 text-center">
        Upcoming Cohorts on Push Skills
      </h2>

      <div className=" mx-auto grid md:grid-cols-2 gap-8 items-start">
        <Card
          title="AI prototyping mastery"
          duration="4 Days"
          price="€349"
          description="A comprehensive, hands-on course for UX/UI/Product designers and product managers to build and refine advanced, interactive AI-powered prototypes that feel production-ready — no coding required."
          sessions={[
            { label: "15–19 September" },
            { label: "13–17 October" },
            { label: "1-4 December", href: "https://ti.to/push/ai-prototyping-december-2025" },
          ]}
          ctaHref="https://push-skills.com/ai-powered-prototyping-for-designers-and-product-managers"
        />

        <Card
          title="Prototyping AI Products"
          duration="2 Days"
          price="€349"
          description="An advanced AI prototyping course for designers and product managers who want to build functional, interactive prototypes with integrated AI models for text, audio and image generation; dynamic data and file storage."
          sessions={[
            { label: "29 September, 1 October" },
            { label: "8, 10 December", href: "https://ti.to/push/ai-products-online-december-2025" },
          ]}
          ctaHref="https://push-skills.com/prototyping-ai-products"
        />
      </div>
    </>
  );
};

export default PushCohorts;
