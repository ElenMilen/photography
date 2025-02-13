import Header from "../header/Header";
import "./home.scss";
import arrow from "../../images/arrow.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="homeTitle">
        <span className="bigText"> Focus </span>
        <span className="bigText photographyLeft"> Photography </span>
        <div className="homeDescriptionBox">
          <span className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna metus, vulputate in nibh eget, volutpat commodo nibh. </span>
          <div className="explorePages">
            <span> Explore Pages </span>
            <img className="theArrow" src={arrow} alt="arrow" />
          </div>
          <div className="learnMore">
            <span> Learn More </span>
            <img className="theArrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
