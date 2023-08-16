import { useCountdown } from "../hooks/useCountdown";

function CountdownTimer({ targetDate }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const formattedHours = hours === 0 ? "0" : hours.toString().padStart(2, "0");
  const formattedMinutes = minutes === 0 ? "0" : minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds === 0 ? "0" : seconds.toString().padStart(2, "0");

  const countdownExpired = days + hours + minutes + seconds <= 0;

  if (countdownExpired) {
    return <p className="countdown-expired">Webinar się już odbył, powiadomimy Cię o następnym :)</p>;
  } else {
    return (
      <div className="countdown-container">
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
      </div>
    );
  }
}

export default CountdownTimer;
