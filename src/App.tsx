import "./App.css";
import { motion } from "motion/react";

function App() {
  return (
    <div>
      <div className="box-start">
        App
        <motion.div
          className="box"
          initial={{ x: 0 }}
          animate={{ x: 800 }}
          transition={{ delay: 0.25, ease: "easeOut", duration: 0.25 }}
        ></motion.div>
        <motion.div
          className="boxTwo"
          animate={{
            scale: [1, 1.05, 1],
            // rotate: [0, 0, 270, 270, 0],
            borderRadius: ["8%", "10%", "8%"],
            zIndex: 1,
            opacity: [0, 1, 0],
          }}
          transition={{
            // delay: 0.25,
            ease: "linear",
            duration: 1.2,
            repeat: Infinity,
          }}
        ></motion.div>
        <div className="btn-text">Click Me</div>
      </div>
    </div>
  );
}

export default App;
