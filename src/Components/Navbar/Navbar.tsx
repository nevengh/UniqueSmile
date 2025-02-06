import  { useState } from 'react';
import './Navbar.css';
import uniqueSmile from '../../assets/uniquesmileResize.png'
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
const Navbar = () => {
  const {language} = useLanguage();
  const translations = language === "en"?en:ar
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="Navbar luxury-navbar">
      <div className="nav d-flex justify-between">
        <div className="brand-logo">
          <img src={uniqueSmile} alt="Unique Smile Medical Center" />
        </div>
        <div className="nav-menu d-flex justify-center align-item-center g-2">
          <a className="nav-link" href="#home">{translations.Home}</a>
          <a className="nav-link" href="#WhyChooseUs">{translations.AboutUs}</a>
          <a className="nav-link" href="#ServicesPages">{translations.Services}</a>
          <a className="nav-link" href="#contact">{translations.Contact}</a>
        </div>
        <div className="book">
          <a href="#contact">{translations.BookNow}</a>
        </div>
        <div className="burger" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <a className="nav-link" href="#home" aria-label='Link to the home section' onClick={closeMenu}>{translations.Home}</a>
          <a className="nav-link" href="#About" aria-label='Link to the About section' onClick={closeMenu}>{translations.AboutUs}</a>
          <a className="nav-link" href="#Services" aria-label='Link to the Services section' onClick={closeMenu}>{translations.Services}</a>
          <a className="nav-link" href="#Contact" aria-label='Link to the Contact section'  onClick={closeMenu}>{translations.Contact}</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
