import aboutImg from "../../assets/images/about-img.png";
import aboutBg from "../../assets/images/about-bg.png";
import Container from "../Shared/Container";

const About = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${aboutBg})` }}
      id="about-us"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:min-h-[776px] min-h-[600px] items-center">
          <div className="hero-img flex-1">
            <img
              src={aboutImg}
              className="w-full lg:max-w-[96%] max-w-[380px]"
              alt=""
            />
          </div>
          <div className="flex-1 space-y-[24px]">
            <h2
              className="font-bold lg:text-[38px] sm:text-[32px] text-[24px]"
              id="aboutTitle"
            >
              About us
            </h2>
            <p>
              Our mission is to provide startups and small businesses with the
              guidance and expertise needed to navigate the complex technology
              landscape. We aim to equip you with a thorough understanding of
              the various technologies available, ensuring you can make
              strategic decisions with confidence. Our goal is to lead you
              through the necessary and sufficient steps to reach your desired
              outcomes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
