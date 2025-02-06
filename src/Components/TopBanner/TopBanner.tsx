import TopBannerCard from "../TopBannerCard/TopBannerCard";
import "./TopBanner.css";
import { AiOutlineMobile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiClock } from "react-icons/hi";
import Logo from '../../assets/UniqueLogo.png'
const TopBanner = () => {
  const cards = [
    {
      id: 1,
      icon_Url: <AiOutlineMobile color="#c4b492"/>,
      card_name: "free consultation",
      card_id: "0300-400-222",
      card_Alt: "Icon for Mobile Link",
    },
    {
      id: 2,
      icon_Url: <GoLocation color="#c4b492"/>,
      card_name: "MELBLOURNE, VICTORIA",
      card_id: "123 Sano Stree",
      card_Alt: "Icon for Address Link",
    },
    {
      id: 3,
      icon_Url: <HiClock  color="#c4b492"/>,
      card_name: "9:00AM - 6:00PM",
      card_id: "Monday - Friday",
      card_Alt: "Icon for Open Time ",
    },
  ];
  return (
    <div className="TopBanner d-flex justify-between">
      <div className="logo">
        <img src={Logo} alt="Unique Smile Medical Center" className="logo_image" />
      </div>
      <div className="tob-banner-info d-flex g-3">
        {cards.map((card) => {
          return (
            <TopBannerCard
              key={card.id}
              card_id={card.card_id}
              card_name={card.card_name}
              icon_Url={card.icon_Url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopBanner;
