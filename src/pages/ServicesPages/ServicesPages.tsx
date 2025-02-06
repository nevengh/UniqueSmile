import './ServicesPages.css'

import derma from '../../assets/resized.jpg'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from '../../LanguageContext';
import en from '../../locales/en';
import ar from '../../locales/ar';

const ServicesPages = () => {
  const {language} = useLanguage();
  const translations = language === "en" ? en : ar
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,       // السماح بتكرار الأنيميشن عند التمرير
      offset: 200        // بدء الأنيميشن بعد أن يصبح العنصر داخل الشاشة بـ 200px
    });
    AOS.refresh();       // تحديث الأنيميشن بعد التهيئة
  }, []);
  const Services =[
    {
      id:1,
      image:derma,
      name:translations.CosmeticProcedures,
      description:translations.CosmeticProcedures_Desc
    }
  ]
  return (
    <div className='ServicesPages m-1'>
      <h1>{translations.OurMedicalServices}</h1>
      <div className="ServicesPages_Container d-flex justify-center align-center flex-wrap g-2 m-1">
        {Services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service_image={service.image}
            service_name={service.name}
            serviec_desc={service.description}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // التأخير بين كل كرت والآخر
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesPages