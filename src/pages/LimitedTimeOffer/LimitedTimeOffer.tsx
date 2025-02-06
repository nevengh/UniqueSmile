import React, { useEffect, useState } from "react";
import "./LimitedTimeOffer.css";

const LimitedTimeOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // Set to 3600 seconds (1 hour)

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Format time (HH:MM:SS)
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="limited-time-offer">
      <h2 className="offer-title">Limited-Time Offer!</h2>
      <p className="offer-details">
        50% off your first consultation. Hurry up, the offer ends soon!
      </p>
      <div className="countdown-timer">{formatTime(timeLeft)}</div>
      <a href="#contact" className="cta-button">Claim Your Discount Now!</a>
      
    </div>
  );
};

export default LimitedTimeOffer;
