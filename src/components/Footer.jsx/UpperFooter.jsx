import Container from "../Shared/Container";
import bottomLogo from "../../assets/images/logo-white.png";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

const UpperFooter = () => {
  return (
    <div className="bg-gradient-to-b from-[#1873CE] to-[#053B72] text-white py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-y-2">
          <div className="pb-6 lg:pb-0">
            <img src={bottomLogo} className="w-[172px] pb-3 lg:pb-7" alt="" />
            <p className="max-w-full lg:max-w-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-2xl uppercase">Contacts</h4>
            <hr className="bg-white h-[2px] w-[52px]" />
            <ul className="pt-4 lg:pt-7 space-y-3">
              <li>
                <a
                  href="mailto:info@cloudtime365.com"
                  className="flex items-center gap-2"
                >
                  <span>
                    <FaEnvelope />
                  </span>{" "}
                  info@cloudtime365.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaMapMarkerAlt />
                </span>{" "}
                31-11 Entuziastiv St., Kyiv, Ukraine
              </li>
            </ul>
          </div>
          <div>
            <a href="tel:+38(050)29-97-480" className="flex items-center gap-2">
              <span>
                <BiSolidPhoneCall />
              </span>{" "}
              +38 (050) 29-97-480
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpperFooter;
