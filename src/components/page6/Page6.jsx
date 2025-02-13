import "./page6.scss";
import page6Photo1 from "../../images/page6Photo1.png";
import page6hoto2 from "../../images/page6Photo2.png";
import arrow from "../../images/arrow.png";

const Page6 = () => {
  return (
    <div className="page6">
      <div className="title"> Exploring Photography Insights </div>
      <div className="photos">
        <div className="photoLeft">
          <img src={page6Photo1} alt="page6Photo1" className="explorePhoto" />
          <div className="photoTitle">
            Mastering Composition The Key to Captivating Photographs
          </div>
          <div className="page6Description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ,
            vulputate in nibh eget, volutpat commodo nibh.
          </div>
          <div className="explorePages readMore">
            <span>Read More</span>
            <img className="theArrow arrow6" src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="photoRight">
          <img src={page6hoto2} alt="page6Photo1" className="explorePhoto" />
          <div className="photoTitle">
            Unlocking Creativity Inspiring Ideas for Your Photography
          </div>
          <div className="page6Description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ,
            vulputate in nibh eget, volutpat commodo nibh.
          </div>
          <div className="explorePages readMore">
            <span>Read More</span>
            <img className="theArrow arrow6" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
