import { useEffect } from "react";
import { useState } from "react";
import Course from "../courses/Course";
import CreditComponent from "./creditcomponent/CreditComponent";

const CourseContainer = () => {
  const [r_credit, setR_credit] = useState(20);

  const [t_credit, setT_credit] = useState(0);
  const [courses, setCourses] = useState([]);
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


 const  handle_select= (credit_hour,course_title)=>{

    ///handling credit hour
console.log("this is credit hour",credit_hour);
let n_r_credit=r_credit;
n_r_credit=n_r_credit-credit_hour;
setR_credit(n_r_credit);
///handling course names/ titles
console.log("this is title",course_title);
let n_title=[...  titles];
n_title.push(course_title);
setTitles(n_title)




  }
  return (
    <div className=" mx-5">
      <div className="flex bg-gray">
        <div className=" grid grid-cols-3 gap-5 ">
          {courses.map((c) => (
            <Course handle_select={
                handle_select

            } key={c.id} course={c}></Course>
          ))}
        </div>
        <div>
           <CreditComponent course_titles={titles} credit_remaining={r_credit}  ></CreditComponent>
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
