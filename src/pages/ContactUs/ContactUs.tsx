import { useState } from "react";
import "./ContactUs.css";

// Define an interface for sub-service options
interface SubServiceOption {
  value: string;
  label: string;
}

const ContactUs = () => {
  const [, setSelectedService] = useState<string>("");
  const [subServiceOptions, setSubServiceOptions] = useState<SubServiceOption[]>([]);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const service = e.target.value;
    setSelectedService(service);

    // Update sub-service options based on the selected service
    if (service === "Dental") {
      setSubServiceOptions([
        { value: "Teeth Whitening", label: "Teeth Whitening" },
        { value: "Cleaning", label: "Cleaning" },
        { value: "Veneers", label: "Veneers" },
        { value: "Hollywood Smile", label: "Hollywood Smile" },
        { value: "Implant", label: "Implant" },
      ]);
    } else if (service === "Dermatology") {
      setSubServiceOptions([
        { value: "Laser", label: "Laser" },
      ]);
    } else {
      setSubServiceOptions([]);
    }
  };

  return (
    <div className="ContactUs m-1">
      <div className="ContactUs_Heading d-flex justify-center align-center flex-column">
        <h4>SCHEDULE AN APPOINTMENT</h4>
        <h1>TREAT YOURSELF</h1>
      </div>
      <div className="ContactUs_Container ">
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
                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" id="phone" required />
              </div>

              <div className="input-group">
                <label htmlFor="date">Choose Date</label>
                <input type="date" id="date" required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="service">Choose Service*</label>
              <select id="service" required onChange={handleServiceChange}>
                <option value="">Select a service</option>
                <option value="Dental">Dental</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Service3">Service 3</option>
              </select>
            </div>

            {/* Sub-Service Dropdown */}
            {subServiceOptions.length > 0 && (
              <div className="input-group">
                <label htmlFor="subService">Choose Sub-Service*</label>
                <select id="subService" required>
                  {subServiceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="input-group">
              <label htmlFor="message" className="mt-2">
                Message*
              </label>
              <textarea id="message" required></textarea>
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
