import React, { useEffect } from 'react';
import Slider from 'react-slick';

import './Testimonial.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import person from '../../assets/unnamed.png';
import Nahla from '../../assets/NN.png'
import Mariam from '../../assets/MM.png'
import Sawsan from '../../assets/alsayegh.png'
import CardTestimonial from '../../Components/CardTestimonial/CardTestimonial';

const Testimonial: React.FC = () => {
  useEffect(() => {
    // Initialize any custom animations if needed
  }, []);

  const testimonials = [
    {
      comment: '"Please choose Cybil for laser— she is very professional and caring. Her gentle approach is much appreciated! ❤️ Diana at reception is so sweet and answered all my questions.They are fast and responsive on whatsapp, and they even let me do a free patch test for skin compatibility."',
      name: 'Christina Varghesa',
      profile_img: person,
    },
    {
      comment: '"I would like to express my sincere gratitude and appreciation for the exceptional work done by Dr. Azhar. Last week, I underwent the Ultraformer 3 treatment with him, and the experience was outstanding on every level. Although the results start to appear after about a month, I’ve already started noticing a difference. Dr. Azhar’s technique is both unique and highly professional, and his meticulous attention to safety gave me complete confidence that I was in capable hands. His kindness, respect for patients, and genuine care for their needs are truly remarkable and contribute greatly to the overall satisfaction. I am extremely happy that I chose Dr. Azhar for my treatment and highly recommend him to anyone seeking beauty treatments with peace of mind."',
      name: 'Nahla Ashi',
      profile_img: Nahla,
    },
    {
      comment: '"I went to Dr. Rasha for metal braces, and I’m very happy with the experience. Initially, I wanted veneers, but she clearly explained the differences and recommended braces based on my teeth. Dr. Rasha answered all my questions and honestly suggested metal braces over the more expensive ceramic ones, which I appreciated.When I had an issue late at night, I messaged the clinic, and Dr. Rasha responded within an hour—almost midnight! Her dedication and care for patients truly stand out. I highly recommend her for orthodontic care, especially braces."',
      name: 'Mariam.',
      profile_img: Mariam,
    },
    {
      comment: '"One of the best clinic I have ever seen Great staff, very helpful, corporate, professional,friendly. Amazing doctors .thanks so much to all of them."',
      name: 'Sawsan Alsayegh',
      profile_img: Sawsan,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,  // Show one slide at a time
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider">
      <Slider {...sliderSettings}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card-wrapper">
            <CardTestimonial
              comment={item.comment}
              name={item.name}
              profile_img={item.profile_img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
