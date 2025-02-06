import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="ContactUs m-1">
      <div className="ContactUs_Heading d-flex justify-center align-center flex-coloumn">
        <h4>SCHEDULE AN APPOINTMENT</h4>
        <h1>TREAT YOURSELF</h1>
      </div>
      <div className="ContactUs_Conatiner">
        {/* Form Section */}
        <div className="form-container">
          <form>
            <div className="first-row d-flex justify-center g-1">
              <div className="input-group">
                <label htmlFor="name">Your Name*</label>
                <input type="text" id="name" required />
              </div>

              <div className="input-group">
                <label htmlFor="email">Your e-mail*</label>
                <input type="email" id="email" required />
              </div>
            </div>

            <div className="first-row d-flex justify-center g-1">
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" />
              </div>

              <div className="input-group">
                <label htmlFor="date">Choose Date</label>
                <input type="date" id="date" />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="service">Choose Service</label>
              <select id="service">
                <option value="">Select a service</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="message" className="mt-2">
                Message
              </label>
              <textarea id="message"></textarea>
            </div>

            <div className="submit-row">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.684542847539!2d55.256323074942934!3d25.21385873102652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdeeb878885%3A0x53ead6420f96cd00!2sUnique%20Smile%20Clinic!5e0!3m2!1sen!2sae!4v1738833587073!5m2!1sen!2sae"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
