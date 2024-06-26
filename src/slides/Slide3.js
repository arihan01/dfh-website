import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S4Text1 } from "../img/s4-text-1.svg"; // importing the header
import { ReactComponent as S4Text2 } from "../img/s4-text-2.svg"; // importing the text

export default function Slide3() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center gap-32">
      <motion.div className="w-3/4" {...animate.leftToRight}>
        <S4Text1 className="h-auto w-full" /> {/* Header */}
      </motion.div>
      <motion.div className="w-3/5" {...animate.rightToLeft}>
        <S4Text2 className="h-auto w-full" /> {/* Text */}
      </motion.div>
    </div>
  );
}
