import './Hero.css';
import slide1 from '../../assets/IMG_E8670.webp';
import SimpleImageSlider from 'react-simple-image-slider';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaTooth } from 'react-icons/fa6';

const Hero = () => {
  
  const images = [
    { url: slide1 },
  ];

  const scrollToNextSection = () => {
    const targetSection = document.getElementById('contact');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='Hero'>
      <div className="hero-content">
        <SimpleImageSlider
          width={window.innerWidth} // Full width
          height={window.innerHeight} // Full height
          images={images}
          showBullets={true}
          showNavs={false}
          autoPlay={true} 
          autoPlayDelay={2}
        />
      </div>
      <div className="hero-content-text">
        <h1>Your Smile, Our Commitment</h1>/
        <p className='tooth-icon'><FaTooth color='#fff' /></p>
        <div className="hero-book">
          <a href="/contact" aria-label='Link to the Form'>Book Your Appointment</a>
        </div>
      </div>
      <div className="hero_arrow" onClick={scrollToNextSection}>
        <FaArrowCircleDown />
      </div>
    </div>
  );
};

export default Hero;
