import "./page2.scss";
import page2Photo from "../../images/page2Photos.png";
import arrow from "../../images/arrow.png";

const Page2 = () => {
  return (
    <div className="page2">
      <div className="page2Left">
        <div className="title">
          Lens and Life Exploring the World through Photography
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pellentesque suscipit justo, ac lacinia nunc vehicula a. In nec
            lorem quis neque pulvinar faucibus ac ac sapien.
          </p>
          <img className="page2Photos" src={page2Photo} alt="page2Photo" />
        </div>
        <div className="explorePages readMore">
          <span>Read More</span>
          <img className="theArrow arrow2" src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="page2Right">
        <img className="page2Photos" src={page2Photo} alt="page2Photo" />
      </div>
    </div>
  );
};
export default Page2;
