import { Link } from "react-router-dom";

const TrainingTypes = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Cohort-based Card */}
        <div className="rounded-2xl bg-[rgba(175,119,92,0.1)] p-8 flex flex-col">
          <h2 className="font-playfair font-black text-3xl text-black dark:text-white mb-6">
            Cohort-based
          </h2>
          <p className="font-raleway text-lg text-black dark:text-white mb-8 leading-relaxed">
            Intensive online cohorts with in-depth content and hands-on exercises. Updated every run to reflect the latest tools and practices.
          </p>
          
          <div className="space-y-6">
            {/* AI prototyping mastery */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-playfair font-black text-xl text-black dark:text-white mb-1">
                  AI prototyping mastery
                </h3>
                <p className="font-raleway text-base text-black dark:text-white">
                  4 sessions
                </p>
              </div>
              <Link
                to="https://push-skills.com/prototyping-ai-products"
                target="_blank"
                className="font-raleway font-bold text-base text-black dark:text-white hover:text-design-pink transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Prototyping AI Products */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-playfair font-black text-xl text-black dark:text-white mb-1">
                  Prototyping AI Products
                </h3>
                <p className="font-raleway text-base text-black dark:text-white">
                  2 sessions
                </p>
              </div>
              <Link
                to="https://push-skills.com/ai-powered-prototyping-for-designers-and-product-managers"
                target="_blank"
                className="font-raleway font-bold text-base text-black dark:text-white hover:text-design-pink transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingTypes;
