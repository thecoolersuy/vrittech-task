import React from "react";
import JourneyCard from "./JourneyCard";
import vectorart1 from "../assets/vector/vectorart1.png";
import vectorart2 from "../assets/vector/vectorart2.png";
import vectorart3 from "../assets/vector/vectorart3.png";
import vectorart4 from "../assets/vector/vectorart4.png";

const journeySteps = [
  {
    id: 1,
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bgColor: "#F64A5C",
    imageSrc: vectorart1,
    imagePosition: "left",
  },
  {
    id: 2,
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    bgColor: "#4A8C9E",
    imageSrc: vectorart2,
    imagePosition: "right",
  },
  {
    id: 3,
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live interactive discussions, and expert insights. You're never on your own.",
    bgColor: "#5B4C95",
    imageSrc: vectorart3,
    imagePosition: "left",
  },
  {
    id: 4,
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and readiness, bringing you closer to that dream job, promotion, or your own venture.",
    bgColor: "#9B7E6B",
    imageSrc: vectorart4,
    imagePosition: "right",
  },
];

export default function JourneyCardsGroup() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-12">
      {journeySteps.map((step) => (
        <JourneyCard
          key={step.id}
          title={step.title}
          subtitle={step.subtitle}
          description={step.description}
          bgColor={step.bgColor}
          imageSrc={step.imageSrc}
          imagePosition={step.imagePosition}
        />
      ))}
    </div>
  );
}
