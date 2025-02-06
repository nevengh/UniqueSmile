import React from "react";
import "./CardTestimonial.css";

interface CardTestimonialProps {
  profile_img: string;
  comment: string;
  name: string;
}

const CardTestimonial: React.FC<CardTestimonialProps> = ({
  profile_img,
  comment,
  name,
}) => {
  return (
    <div className="CardTestimonial d-flex">
      <div className="profile_img_container">
        <img
          src={profile_img}
          alt={`Recommendation from ${name}`}
          className="profile_img"
        />
      </div>
      <div className="CardTestimonial_content">
        <p className="comment">{comment}</p>
        <p className="CardTestimonial_name">{name}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;
