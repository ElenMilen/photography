import "./page3.scss";
import arrow from "../../images/arrow.png";
import page3Photo from "../../images/page3Photo.png";

const Page3 = () => {
  return (
    <div className="page3">
      <div className="title">
        {" "}
        Capture Your Moments Our Photography Services{" "}
      </div>
      <div className="page3Right">
        <img className="page3Photo" src={page3Photo} alt="page3Photo" />
      </div>
      <div className="page3Left">
        <div className="menu explorePages">
          <div className="momentList readMore">
            <span> Photography </span>
            <img className="theArrow" src={arrow} alt="arrow" />
          </div>
          <div className="momentList readMore">
            <span> Videography </span>
            <img className="theArrow" src={arrow} alt="arrow" />
          </div>
          <div className="momentList readMore">
            <span> Aerial Photography </span>
            <img className="theArrow" src={arrow} alt="arrow" />
          </div>
          <div className="momentList readMore">
            <span> Photo Retouching </span>
            <img className="theArrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Page3;
