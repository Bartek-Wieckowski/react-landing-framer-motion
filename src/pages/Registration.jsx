import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imagePaths from "../utils/images";
import Form from "../components/Form";

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
      delay: 0.5,
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

export default function Registration() {
  return (
    <motion.div
      className="registration"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="registration-wrapper">
        <div className="gift-screens">
          <div className="laptop">
            <img src={imagePaths.laptopImg} alt="" />
            <div className="laptopScreen">
              <img src={imagePaths.laptopPDF} alt="" />
            </div>
          </div>
          <div className="phone">
            <img src={imagePaths.phoneImg} alt="" className="phone-picture" />
            <div className="phoneScreen">
              <img src={imagePaths.phonePDF} alt="" className="phoneApp" />
            </div>
          </div>
        </div>
        <Form/>
      </div>
    </motion.div>
  );
}
