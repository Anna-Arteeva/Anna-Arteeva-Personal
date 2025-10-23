import { Link } from "react-router-dom";
import SiteBrand from "@/components/SiteBrand";
import MainNav from "@/components/MainNav";
import Logger from "@/components/Logger";
import AITrainingsHero from "@/components/AITrainingsHero";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const AITraining = () => {
  return (
    <main className="py-20 px-4">
      <Logger event="page_view" data={{ page: 'ai_prototyping_mastery' }} />
      <div className="max-w-4xl mx-auto ">
        <div className="pb-24 text-center border-b border-gray-200 dark:border-gray-800">
          <SiteBrand />
          <div className="mt-6">
            <MainNav />
          </div>
        </div>
        {/* AI Trainings hero */}
        <AITrainingsHero />

        <div className="mb-24 mt-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/ai">AI Courses</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>AI Prototyping Mastery — Course Description</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-playfair font-black text-4xl md:text-5xl text-black dark:text-white mb-4">
            AI prototyping mastery
          </h1>
          <p className="font-raleway text-lg text-gray-800 dark:text-gray-200">
            4.6 (115) · 4 Weeks · Cohort-based Course
          </p>
        </header>

        {/* CTA Bar */}
        <section className="mb-12 p-6 rounded-2xl bg-design-bg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-playfair text-2xl text-black dark:text-white">from €349 +VAT</p>
              <p className="font-raleway text-sm text-gray-700 dark:text-gray-300">Next cohort: Sep 8—Oct 3, 2025 (Live sessions at 1PM EST)</p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair opacity-50 cursor-not-allowed"
                title="Enrollment temporarily disabled"
              >
                Enroll
              </button>
              <Link
                to="/ai"
                className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white font-playfair hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Get updates
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming cohorts */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">Upcoming cohorts</h2>
          <ul className="space-y-4">
            {[
              { date: "15–19 September", href: "https://ti.to/push/ai-prototyping-september-2025" },
              { date: "13–17 October", href: "https://ti.to/push/ai-prototyping-october-2025" },
              { date: "1–4 December", href: "https://ti.to/push/ai-prototyping-december-2025" },
            ].map(({ date, href }, i) => (
              <li key={i} className="flex items-center justify-between p-4 rounded-2xl bg-design-bg">
                <span className="font-raleway text-black dark:text-white">{date}</span>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair hover:opacity-90 transition"
                >
                  Enroll
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">Convert your PRD to a prototype in minutes</h2>
          <div className="space-y-4 font-raleway text-lg text-gray-800 dark:text-gray-200">
            <p>
              Build your first AI prototype quickly — even without coding skills. This cohort focuses on what these tools can and can’t do, so you can stay productive, debug issues, and deliver real value.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ship prototypes in hours instead of weeks</li>
              <li>Learn how modern software works by building it</li>
              <li>Create personalized tools that fit your workflow</li>
              <li>Master integrations to supercharge your prototypes</li>
            </ul>
            <p>
              Getting started is simple: begin with a 5‑day email course to build your first AI prototype this week, then join the 4‑week cohort to master tools, debugging, and integrations.
            </p>
          </div>
        </section>

        {/* Who is this for */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">Who is this course for</h2>
          <ul className="font-raleway text-lg text-gray-800 dark:text-gray-200 space-y-3 list-disc pl-6">
            <li>Senior Product Managers who want to iterate faster with AI</li>
            <li>Product Leaders seeking hands-on exposure to AI in product development</li>
            <li>UX Designers translating designs into functional prototypes the same day</li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">What you’ll get out of this course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Learn to use AI prototyping tools</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Master practical workflows using Bolt, v0, Replit, and Claude to create functional prototypes.</p>
            </div>
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Build 5+ prototypes in 4 weeks</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Hands-on projects from simple MVPs to more complex features, creating a portfolio of working prototypes.</p>
            </div>
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Understand how software fits together</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Develop a mental model for modern app architecture to communicate better and make stronger decisions.</p>
            </div>
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Debugging strategies</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Use systematic approaches to troubleshoot AI‑generated code and improve quality.</p>
            </div>
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Integrations in minutes</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Connect to tools like Slack and Google Sheets using streamlined patterns.</p>
            </div>
          </div>
        </section>

        {/* What’s included */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">What’s included</h2>
          <ul className="font-raleway text-lg text-gray-800 dark:text-gray-200 space-y-2 list-disc pl-6">
            <li>Live, interactive sessions</li>
            <li>Lifetime access to content and recordings</li>
            <li>Community of peers for accountability</li>
            <li>Certificate of completion</li>
            <li>Course Guarantee: full refund up to halfway through the course</li>
          </ul>
        </section>

        {/* Schedule */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">Course schedule</h2>
          <div className="font-raleway text-lg text-gray-800 dark:text-gray-200 space-y-2">
            <p>4–6 hours per week</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Office Hours: Mondays 12pm EST (1:1 help)</li>
              <li>Live Sessions: Wednesdays 1pm EST</li>
              <li>Weekly Projects: ~2 hours/week</li>
            </ul>
          </div>
        </section>

        {/* Syllabus (high level) */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">Course syllabus (high‑level)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Day 1</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Kickoff and foundations for building with AI.</p>
            </div>
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Day 2</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Replicating UIs and matching your product’s design.</p>
            </div>
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Day 3</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Debugging and coding basics to stay productive.</p>
            </div>
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Day 4</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Using APIs and integrations to build real workflows.</p>
            </div>
          </div>
        </section>

        {/* FAQs (questions only) */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">Frequently Asked Questions</h2>
          <ul className="font-raleway text-lg text-gray-800 dark:text-gray-200 space-y-2 list-disc pl-6">
            <li>What happens if I can’t make a live session?</li>
            <li>I work full‑time, what is the expected time commitment?</li>
            <li>What’s the refund policy?</li>
            <li>What AI tools do you cover?</li>
            <li>Is this course about building AI models?</li>
            <li>Have you actually built anything with these tools?</li>
            <li>Why should I take this course from you?</li>
            <li>Are AI prototyping tools really that good?</li>
            <li>What’s the best AI prototyping tool?</li>
            <li>How do I stop AI coding tools from making mistakes?</li>
            <li>If you can use AI to build software products, why are you teaching this course?</li>
            <li>How do I claim the included credits?</li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="mb-24 p-6 rounded-2xl bg-design-bg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-playfair font-bold text-xl text-black dark:text-white mb-1">Ready to build your first AI prototype?</h3>
              <p className="font-raleway text-gray-800 dark:text-gray-200">Enroll now or get updates about upcoming cohorts.</p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair opacity-50 cursor-not-allowed"
                title="Enrollment temporarily disabled"
              >
                Enroll
              </button>
              <Link
                to="/ai"
                className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white font-playfair hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Get updates
              </Link>
            </div>
          </div>
        </section>

        {/* Back to home */}
        <div className="text-center">
          <Link to="/" className="font-playfair text-black dark:text-white hover:text-design-pink transition-colors">
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
};

export default AITraining;


