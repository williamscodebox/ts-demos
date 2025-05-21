import { motion } from "motion/react";
import { useState } from "react";

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

function FlippingCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  //   const styleOne =
  //     "absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold translate-z-2";
  //   const styleTwo =
  //     "absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold translate-z-2";

  return (
    <motion.div
      className="perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-64 h-40 bg-transparent rounded-lg shadow-lg overflow-hidden transform-3d ;"
        drag
        variants={cardVariants}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold ">
          Front Side
        </div>
        <div className=" test">Back Side</div>
      </motion.div>
    </motion.div>
  );
}

export default FlippingCard;
