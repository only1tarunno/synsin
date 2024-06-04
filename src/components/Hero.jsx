import Button from "./Button";
import Container from "./Container";
import heroImg from "../assets/images/hero-img.png";
import heroBg from "../assets/images/hero-bg.png";
import heroStar from "../assets/images/stars.png";

const Hero = () => {
  return (
    <section
      className="hero bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="hero"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:min-h-[776px] min-h-[600px] items-center">
          {/* hero content  */}
          <div className=" flex-1 space-y-[24px] order-2 lg:order-1">
            <h1 className="font-bold lg:text-[50px] text-[26px]">
              Expert IT Advisory Services Tailored for Your Business
            </h1>
            <Button btnText="Contact us today" />
          </div>

          {/* hero img  */}
          <div className=" flex-1 order-1 lg:order-2">
            <img
              src={heroImg}
              className="w-full lg:max-w-[96%] max-w-[380px] ml-auto"
              alt=""
            />
          </div>
        </div>
      </Container>

      {/* hero star  */}
      <div className="hidden lg:block absolute lg:w-[100px] 2xl:w-[150px] lg:-bottom-[7%]  2xl:-bottom-[10%] left-[10%]">
        <img src={heroStar} className="w-full" alt="" />
      </div>
    </section>
  );
};

export default Hero;
