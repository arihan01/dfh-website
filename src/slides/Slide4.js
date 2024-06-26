import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";

export default function Slide4() {
  return (
    <div className="white-bg bg-common flex h-full items-center">
      <div className="mx-auto flex h-[90vh] w-4/5 flex-col items-center justify-center">
        <div className="mb-5 text-3xl md:text-5xl lg:text-4xl">
          <p className="text-center font-bvb">Meet The</p>
          <p className="-mt-2 font-bvr text-[#E59617]">Dancing Frog</p>
        </div>
        <motion.img
          src={require("../img/s5-img.webp")} // circle image
          className="mx-auto mb-5 w-1/2 "
          {...animate.fadeIn}
          transition={{ ...animate.fadeIn.transition, delay: 0.8 }}
        />
        <motion.div
          className=""
          {...animate.fadeIn}
          transition={{ ...animate.fadeIn.transition, delay: 1.6 }}
        >
          <div className="text-center font-bvb text-2xl md:text-3xl">
            What’s In A Name?
          </div>
          <div className="text-center font-cf text-lg leading-relaxed text-[#E59617] md:text-xl">
            Micrixalus Kottigeharensis
          </div>
          <div class="flex h-full items-center justify-center">
            <div class="w-auto text-center font-cf text-xs leading-relaxed tracking-tight md:text-lg lg:text-sm">
              <div>
                Also called torrent frogs & they belong to the genus
                ‘Micrixalus’. Endemic to the Western Ghats of India, these tiny
                frogs, measuring just about three centimeters, are found in and
                around perennial streams.
                <br />
                <br />
                Of the 24, 14 species have been discovered as recently as 2014.
                These are critically endangered, due to loss and fragmentation
                of habitat to agriculture.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
