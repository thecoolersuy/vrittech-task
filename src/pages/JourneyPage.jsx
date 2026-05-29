import React from "react";
import JourneyCardsGroup from "../components/JourneyCardsGroup";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 md:py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-gray-600 text-lg md:text-xl font-outfitregular font-semibold mb-2">
            Your SkillShikshya Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-nohemi font-bold leading-tight">
            <span className="text-[#1DA077]">Step</span>
            <span className="text-[#2B2B2B]"> In. </span>
            <span className="text-[#1DA077]">Skill</span>
            <span className="text-[#2B2B2B]"> Up. </span>
            <span className="text-[#1DA077]">Stand</span>
            <span className="text-[#2B2B2B]"> Out. </span>
          </h1>
        </div>

        <JourneyCardsGroup />
      </div>
    </div>
  );
}
