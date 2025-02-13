import "./header.scss";
import logo from "../../images/logo.png";
// import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div className="header">
      <img className="theLogo" src={logo} alt="logo" />
      {/* <Menu /> */}
    </div>
  );
};

export default Header;
