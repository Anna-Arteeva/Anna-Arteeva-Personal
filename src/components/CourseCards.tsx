import { useState } from "react";

// Covers are served from lets-vibe.com on purpose: when a cover is replaced
// there (new cohort month), this page picks it up without an edit.
// No dates or prices here either: Maven is the single source for those.
const courses = [
  {
    title: "AI Prototyping for Designers",
    tagline: "From designer to AI-powered builder",
    description:
      "Build functional prototypes with agentic coding tools, your own design system and real data. Tool-agnostic: Claude Code, Codex, Cursor and others. No coding experience required.",
    cover: "https://lets-vibe.com/images/home/ai-prototyping-poster.webp",
    href: "https://maven.com/anna-arteeva/prototyping-for-designers",
  },
  {
    title: "Agentic Coding for Creative Designers",
    tagline: "From vibe to vision: design with craft and taste",
    description:
      "For creative, brand and interaction designers who want results that don't look generic. Set up your own creative coding studio, then build art-directed work with motion and 3D.",
    cover: "https://lets-vibe.com/images/home/agentic-coding-poster.webp",
    href: "https://maven.com/anna-arteeva/agentic-coding-for-designers",
  },
];

type Course = (typeof courses)[number];

const CourseCard = ({ course }: { course: Course }) => {
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <article className="rounded-2xl bg-design-bg overflow-hidden flex flex-col">
      {!coverFailed && (
        <a
          href={course.href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block"
        >
          <img
            src={course.cover}
            alt=""
            loading="lazy"
            onError={() => setCoverFailed(true)}
            className="w-full aspect-video object-cover"
          />
        </a>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <p className="font-raleway text-sm font-semibold uppercase tracking-wide text-design-pink mb-2">
          Live course on Maven · with Briana May
        </p>
        <h3 className="font-playfair font-black text-3xl text-black dark:text-white mb-2">
          {course.title}
        </h3>
        <p className="font-raleway font-medium text-lg text-black dark:text-white mb-4">
          {course.tagline}
        </p>
        <p className="font-raleway text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
          {course.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 flex-wrap">
          <p className="font-raleway text-gray-800 dark:text-gray-200">
            Live cohorts run through the year
          </p>
          <a
            href={course.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-playfair font-medium hover:opacity-90 transition inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-design-pink"
            aria-label={`See dates on Maven for ${course.title}`}
          >
            See dates on Maven <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
};

const CourseCards = () => (
  <section id="courses" className="max-w-6xl mx-auto px-4 pt-20">
    <h2 className="font-playfair font-black text-4xl md:text-5xl text-black dark:text-white mb-6 text-center">
      Live courses for designers
    </h2>
    <p className="font-raleway text-gray-800 dark:text-gray-200 text-center text-xl md:text-2xl max-w-3xl mx-auto mb-12">
      Two cohort-based courses I teach with Briana May, Principal Interaction Designer at frog.
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.href} course={course} />
      ))}
    </div>
    <p className="font-raleway text-gray-800 dark:text-gray-200 text-center mt-8">
      <a
        href="https://maven.com/anna-arteeva/prototyping-for-designers"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-4 hover:text-design-pink transition-colors"
      >
        Rated 4.8 on Maven
      </a>
      {" · "}
      Both courses at a glance on{" "}
      <a
        href="https://lets-vibe.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-4 hover:text-design-pink transition-colors"
      >
        lets-vibe.com
      </a>
    </p>
  </section>
);

export default CourseCards;
