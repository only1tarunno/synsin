/* eslint-disable react/prop-types */

const AboutUsSingleCard = ({ title, content, contentImg }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-[50px] home-shadow p-5 md:p-10 xl:p-[54px] rounded-[7px] bg-[#FEFEFE] hover:bg-[#28566912]  text-[#003A74]">
      <div className="flex-1 lg:order-1 order-2">
        <h3 className="font-bold  text-[20px] lg:text-[26px]">{title}</h3>
        <p className=" text-base lg:text-[18px] pt-8 pb-5 lg:pt-14 lg:pb-8 max-w-[510px]">
          {content}
        </p>
        <div>
          <h3 className=" font-semibold text-[18px] lg:text-[22px] pb-2 lg:pb-4">
            Benifits:
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="inline-block p-[10px] bg-[#FEFEFE] home-shadow rounded-[7px]">
              Expert Guidance
            </span>
            <span className="inline-block p-[10px] bg-[#FEFEFE] home-shadow rounded-[7px]">
              Cost Efficiency
            </span>
            <span className="inline-block p-[10px] bg-[#FEFEFE] home-shadow rounded-[7px]">
              Innovation
            </span>
            <span className="inline-block p-[10px] bg-[#FEFEFE] home-shadow rounded-[7px]">
              Risk Management
            </span>
            <span className="inline-block p-[10px] bg-[#FEFEFE] home-shadow rounded-[7px]">
              Objective Perspective
            </span>
            <span className="inline-block p-[10px] bg-[#FEFEFE] home-shadow rounded-[7px]">
              Strategic Planning
            </span>
            <span className="inline-block p-[10px] bg-[#FEFEFE] home-shadow rounded-[7px]">
              Resource Optimization
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-[360px] mx-auto sm:max-w-[415px] order-1 lg:order-2 pt-8 lg:p-0">
        <img src={contentImg} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default AboutUsSingleCard;
