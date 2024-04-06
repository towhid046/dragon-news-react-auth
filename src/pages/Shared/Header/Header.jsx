import moment from "moment";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center space-y-1 py-5">
      <img src={logo} alt="Logo" />
      <p>Journalism Without Fear or Favour</p>
      <p>
        <strong>{moment().format("dddd,")}</strong>{" "}
        {moment().format("MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
