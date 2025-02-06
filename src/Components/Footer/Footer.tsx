import { useLanguage } from "../../LanguageContext";
import ar from "../../locales/ar";
import en from "../../locales/en";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaPhone } from "react-icons/fa";

const Footer = () => {
  const {language} = useLanguage();
  const translations = language === "en" ?en:ar;
  return (
    <div className="Footer">
      <div className="Footer-Container">
        {/* Logo and description */}
        <div className="logo-section">
          <h2 className="logo">Uniqe Smile Clinic</h2>
          <p className="logo-text">
            Since 1997, Sano has worked diligently to provide the best in beauty services to each patient.
          </p>
        </div>

        {/* Contact Info */}
        <div className="contact-section">
          <h3 className="contact-title">{translations.MainLocation}</h3>
          <p className="contact-item">{translations.MainLocation_Address}</p>

          <h3 className="contact-title">{translations.GeneralInquiries}</h3>
          <div className="contact-item">
            <FaPhone/>
            <div className="contact-item-numbers">
              <a href="tel:971042502471">042502471</a><br/>
              <a href="tel:9710547748778"> 0547748778</a>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="contact-section">
          <h3 className="contact-title">{translations.WorkingHours}</h3>
          <p className="contact-item">Monday - Friday: 9 AM to 6 PM</p>
          <p className="contact-item">Saturday: 9 AM to 2 PM</p>
          <p className="contact-item">Sunday: Closed</p>
        </div>
      </div>

      {/* Social icons */}
      <div className="social-icons">
        <a href="#Facebook"><FaFacebook /></a>
        <a href="#Twitter"><FaTwitter /></a>
        <a href="#LinkedIn"><FaLinkedin /></a>
        <a href="#YouTube"><FaYoutube /></a>
        <a href="#Instagram"><FaInstagram /></a>
      </div>

      {/* Footer Bottom */}
      <div className="Footer-Bottom">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Copyright © 2025 Unique Smile</span>
      </div>
    </div>
  );
};

export default Footer;
