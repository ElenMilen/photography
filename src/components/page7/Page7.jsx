import "./page7.scss";
import page7icon1 from "../../images/page7icon1.png";
import page7icon2 from "../../images/page7icon2.png";
//import page7icon3 from "../../images/page7icon3.png";
import page7icon4 from "../../images/page7icon4.png";

const Page7 = () => {
    return (
      <div className="page7">
            <div className="page7Top">
                <div className = "page7TopBackground"></div>
                <div className = "title"> Need help with our photography? </div>
                <div className ="explorePages">
                    <span> contact us  : focus@gmail.com </span>
                    <span> Call us 24/7 : 669-508-6708 </span>
                </div>
            </div>
            <div className="page7Bottom">
                <div className = "group">
                    <div className = " explorePages title"> Quick Links</div>
                    <div className="groupMore">
                        <span> About Us </span>
                        <span> Service </span>
                        <span> Portfolio </span>
                        <span> Testimonials </span>
                    </div>
                </div>
                <div className = "group">
                    <div className="explorePages title"> Contact Us </div>
                    <div className="groupMore">
                        <div className = "contact">
                                <img src={page7icon1} alt="page7icon1" />
                                <span> Focus@gmail.com </span>
                        </div>
                        <div className = "contact">
                                <img src={page7icon2} alt="page7icon2" />
                                <span> 669-508-6708 </span>
                        </div>
                    </div>
                </div>
                <div className = "group">
                    <div className="explorePages title"> Subscribe </div>
                        <div className="groupMore">
                           <div className="searchBar">
                                <input type="text" placeholder="Enter email addres... " />
                                <button>SUBSCRIBE</button>
                           </div>
                            <img src={page7icon4} alt="page7icon4" />
                        </div>
                </div>
            </div>
      </div>

    )
}
export default Page7