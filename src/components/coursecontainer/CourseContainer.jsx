import { useEffect } from "react";
import { useState } from "react";
import Course from "../courses/Course";
import CreditComponent from "./creditcomponent/CreditComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CourseContainer = () => {
    const notify = () => toast("Remaining credit cant be negative!");
    const notify2 = () => toast("total credit cant be more than 20!");
    const notify3 = () => toast("Course is already selected");
  const [r_credit, setR_credit] = useState(20);

  const [t_credit, setT_credit] = useState(0);
  const [courses, setCourses] = useState([]);
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


 const  handle_select= (credit_hour,course_title,course)=>{
///handling course names/ titles
console.log("this is title",course_title);
let n_title=[...  titles];
if(n_title.indexOf(course_title)===-1){
    n_title.push(course_title);

        ///handling credit hour
console.log("this is credit hour",credit_hour);

let n_r_credit=r_credit;
n_r_credit=n_r_credit-credit_hour;
if(n_r_credit<0){
    notify();
}
else {setR_credit(n_r_credit);}

///handling total credit
let n_t_credit=t_credit;
n_t_credit=n_t_credit+credit_hour;
if( n_t_credit>20){notify2();}
else
{setT_credit(n_t_credit);}
}
else{
    notify3()

}

console.log("this is course",course);

setTitles(n_title)





  }
  return (
    <div className=" mx-5">
      <div className="flex bg-gray">
      <ToastContainer />
        <div className=" grid grid-cols-3 gap-5 ">
          {courses.map((c) => (
            <Course handle_select={
                handle_select

            } key={c.id} course={c}></Course>
          ))}
        </div>
        <div>
           <CreditComponent course_titles={titles} credit_remaining={r_credit} total_credit={t_credit } ></CreditComponent>
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
