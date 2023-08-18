import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DescriptionWebinar from "../components/DescriptionWebinar";
import AnimatedButton from "../components/AnimatedButton";
import imagePaths from "../utils/images";

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

export default function About({ webinarContentTop, webinarContentBottom }) {
  return (
    <motion.div className="about" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="about-wrapper">
        <img src={imagePaths.homeMainImg} alt="Misja Perfekcja w pracy" className="about-main-img" />
        <DescriptionWebinar
          webinarContentTop={webinarContentTop}
          webinarContentBottom={webinarContentBottom}
        />
        <div className="next">
          <Link to="/registration">
            <AnimatedButton>Dalej</AnimatedButton>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
