"use client";
import React from "react";
import { useParams } from "next/navigation";
import Description from "./ProjectDesciptions";
import Transition from "@/app/Transition";
import { motion } from "motion/react";
function Projectdetails() {
  const params = useParams();
  const content = Description.find((p) => {
    return p.id.toString() === params.Projectdetails;
  });

  return (
    <Transition>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-9">
        <motion.div className="text-6xl h-[9%] w-fit font-semibold text-black overflow-hidden">
          <motion.div
            
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 2,}}
          >
            {content.Title}
          </motion.div>
        </motion.div>
        <div className="w-[70%] text-black text-center text-xl overflow-hidden">
          <motion.div
            
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 2,}}
          >
            {content.content}
          </motion.div>
        </div>
      </div>
    </Transition>
  );
}

export default Projectdetails;
