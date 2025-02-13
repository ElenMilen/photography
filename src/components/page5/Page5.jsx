import "./page5.scss";
import page5Photo1 from "../../images/page5Photo1.png";
import page5Photo2 from "../../images/page5Photo2.png";
import page5Photo3 from "../../images/page5Photo3.png";


const Page5 = () => {
    return (
        <div className="page5">
            <div className = "title"> Client Testimonials Memories We've Helped Create</div>
            <div className = "people">
                <div className = "person1">
                    <img src={page5Photo1} alt="page5Photo1" />
                    <div className = "theName"> Darryl Sipes</div>
                    <div className = "theRole">Product Factors Liaison</div>
                    <div className = "description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna metus, vulputate  commodo. </div>
                </div>
                <div className = "person2">
                    <img src={page5Photo2} alt="page5Photo2" />
                    <div className = "theName"> Ruby Lueilwitz</div>
                    <div className = "theRole">Corporate Data Technician</div>
                    <div className = "description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna metus, vulputate  commodo.</div>
                </div>
                <div className = "person3">
                    <img src={page5Photo3} alt="page5Photo3" />
                    <div className = "theName">Alexandra Walter PhD</div>
                    <div className = "theRole">Investor Operations Liaison</div>
                    <div className = "description">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna metus, vulputate  commodo.</div>
                </div>
            </div>
        </div>
    )
}
export default Page5;