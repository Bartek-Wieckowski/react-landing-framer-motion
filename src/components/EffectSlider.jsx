import { motion } from "framer-motion";
import imagePaths from "../utils/images";
import { useEffect, useRef, useState } from "react";

const wavingHandVariants = {
  initial: {
    rotate: 0,
    x: -100,
  },
  waving: {
    rotate: [0, 30, 0, 30, 0], 
    x: [0, 30, 0, 30, 0], 
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

export default function EffectSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="effect-slider-wrapper">
      <motion.img
        src={imagePaths.swipe}
        alt="ikona"
        className="swipe-icon"
        initial="initial"
        animate="waving"
        variants={wavingHandVariants}
      />
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="carousel-inner">
          {imagePaths.imagesSlider.map((img, index) => {
            return (
              <motion.div className="item">
                <img src={img} alt={`slider item ${index}`} key={index} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
