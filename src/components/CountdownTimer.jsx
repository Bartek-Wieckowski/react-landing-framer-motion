import { useEffect } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { Link } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

function CountdownTimer({ targetDate, onCountdownExpired }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const formattedHours = hours === 0 ? "0" : hours.toString().padStart(2, "0");
  const formattedMinutes = minutes === 0 ? "0" : minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds === 0 ? "0" : seconds.toString().padStart(2, "0");

  const countdownExpired = days + hours + minutes + seconds <= 0;

  useEffect(() => {
    if (countdownExpired) {
      onCountdownExpired();
    }
  }, [countdownExpired, onCountdownExpired]);

  return (
    <div className="countdown-container">
      {countdownExpired ? (
        <>
          <p className="countdown-expired">Webinar już się odbył, powiadomimy Cię o następnym 😊</p>
          <a href="https://www.misjaperfekcja.pl/blog" target="_blank" rel="noopener noreferrer">
            <AnimatedButton>CZYTAJ NASZ BLOG!</AnimatedButton>
          </a>
        </>
      ) : (
        <>
          <h2 className="countdown-title">Do rozpoczęcia wydarzenia zostało:</h2>
          <div className="countdown">
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
          <Link to="/about">
            <AnimatedButton>DOWIEDZ SIĘ WIĘCEJ...</AnimatedButton>
          </Link>
        </>
      )}
    </div>
  );
}

export default CountdownTimer;
