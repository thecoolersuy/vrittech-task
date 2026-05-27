import { useState } from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data/constants";

export default function CourseGroup() {
  const [activeId, setActiveId] = useState(0);
  return (
    <div className="flex gap-4 w-full items-stretch">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isActivated={activeId === course.id}
          onClick={() => setActiveId(course.id)}
        />
      ))}
    </div>
  );
}
