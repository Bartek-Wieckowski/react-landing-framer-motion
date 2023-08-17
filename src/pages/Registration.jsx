import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Gift from "../components/Gift";
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
        <Gift />
        <Form />
      </div>
    </motion.div>
  );
}
