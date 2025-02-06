import React, { ReactNode } from "react";
import "./TopBannerCard.css";

interface TopBannerCardProps{
    icon_Url:string | ReactNode;
    card_name ?:string;
    card_id:string;
}
const TopBannerCard:React.FC<TopBannerCardProps> = ({icon_Url,card_id,card_name}) => {
  return (
    <div className="top-banner-card d-flex align-item-center g-1">
      <div className="top-banner-card-svg ">
        {icon_Url}
      </div>
      <div className="top-banner-card-info">
        <p className="top-banner-card-name">{card_name}</p>
        <a className="top-banner-card-id">{card_id}</a>
      </div>
    </div>
  );
};

export default TopBannerCard;
