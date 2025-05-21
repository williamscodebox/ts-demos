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
      </div>
    </div>
  );
}

export default App;
