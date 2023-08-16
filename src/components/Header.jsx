import { motion } from "framer-motion";
import imagePaths from "../utils/images"

export default function Header({ webinarTitle, webinarDate }) {
  const formattedDay = webinarDate.day.toString().padStart(2, '0');
  const formattedMonth = webinarDate.month.toString().padStart(2, '0');
  const formattedYear = webinarDate.year;

  const formattedDate = `${formattedDay}.${formattedMonth}.${formattedYear}`;
  
  return (
    <section>
      <header>
        <img src={imagePaths.logo} alt="" />
        <motion.div
          className="title"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <h1>
            Webinar : {webinarTitle}
          </h1>
          <h2>Data : {formattedDate}</h2>
        </motion.div>
      </header>
    </section>
  );
}
