import { motion } from "motion/react";

function PulsingBtn() {
  return (
    <motion.button
      className="px-2 py-1 text-white bg-blue-500 rounded outline-none"
      animate={{
        scale: [1, 1.11, 1],
        backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
      }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
    >
      Click Me
    </motion.button>
  );
}

export default PulsingBtn;
