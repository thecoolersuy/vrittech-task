import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stickers } from "../data/constants";
import arrow from "../../public/icons/arrow.svg";

export default function CourseCard({ course, isActivated, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      animate={{
        flex: isActivated ? 2 : 1,
        backgroundColor: isActivated ? "#c33241" : "#f9ebec",
      }}
      transition={{
        layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        flex: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
        backgroundColor: { duration: 0.35 },
      }}
      className="rounded-3xl cursor-pointer overflow-hidden relative"
      style={{ minWidth: 0, minHeight: "320px" }}
    >
      <AnimatePresence>
        //when the card is not clicked
        {!isActivated && (
          <motion.div
            key="notactivated"
            className="absolute inset-0 flex flex-col items-center gap-8 justify-between p-10 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <div
              className="flex flex-col gap-3 items-start"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              <span className="text-[#c33241] font-bold text-[32px] font-outfit leading-tight">
                {course.title}
              </span>
              <span className="text-[#c33241] font-normal text-[18px] font-outfit leading-snug">
                {course.description}
              </span>
            </div>
            <div className="flex items-end leading-none">
              <span className="text-[#c33241] font-bold font-nohemi text-[120px] leading-none">
                {course.number}
              </span>
              <span className="text-[#c33241] font-bold text-[56px] font-nohemi mb-2">
                +
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        //when the card is clicked
        {isActivated && (
          <motion.div
            key="activated"
            className="absolute inset-0  flex flex-col justify-between p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <div className="flex justify-end font-outfit">
              <a className="text-[#F9EBEC] font-outfit text-[18px] items-center gap-2  flex">
                View all Courses
                <img src={arrow} alt="Arrow" />
              </a>
            </div>
            <div className="flex gap-4 items-center">
              {stickers.map((sticker) => (
                <div
                  key={sticker.id}
                  className="w-16 h-16"
                  style={{ transform: `rotate(${sticker.rotation}deg)` }}
                >
                  <img
                    src={sticker.src}
                    alt={sticker.alt}
                    className="w-full h-full object-cover border-none rounded-[10px]"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-end gap-1 ">
              <span className="text-white font-black leading-none font-nohemi text-[150px]">
                {course.number}
              </span>
              <span className="text-white font-black text-4xl mb-4">+</span>

              <div className="flex flex-col gap-1 pb-2 ml-3">
                <span className="text-white font-bold text-[32px] leading-tight font-nohemi">
                  {course.title}
                </span>
                <span className="text-white/80 text-[18px] font-regular  leading-relaxed max-w-[220px] font-outfit">
                  {course.description}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
