import React from "react";
import CourseGroup from "../components/CourseGroup";

function CoursesPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-20 py-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className=" text-[#414141] text-[24px] font-outfit font-regular ">
              Explore our classes and master trending skills!
            </p>
            <h1 className="text-[#2B2B2B] font-bold font-nohemi text-[32px]">
              Dive Into
              <span className="text-[#1DA077] font-nohemi font-bold text-[32px] pl-1">
                What’s Hot Right Now!
              </span>
            </h1>
          </div>
          <div>
            <CourseGroup />
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesPage;
