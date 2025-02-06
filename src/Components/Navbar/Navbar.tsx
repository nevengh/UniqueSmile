import  { useState } from 'react';
import './Navbar.css';
import uniqueSmile from '../../assets/uniquesmile.png'
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
          <a className="nav-link" href="#About">{translations.AboutUs}</a>
          <a className="nav-link" href="#Services">{translations.Services}</a>
          <a className="nav-link" href="#Contact">{translations.Contact}</a>
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
          <a className="nav-link" href="#home" onClick={closeMenu}>{translations.Home}</a>
          <a className="nav-link" href="#About"  onClick={closeMenu}>{translations.AboutUs}</a>
          <a className="nav-link" href="#Services"  onClick={closeMenu}>{translations.Services}</a>
          <a className="nav-link" href="#Contact"  onClick={closeMenu}>{translations.Contact}</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
