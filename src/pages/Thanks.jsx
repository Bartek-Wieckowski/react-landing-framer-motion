import { motion } from "framer-motion";
import { landingSettings } from "../utils/data-settings";
import EffectSlider from "../components/EffectSlider";
import { Link } from "react-router-dom";
import AnimatedButton from "../components/AnimatedButton";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

export default function Thanks() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="thanks-info">
        <h2>Thank you, for filling out the form!</h2>
        {!landingSettings.gift ? (
          <motion.p variants={childVariants}>
            Please check your email inbox, there should be a ready link to the event waiting for you!
          </motion.p>
        ) : (
          <motion.p variants={childVariants}>
            Please check your email inbox, there should be a ready link to the event waiting for you there and your gift!
          </motion.p>
        )}
        <div>
          <h3>Our photographs:</h3>
        </div>
      </div>
      <EffectSlider />
      <div className="thanks-btn">
      <Link to="/">
        <AnimatedButton>Homepage</AnimatedButton>
      </Link>
      </div>
    </motion.div>
  );
}
