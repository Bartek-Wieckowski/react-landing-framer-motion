import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: "200px",
    transition: { delay: 0.5 },
  },
};

export default function Modal({ isOpen, onClose, buttonText, contentText }) {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      <motion.div className="backdrop" variants={backdrop} animate="visible" initial="hidden" exit="hidden">
        <motion.div className="modal" variants={modal}>
          <p>{contentText}</p>
          <button className="button" onClick={onClose}>{buttonText}</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
