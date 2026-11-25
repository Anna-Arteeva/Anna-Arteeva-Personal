import { useEffect, useRef, useState } from "react";

const topics = [
  {
    title: "AI foundations and literacy",
    description:
      "Understand how different AI models work and where each one is strongest, how to prompt well for everyday productivity, and how to write system prompts for your own product features. We work with current tools for research, ideation, image, voice and code, including coding agents such as Claude Code, Codex and Cursor, and learn when to reach for which.",
  },
  {
    title: "AI prototyping and agentic coding",
    description:
      "Building functional apps and features takes design to the next level, starting with elevating craft and allowing us to take care of things that were not available in conventional products, such as micro-interactions, more nuanced responsiveness, and deeper personalisation. It improves handoff and reduces the amount lost in translation, as we hand off chunks of code instead of annotated images. Ultimately, it allows us to design across more modalities, such as voice, vision, and gestures (haptic), with real data and functionality, connecting AI models.",
  },
];

// Fade an element in as it scrolls up from the bottom of the viewport:
// invisible while its top is below 95% of the window height, fully visible above 70%.
const opacityFor = (element: HTMLElement | null) => {
  if (!element) return 0;
  const top = element.getBoundingClientRect().top;
  const fadeStart = window.innerHeight * 0.95;
  const fadeEnd = window.innerHeight * 0.7;
  if (top > fadeStart) return 0;
  if (top < fadeEnd) return 1;
  return 1 - (top - fadeEnd) / (fadeStart - fadeEnd);
};

const TrainingTopics = () => {
  // Index 0 is the heading, then one entry per topic, then the "included" note.
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [opacities, setOpacities] = useState<number[]>([]);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOpacities(refs.current.map(opacityFor)));
    };

    measure(); // also on mount, so content already in view is not left invisible
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const fade = (index: number) => ({ opacity: opacities[index] ?? 0 });
  const noteIndex = topics.length + 1;

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2
          ref={(el) => { refs.current[0] = el; }}
          className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-16 text-center"
          style={fade(0)}
        >
          Training topics
        </h2>

        <div className="space-y-12">
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="transition-opacity duration-500 ease-out"
              style={fade(i + 1)}
            >
              <h3 className="font-playfair font-bold text-2xl text-black dark:text-white mb-4">
                {topic.title}
              </h3>
              <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={(el) => { refs.current[noteIndex] = el; }}
          className="rounded-2xl bg-design-bg p-6 text-center mt-12 transition-opacity duration-500 ease-out"
          style={fade(noteIndex)}
        >
          <p className="font-raleway text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Included with every workshop:</span> recordings, resource kit, prompt and pattern library, and a 30-day follow-up check-in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingTopics;
