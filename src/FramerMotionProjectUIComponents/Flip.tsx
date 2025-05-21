import { useState } from "react";
import { motion } from "framer-motion";

const Flip = () => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      className="card-container"
      onClick={toggleFlip}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="card"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="card-front"
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          Front
        </div>
        <div
          className="card-back"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          Back
        </div>
      </motion.div>
    </div>
  );
};

export default Flip;
