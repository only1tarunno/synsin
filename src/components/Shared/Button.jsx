/* eslint-disable react/prop-types */
import { FaAngleRight } from "react-icons/fa6";

const Button = ({ btnText }) => {
  return (
    <button className="flex items-center gap-2 bg-[#003A74] text-white text-[20px] py-[14px] px-[38px] rounded-[30px] hover:bg-[#0051A4] capitalize">
      {btnText}{" "}
      <span>
        <FaAngleRight />
      </span>
    </button>
  );
};

export default Button;
