import googleLogo from "../../../assets/images/google-logo.png";
import githubLogo from "../../../assets/images/github-logo.png";
import SectionTitle from "./../SectionTitle/SectionTitle";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import qZone1 from "../../../assets/images/qZone1.png";
import qZone2 from "../../../assets/images/qZone2.png";
import qZone3 from "../../../assets/images/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* Log in with */}
      <SectionTitle title="Login With" />
      <div className="space-y-1">
        <button className="btn btn-outline btn-info btn-sm w-full">
          <img className="max-w-5" src={googleLogo} alt="" />
          <span>Login with Google</span>
        </button>
        <button className="btn btn-outline  btn-sm w-full">
          <img className="max-w-5" src={githubLogo} alt="" />
          <span>Login with Github</span>
        </button>
      </div>

      {/* Find Us On */}
      <div className="mt-8">
        <SectionTitle title="Find Us On" />
        <ul className="">
          <li className="flex items-center gap-3 p-3 cursor-pointer rounded-t-lg border ">
            <FaFacebook className="text-info" /> <span>Facebook</span>
          </li>
          <li className="flex items-center gap-3 p-3 cursor-pointer border-x ">
            <FaTwitter className="text-info" /> <span>Twitter</span>
          </li>
          <li className="flex items-center gap-3 p-3 cursor-pointer border rounded-b-lg ">
            <FaInstagramSquare className="text-error" /> <span>Instagram</span>
          </li>
        </ul>
      </div>

      {/* Q Zone */}
      <div className="bg-[#f3f3f3] py-2 px-1  my-8">
        <div className="ml-2">
          <SectionTitle title="Q-Zone" />
        </div>
        <div className="gap-4 flex flex-col items-center">
          <img src={qZone1} alt="Q-Zone1 Img" />
          <img src={qZone2} alt="Q-Zone2 Img" />
          <img src={qZone3} alt="Q-Zone3 Img" />
        </div>
      </div>

    </div>
  );
};

export default RightSideNav;
