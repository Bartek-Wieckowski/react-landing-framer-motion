import { Link } from "react-router-dom";
import DescriptionWebinar from "../components/DescriptionWebinar";
import imagePaths from "../utils/images";
import { motion } from "framer-motion";

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

export default function About({ webinarContent }) {
  return (
    <motion.div className="about" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="about-wrapper">
        <img src={imagePaths.homeMainImg} alt="Misja Perfekcja w pracy" className="about-main-img" />
        <DescriptionWebinar webinarContent={webinarContent} />
        <div className="next">
          <Link to="/registration">
            <motion.button className="button" variants={buttonVariants} whileHover="hover">
              Dalej
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
