import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      repeatType: 'mirror',
      repeat: Infinity,
      duration: 0.3,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="home-wrapper">
        <h2>Do rozpoczecia wydarzenia zostało:</h2>
        <Link to="/about">
          <motion.button variants={buttonVariants} whileHover="hover">
            DOWIEDZ SIĘ WIĘCEJ...
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
