import { Link } from 'react-router-dom';
import DescriptionWebinar from '../components/DescriptionWebinar';
import imagePaths from '../utils/images';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
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
const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};
export default function About({ webinarContent }) {
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="home-wrapper">
        <img
          src={imagePaths.homeMainImg}
          alt="Misja Perfekcja w pracy"
          className="home-main-img"
        />
        <DescriptionWebinar webinarContent={webinarContent} />
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/about">
            <motion.button variants={buttonVariants} whileHover="hover">
              Dalej
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
