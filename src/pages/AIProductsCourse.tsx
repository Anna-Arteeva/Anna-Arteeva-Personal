import { Link } from "react-router-dom";
import SiteBrand from "@/components/SiteBrand";
import MainNav from "@/components/MainNav";
import Logger from "@/components/Logger";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const AIProductsCourse = () => {
  return (
    <main className="py-20 px-4">
      <Logger event="page_view" data={{ page: 'prototyping_ai_products' }} />
      <div className="max-w-4xl mx-auto ">
        <div className="pb-24 text-center border-b border-gray-200 dark:border-gray-800">
          <SiteBrand />
          <div className="mt-6">
            <MainNav />
          </div>
        </div>

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
                  <Link to="/ai-courses">AI Courses</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Prototyping AI-powered Products — Course Description</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="font-playfair font-black text-4xl md:text-5xl text-black dark:text-white mb-4">
            Prototyping AI-powered Products
          </h1>
          <p className="font-raleway text-lg text-gray-800 dark:text-gray-200">
            An advanced AI prototyping course for designers and product managers who want to build functional, interactive prototypes powered by real AI logic — no coding required.
          </p>
        </header>

        {/* CTA Bar */}
        <section className="mb-12 p-6 rounded-2xl bg-design-bg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-playfair text-2xl text-black dark:text-white">€349</p>
              <p className="font-raleway text-sm text-gray-700 dark:text-gray-300">2 Days · Live sessions</p>
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
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white font-playfair hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Get updates
              </a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16 space-y-4 font-raleway text-lg text-gray-800 dark:text-gray-200">
          <p>
            If you work on AI products, you know wireframes and static mockups aren’t enough to explore real user value.
          </p>
          <p>
            This course teaches you to create interactive prototypes that behave like the finished product — complete with live AI features you can test, validate, and hand over to developers.
          </p>
          <p>
            You’ll learn how to design, plan, and prototype real-time generative AI capabilities — text generation, image creation, voice input and output — using tools like Lovable and Cursor, all without writing a line of code.
          </p>
          <p>
            You’ll connect your prototypes to leading AI systems like Gemini, ElevenLabs, and Stable Diffusion, while gaining a solid grasp of modern app architecture, APIs, and dynamic AI logic.
          </p>
          <div className="p-4 rounded-2xl bg-design-bg border border-gray-200 dark:border-gray-800">
            <p className="font-raleway text-gray-800 dark:text-gray-200">
              💡 To support your ongoing progress, you’ll also get a personal 1‑to‑1 follow‑up session with Anna within two months after the course, where you can discuss your own projects and explore how to apply these techniques in your real work environment.
            </p>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">What you’ll learn</h2>
          <ul className="list-disc pl-6 space-y-2 font-raleway text-lg text-gray-800 dark:text-gray-200">
            <li>The essentials of app architecture: Frontend, Backend, Databases, APIs, Edge Functions</li>
            <li>How to plan and prototype realistic AI‑powered experiences</li>
            <li>Integrating generative AI (text, image, video, audio)</li>
            <li>Connecting to real AI APIs (Gemini, OpenAI, ElevenLabs, Stable Diffusion, and more)</li>
            <li>Seamless collaboration and developer handover via GitHub</li>
            <li>Boosting your workflow with AI IDEs (Cursor) and MCPs</li>
          </ul>
        </section>

        {/* Upcoming cohorts */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">Upcoming cohorts</h2>
          <ul className="space-y-4">
            {["29 September, 1 October", "8, 10 December"].map((date, i) => (
              <li key={i} className="flex items-center justify-between p-4 rounded-2xl bg-design-bg">
                <span className="font-raleway text-black dark:text-white">{date}</span>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair opacity-50 cursor-not-allowed"
                  title="Enrollment temporarily disabled"
                >
                  Enroll
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Course structure */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">Course structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Day 1 — Building AI‑Ready Prototypes</h3>
              <ul className="list-disc pl-6 space-y-1 font-raleway text-gray-800 dark:text-gray-200">
                <li>Core concepts: Frontend, Backend, Database, File Storage, APIs, Edge Functions</li>
                <li>Using databases and file storage</li>
                <li>Connecting to external APIs (e.g. fetching images from Unsplash)</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-design-bg">
              <h3 className="font-playfair font-semibold text-xl text-black dark:text-white mb-2">Day 2 — AI Logic & API Integrations</h3>
              <ul className="list-disc pl-6 space-y-1 font-raleway text-gray-800 dark:text-gray-200">
                <li>Overview of AI models</li>
                <li>Working with generative AI (text, image, audio)</li>
                <li>Integrating AI APIs into your prototypes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Back to Courses */}
        <div className="text-center">
          <Link to="/ai-courses" className="font-playfair text-black dark:text-white hover:text-design-pink transition-colors">
            ← Back to AI Courses
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AIProductsCourse;


