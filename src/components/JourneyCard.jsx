import React from "react";

export default function JourneyCard({
  title,
  subtitle,
  description,
  bgColor,
  imageSrc,
  imagePosition = "right",
}) {
  const isLeftImage = imagePosition === "left";

  return (
    <div className="relative">
      <div
        className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-80 md:min-h-96 relative overflow-visible shadow-lg ${
          isLeftImage ? "pl-32 md:pl-40" : "pr-32 md:pr-40"
        }`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-col gap-2">
          <h3
            className="text-white leading-tight font-bold"
            style={{
              fontFamily: '"Nohemi", serif',
              fontWeight: 700,
              fontSize: "32px",
            }}
          >
            {title}
          </h3>
          <p
            className="text-white leading-relaxed"
            style={{
              fontFamily: '"Outfit-semibold", sans-serif',
              fontWeight: 600,
              fontSize: "24px",
            }}
          >
            {subtitle}
          </p>
          <p
            className="text-white leading-relaxed opacity-90 pt-2"
            style={{
              fontFamily: '"Outfit-regular", sans-serif',
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            {description}
          </p>
        </div>
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 w-48 h-48 md:w-75 md:h-75 pointer-events-none ${
          isLeftImage
            ? "-left-20 md:-left-25 drop-shadow-2xl"
            : "-right-20 md:-right-20 drop-shadow-2xl"
        }`}
        style={{
          filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))",
          transform:
            "perspective(1000px) rotateY(" +
            (isLeftImage ? "5deg" : "-5deg") +
            ")",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
