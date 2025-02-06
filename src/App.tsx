import './App.css'
import CountersData from './Components/countersData/CountersData'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import WhatsAppBtn from './Components/WhatsAppBtn/WhatsAppBtn'

import { LanguageProvider } from './LanguageContext'
import ContactUs from './pages/ContactUs/ContactUs'
import LimitedTimeOffer from './pages/LimitedTimeOffer/LimitedTimeOffer'
import OurDoctor from './pages/OurDoctor/OurDoctor'
import ServicesPages from './pages/ServicesPages/ServicesPages'
import Testimonial from './pages/Testimonial/Testimonial'
import WhyChooseUs from './pages/WhyChooseUs/WhyChooseUs'

const App = () => {
  return (
    <div >
      <LanguageProvider>
        <Navbar/>
        <Hero/>
        <div className='container'>
        <div id='ServicesPages'>
          <ServicesPages/>
        </div>
        <div id='WhyChooseUs'>
          <WhyChooseUs/>
        </div>
        <div id='OurDoctor'>
          <OurDoctor/>
        </div>

        <div id="LimitedTimeOffer">
          <LimitedTimeOffer/>
        </div>
        {/* <div id='BeforeAndAfter'>
          <BeforeAndAfter/>
        </div> */}
        <div id='CountersData'>
          <CountersData/>
        </div>
        <div id='Testimonial'>
          <Testimonial/>
        </div>
        <div id="contact">
          <ContactUs/>
        </div>
        </div>
        <Footer/>
        <WhatsAppBtn/>
      </LanguageProvider>
    </div>
  )
}

export default App