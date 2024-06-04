import Container from "../Shared/Container";

const BottomFooter = () => {
  return (
    <div className="bg-gradient-to-b from-[#1873CE] to-[#053B72] text-white py-5">
      <Container>
        <div className=" flex flex-col sm:flex-row items-center justify-between gap-y-2">
          <p>Bce права защищены © 2018-2021</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomFooter;