import PropTypes from "prop-types";
const CreditComponent = ({ credit_remaining, course_titles, total_credit }) => {
  console.log("course_titles:  ", course_titles);
  return (
    <div className="bg-white flex-col w-[300px] ms-5 my-5 flex gap-5 rounded-lg">
      <p className="font-bold text-blue-600 m-4 text-xl ">
        Credit Hour remaining:{credit_remaining} hr{" "}
      </p>

      <div className="border-b-2 border-gray-200"></div>
      <h1 className="mx-5 text-2xl font-bold">
        Course Name{" "}
      </h1>
      <div className="flex flex-col ms-5 items-center">
        <ol className="list-decimal">
          {course_titles.map((course_t, idx) => (
            <li key={idx}> <p className="text-gray-500">{course_t}</p>  </li>
          ))}
        </ol>
      </div>

      <div className="border-b-2 my-3 border-gray-200"></div>
      <p className="px-5  my-3">Total Credit Hour: {total_credit}</p>
   
    </div>
  );
};
CreditComponent.propTypes = {
  course: PropTypes.object,
  handle_select: PropTypes.func,
  credit_remaining: PropTypes.number,
  course_titles: PropTypes.array,
  total_credit: PropTypes.number,
};
export default CreditComponent;
