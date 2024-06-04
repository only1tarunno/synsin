import AboutUsSingleCard from "./AboutUsSingleCard";
import Container from "./Container";
import iTConsulting from "../assets/images/it-consulting.png";
import technicalImg from "../assets/images/technical-supervision.png";
import solutionImg from "../assets/images/solution-audit.png";
import Button from "./Button";

const AboutUsCards = () => {
  return (
    <section className="py-10 lg:py-0 lg:pb-20 xl:pb-[153px]">
      <Container>
        <div className="space-y-5 md:space-y-10">
          <AboutUsSingleCard
            title="IT Consulting"
            content=" Our mission is to provide startups and small businesses with the
          guidance and expertise needed to navigate the complex technology
          landscape. We aim to equip you with a thorough understanding of the
          various technologies available, ensuring you can make strategic
          decisions with confidence. Our goal is to lead you through the
          necessary and sufficient steps to reach your desired outcomes."
            contentImg={iTConsulting}
          />
          <AboutUsSingleCard
            title="Solution Audit"
            content=" Our mission is to provide startups and small businesses with the
          guidance and expertise needed to navigate the complex technology
          landscape. We aim to equip you with a thorough understanding of the
          various technologies available, ensuring you can make strategic
          decisions with confidence. Our goal is to lead you through the
          necessary and sufficient steps to reach your desired outcomes."
            contentImg={solutionImg}
          />
          <AboutUsSingleCard
            title="Technical Supervision"
            content=" Our mission is to provide startups and small businesses with the
          guidance and expertise needed to navigate the complex technology
          landscape. We aim to equip you with a thorough understanding of the
          various technologies available, ensuring you can make strategic
          decisions with confidence. Our goal is to lead you through the
          necessary and sufficient steps to reach your desired outcomes."
            contentImg={technicalImg}
          />
          <div className="flex justify-center">
            <Button btnText="Book Now" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsCards;
