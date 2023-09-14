import PropTypes from "prop-types";
const CreditComponent = ({ credit_remaining, course_titles }) => {

    console.log("course_titles:  ", course_titles);
  return (
    <div className="bg-white flex-col w-[300px] ms-5 my-5">
      <p className="font-bold text-blue-600">
        Credit Hour remaining:{credit_remaining}{" "}
      </p>

      <div className="border-b-2 border-gray-200"></div>
      <h1 className="mx-5 text-2xl font-bold">
        Course Name{course_titles.length}{" "}
      </h1>
      <div className="flex flex-col items-center">

      <ol className="list-decimal">
        {course_titles.map((course_t ,idx) => 
          <li key={idx}>  {course_t} </li>
        )}
      </ol>
      </div>
      

      <div className="border-b-2 my-3 border-gray-200"></div>
      <p>Total Credit Hour</p>
      <div className="border-b-2 my-3 border-gray-200"></div>
      <p>Total Price</p>
    </div>
  );
};
CreditComponent.propTypes = {
  course: PropTypes.object,
  handle_select: PropTypes.func,
  credit_remaining: PropTypes.number,
  course_titles: PropTypes.array,
};
export default CreditComponent;
