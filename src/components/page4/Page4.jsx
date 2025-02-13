import "./page4.scss";
import page4Photo1 from "../../images/page4Photo1.png";
import page4Photo2 from "../../images/page4Photo2.png";
import page4Photo3 from "../../images/page4Photo3.png";
import page4Photo4 from "../../images/page4Photo4.png";
import page4Photo5 from "../../images/page4Photo5.png";

const Page4 = () => {
  return (
    <div className="page4">
      <div className="title"> Visual Tapestry Our Captivating Portfolio </div>
      <div className="page4Images">
        <div className="page4Div1">
          <div className="photos">
            <img className="page4Photo1" src={page4Photo1} alt="page4Photo1" />
            <div className="text"> Travel </div>
          </div>
          <div className="photos">
            <img src={page4Photo2} alt="page4Photo2" />
            <div className="text"> Personal </div>
          </div>
        </div>
        <div className="page4Div2">
          <div className="photos">
            <img src={page4Photo3} alt="page4Photo3" />
            <div className="text"> Wedding </div>
          </div>
        </div>
        <div className="page4Div3">
          <div className="photos">
            <img src={page4Photo4} alt="page4Photo4" />
            <div className="text"> Family </div>
          </div>
          <div className="photos">
            <img src={page4Photo5} alt="page4Photo5" />
            <div className="text"> Travel </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
