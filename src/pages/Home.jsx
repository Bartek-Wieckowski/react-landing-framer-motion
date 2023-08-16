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

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 0.3,
    },
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

        {countdownExpired ? (
          <a href="https://www.misjaperfekcja.pl/blog" target="_blank" rel="noopener noreferrer">
            <motion.button className="button" variants={buttonVariants} whileHover="hover">
              CZYTAJ NASZ BLOG!
            </motion.button>
          </a>
        ) : (
          <Link to="/about">
            <motion.button className="button" variants={buttonVariants} whileHover="hover">
              DOWIEDZ SIĘ WIĘCEJ...
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
