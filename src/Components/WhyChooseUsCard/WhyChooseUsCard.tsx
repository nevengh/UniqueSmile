import React from "react";
import './WhyChooseUsCard.css'
import { IconType } from "react-icons";

interface WhyChooseUsCardProps {
  icon: IconType;            // The icon component type from react-icons
  title: string;             // The title to display
  description: string;       // The description to display
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ icon: Icon, title, description ,...props}) => {
  return (
    <div className="WhyChooseUs_Card"{...props}>
       
      <div className="WhyChooseUs_Head d-flex justify-center align-item-center g-1">
        <div className="WhyChooseUs_Icon">
          <Icon /> {/* Render the icon dynamically */}
        </div>
        <p>{title}</p>
      </div>
      <div className="WhyChooseUs_desc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
