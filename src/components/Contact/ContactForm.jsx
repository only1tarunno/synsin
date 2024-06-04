import user from "../../assets/images/user.png";
import mail from "../../assets/images/email.png";
import check from "../../assets/images/check.png";
import downArrow from "../../assets/images/down-arrow.png";
import pen from "../../assets/images/pen.png";

const ContactForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-between flex-col md:flex-row gap-y-4">
          {/* name  */}
          <div className="relative w-full md:w-[32%] h-[60px]">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full h-full  rounded-lg pl-16 text-[#003A74] focus:outline-none"
              id="name"
            />
            <label
              htmlFor="name"
              className="w-4 absolute left-7 top-1/2 -translate-y-1/2"
            >
              <img src={user} className="w-full" alt="" />
            </label>
          </div>
          {/* email  */}
          <div className="relative w-full md:w-[32%] h-[60px]">
            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full h-full  rounded-lg pl-16 text-[#003A74] focus:outline-none"
              id="email"
            />
            <label
              htmlFor="email"
              className="w-4 absolute left-7 top-1/2 -translate-y-1/2"
            >
              <img src={mail} className="w-full" alt="" />
            </label>
          </div>
          {/* select  */}
          <div className="relative w-full md:w-[32%] h-[60px]">
            <select
              className="w-full h-full rounded-lg pl-16  text-[#003A74] focus:outline-none"
              defaultValue="Make a choice"
              id="make-a-choice"
            >
              <option defaultValue="" disabled>
                Make a choice
              </option>

              <option defaultValue="option1">Option 1</option>
              <option defaultValue="option2">Option 2</option>
              <option defaultValue="option3">Option 3</option>
            </select>
            <label
              htmlFor="make-a-choice"
              className="w-4 absolute left-7 top-1/2 -translate-y-1/2"
            >
              <img src={check} className="w-full" alt="" />
            </label>
            <label
              htmlFor="make-a-choice"
              className="w-4 absolute right-7 top-1/2 -translate-y-1/2"
            >
              <img src={downArrow} className="w-full" alt="" />
            </label>
          </div>
        </div>
        {/*  textarea */}
        <div className="relative my-4 lg:my-7 w-full h-[120px]">
          <textarea
            placeholder="Text..."
            className="w-full h-full rounded-lg pl-16 pt-4 text-[#003A74] focus:outline-none resize-none"
            id="message"
          ></textarea>
          <label htmlFor="message" className="w-4 absolute left-7 top-[22px]">
            <img src={pen} className="w-full" alt="" />
          </label>
        </div>
        {/* radio check  */}
        <div className="w-full lg:w-[550px] mx-auto">
          <input
            type="radio"
            id="radioButton"
            className="accent-[#00A1E4]"
            name="radioGroup"
            required
          />
          <label htmlFor="radioButton" className="text-white pl-2">
            Я даю согласие на обработку данных в соответствии c заявлением o
            защите данных.
          </label>
        </div>
        {/* submit  */}
        <div className="lg:text-center">
          <button className=" text-white bg-[#00A1E4] text-[20px] py-[14px] px-[38px] rounded-[30px] hover:bg-[#3f88a7] capitalize w-[245px] mt-4">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
