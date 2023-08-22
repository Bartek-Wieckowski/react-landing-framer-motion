import { motion } from "framer-motion";
import { landingSettings } from "../utils/data-settings";

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
        {landingSettings.gift && <Gift />}
        <Form />
      </div>
    </motion.div>
  );
}
