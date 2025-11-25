import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

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
  sessions: { label: string; href?: string; showBadge?: boolean }[];
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
          <div className="flex items-center gap-2">
            <span className={`font-raleway text-black dark:text-white ${!s.href ? 'line-through opacity-50' : ''}`}>{s.label}</span>
            {s.showBadge && (
              <Badge className="text-xs bg-design-pink rounded-lg font-raleway">
                Last Chance
              </Badge>
            )}
          </div>
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

const TrainingTypes = () => {
  const now = new Date();
  
  // Check if current date is before December 4th, 2025
  const decemberDeadline = new Date('2025-12-04');
  const isBeforeDecemberDeadline = now < decemberDeadline;
  
  // Check if current date is before February 9th, 2026
  const februaryDeadline = new Date('2026-02-09');
  const isBeforeFebruaryDeadline = now < februaryDeadline;
  
  // Check if current date is before March 16th, 2026
  const marchDeadline = new Date('2026-03-16');
  const isBeforeMarchDeadline = now < marchDeadline;
  
  const enrollmentUrl = "https://push-skills.com/ai-powered-prototyping-for-designers-and-product-managers";
  
  // December cohort configuration
  const decemberCohort = {
    label: "1-4 December",
    href: isBeforeDecemberDeadline ? enrollmentUrl : undefined,
    showBadge: isBeforeDecemberDeadline,
  };
  
  // February cohort configuration
  const februaryCohort = {
    label: "9 February",
    href: isBeforeFebruaryDeadline ? enrollmentUrl : undefined,
  };
  
  // March cohort configuration
  const marchCohort = {
    label: "16 March",
    href: isBeforeMarchDeadline ? enrollmentUrl : undefined,
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Cohort-based Card */}
        <Card
          title="AI prototyping mastery"
          duration="4 Days"
          price="€349"
          description="A comprehensive, hands-on course for UX/UI/Product designers and product managers to build and refine advanced, interactive AI-powered prototypes that feel production-ready — no coding required."
          sessions={[
            decemberCohort,
            februaryCohort,
            marchCohort,
          ]}
          ctaHref="https://push-skills.com/ai-powered-prototyping-for-designers-and-product-managers"
        />

        {/* In-house trainings Card */}
        <div className="rounded-2xl bg-[rgba(213,69,117,0.1)] p-8 flex flex-col">
          <h2 className="font-playfair font-black text-3xl text-black dark:text-white mb-6">
            In-house trainings
          </h2>
          <p className="font-raleway text-lg text-black dark:text-white mb-8 leading-relaxed">
            Tailored to your team's needs. Delivered remote or onsite. Formats from a short clinic to multi-day programmes.
          </p>
          
          <div className="space-y-6">
            {/* AI in UX, and UX for AI */}
            <div>
              <h3 className="font-playfair font-black text-xl text-black dark:text-white mb-2">
                AI in UX, and UX for AI
              </h3>
              <p className="font-raleway text-base text-black dark:text-white leading-relaxed">
                AI foundations, AI for productivity and design AI-powered products
              </p>
            </div>

            {/* AI prototyping */}
            <div>
              <h3 className="font-playfair font-black text-xl text-black dark:text-white mb-2">
                AI prototyping
              </h3>
              <p className="font-raleway text-base text-black dark:text-white leading-relaxed">
                All you need to know to build products using AI-powered tools, tailored to designer use-cases
              </p>
            </div>

            {/* Prototyping AI Experiences */}
            <div>
              <h3 className="font-playfair font-black text-xl text-black dark:text-white mb-2">
                Prototyping AI Experiences
              </h3>
              <p className="font-raleway text-base text-black dark:text-white leading-relaxed">
                Learn how to design and prototype AI-powered experiences. Design for functionality with LLM, voice, and image generation logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingTypes;
