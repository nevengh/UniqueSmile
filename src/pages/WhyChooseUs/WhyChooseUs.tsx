import { FaCheck, FaMedal, FaHeartbeat, FaCheckCircle } from "react-icons/fa";
import "./WhyChooseUs.css";
import WhyChooseUsCard from "../../Components/WhyChooseUsCard/WhyChooseUsCard";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,        // Allow repeated animations when scrolling
      offset: 200         // Trigger animation when 200px inside viewport
    });
    AOS.refresh();
  }, []);

  const cardsData = [
    {
      icon: FaCheck,
      title: translations.CertifiedDoctors,
      description: translations.CertifiedDoctors_Desc,
    },
    {
      icon: FaMedal,
      title: translations.AdvancedTechnology,
      description: translations.AdvancedTechnology_Desc,
    },
    {
      icon: FaHeartbeat,
      title: translations.PersonalizedCare,
      description: translations.PersonalizedCare_Desc,
    },
    {
      icon: FaCheckCircle,
      title: translations.ProvenResults,
      description: translations.ProvenResults_Desc,
    },
  ];

  return (
    <div className="WhyChooseUs m-1">
      <h1 className="WhyChooseUs_Heading">{translations.WhyChooseUs}</h1>
      <div className="WhyChooseUs_Container d-flex justify-center align-center flex-wrap g-1">
        {cardsData.map((card, index) => (
          <WhyChooseUsCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // Delay animation for each card
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
