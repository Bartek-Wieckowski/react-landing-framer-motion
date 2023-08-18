import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { landingSettings } from "../utils/data-settings";
import CountdownTimer from "../components/CountdownTimer";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  const [countdownExpired, setCountdownExpired] = useState(false);

  function handleCountdownExpired() {
    setCountdownExpired(true);
  }

  return (
    <motion.div className="home" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="home-wrapper">
        <CountdownTimer targetDate={landingSettings.date} onCountdownExpired={handleCountdownExpired} />
      </div>
    </motion.div>
  );
}
