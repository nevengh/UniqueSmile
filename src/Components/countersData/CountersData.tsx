import './CountersData.css'
import { FaUserMd, FaSmile, FaHeartbeat } from "react-icons/fa";
import CountUp from "react-countup";
const CountersData = () => {
    const countersData = [
        {
          icon: FaUserMd,
          count: 15,
          label: "Doctors",
        },
        {
          icon: FaSmile,
          count: 300,
          label: "Happy Patients",
        },
        {
          icon: FaHeartbeat,
          count: 100,
          label: "Successful Operations",
          suffix: "%",  // Add a suffix for the percentage value
        },
      ];
    
  return (
    <div className="WhyChooseUs_Counters d-flex justify-center align-center flex-wrap g-2 m-1">
    {countersData.map((item, index) => (
      <div key={index} className="CounterCard d-flex d-column align-center justify-center">
        <div className="CounterCard_Icon">
          <item.icon />
        </div>
        <h2 className="CounterCard_Count">
          <CountUp end={item.count} duration={2} suffix={item.suffix || ""} />
        </h2>
        <p className="CounterCard_Label">{item.label}</p>
      </div>
    ))}
  </div>

  )
}

export default CountersData