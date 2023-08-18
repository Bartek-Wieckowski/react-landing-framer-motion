import { motion } from "framer-motion";

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

export default function AnimatedButton({ children, type }) {
  return (
    <motion.button className="button" variants={buttonVariants} whileHover="hover" type={type}>
      {children}
    </motion.button>
  );
}
