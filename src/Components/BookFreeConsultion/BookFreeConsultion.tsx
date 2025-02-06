import TopBannerCard from "../TopBannerCard/TopBannerCard";
import "./BookFreeConsultion.css";
import { AiOutlineMobile } from "react-icons/ai";
const BookFreeConsultion = () => {
  return (
    <div className="BookFreeConsultion d-flex justify-arround align-item-center flex-wrap">
      <h2 className="BookFreeConsultion-text">Book a free consultation</h2>
      <div className="BookFreeConsultion-buttons d-flex flex-coloumn g-1">
        <div className="BookFreeConsultion-call">
          <TopBannerCard
            card_id="0300-100-900"
            icon_Url=<AiOutlineMobile/>
          />
        </div>
        <div className="book">
          <a href="#contact">Book Now</a>
        </div>
      </div>
    </div>
  );
};
export default BookFreeConsultion;
