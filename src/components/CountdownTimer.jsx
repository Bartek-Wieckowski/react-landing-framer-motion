import { useEffect, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { Link } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

function CountdownTimer({ targetDate, onCountdownExpired }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const [pulseAlert, setPulseAlert] = useState(false)

  const formattedHours = hours === 0 ? "0" : hours.toString().padStart(2, "0");
  const formattedMinutes = minutes === 0 ? "0" : minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds === 0 ? "0" : seconds.toString().padStart(2, "0");

  const countdownExpired = days + hours + minutes + seconds <= 0;

  useEffect(() => {
    if (countdownExpired) {
      onCountdownExpired();
    }
  }, [countdownExpired, onCountdownExpired]);

  useEffect(() => {
    const remainingTimeInSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    if (remainingTimeInSeconds <= 900) {
      setPulseAlert(true);
    }
  }, [days, hours, minutes, seconds]);
  

  return (
    <div className="countdown-container">
      {countdownExpired ? (
        <>
          <p className="countdown-expired">The session has already taken place, we will notify you of the next one 😊</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <AnimatedButton>READ OUR BLOG!</AnimatedButton>
          </a>
        </>
      ) : (
        <>
          <h2 className="countdown-title">The event is set to begin:</h2>
          <div className={`countdown ${pulseAlert ? "its-comming-now" : ""}`}>
            <div className="countdown-item">
              <span className="countdown-value">{days}</span> dni
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formattedHours}</span> godzin
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formattedMinutes}</span> minut
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formattedSeconds}</span> sekund
            </div>
          </div>
          <Link to="/react-landing-framer-motion/about">
            <AnimatedButton>LEARN MORE...</AnimatedButton>
          </Link>
        </>
      )}
    </div>
  );
}

export default CountdownTimer;
