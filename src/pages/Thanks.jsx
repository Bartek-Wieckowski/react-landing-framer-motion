import { motion } from "framer-motion";
import { landingSettings } from "../utils/data-settings";

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
        <h2>Dziekujemy, za wypełnienie formularza!</h2>
        {!landingSettings.gift ? (
          <motion.p variants={childVariants}>
            Prosimy o sprawdzenie skrzynki e-mail, tam powinien czekac na Ciebie gotowy link do wydarzenia!
          </motion.p>
        ) : (
          <motion.p variants={childVariants}>
            Prosimy o sprawdzenie skrzynki e-mail, tam powinien czekac na Ciebie gotowy link do wydarzenia
            oraz Twój prezent!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
