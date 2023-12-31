import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { webinarContentBottom, webinarContentTop } from "../utils/data-settings";
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

export default function About() {
  return (
    <motion.div className="about" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="about-wrapper">
        <img src={imagePaths.homeMainImg} alt="" className="about-main-img" />
        <DescriptionWebinar
          webinarContentTop={webinarContentTop}
          webinarContentBottom={webinarContentBottom}
        />
        <div className="next">
          <Link to="/react-landing-framer-motion/registration">
            <AnimatedButton>Next</AnimatedButton>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
