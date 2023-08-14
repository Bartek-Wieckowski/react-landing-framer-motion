import { motion } from "framer-motion";
import logo from "../utils/images";

export default function Header({ webinarTitle, webinarDate }) {
  return (
    <section>
      <header>
        <img src={logo} alt="" />
        <motion.div
          className="title"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <h1>
            Webinar : {webinarTitle}
          </h1>
          <h2>Data : {webinarDate}</h2>
        </motion.div>
      </header>
    </section>
  );
}
