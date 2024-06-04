import whyChooseBg from "../assets/images/why-choose-bg.jpg";
import Container from "./Container";

const WhyChooseus = () => {
  return (
    <section
      className="hero bg-no-repeat bg-cover bg-center relative min-h-[600px] lg:min-h-[1655px] py-10 lg:py-20"
      style={{ backgroundImage: `url(${whyChooseBg})` }}
      id="hero"
    >
      <Container>
        <div>
          <h2
            className="font-bold lg:text-[38px] text-[24px] text-[#003A74] text-center mb-7 lg:mb-10"
            id="whyChooseTitle"
          >
            Why Choose Us
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseus;
