import { useEffect } from "react";
import { useState } from "react";
import Course from "../courses/Course";

const CourseContainer = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="">
      <div className="flex bg-gray">
        <div className=" grid grid-cols-4 gap-5 ">
          {courses.map((c) => (
            <Course key={c.id} course={c}></Course>
          ))}
        </div>
        <div>
            h1
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
