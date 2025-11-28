"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Transition from "./Transition";
import Cursor from "./MouseEvents/Cursor";
import { useRef } from "react";

export default function Home() {
  const con = useRef();
  const { scrollYProgress } = useScroll({
    target: con,
  });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Transition>
      <div className="h-[400vh] w-screen">
        <Cursor>Scroll to see more</Cursor>
        <div className="flex flex-col justify-center relative top-[35vh] z-0 items-center ">
          <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:2}} viewport={{once:true}} className="absolute w-[35%] h-auto  -left-28 ">
          <Image src="/Images/me.png" width={500} height={500} alt="me" className="hidden lg:block md:block"/>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} className="overflow-hidden relative left-4 w-auto h-fit">
            <motion.div
              variants={{
                hidden: {y:120},
                visible: {y:0},
              }}
              transition={{delay:1.4}}
              
              className="text-black lg:text-[100px] md:text-[64px] sm:text-[56px] text-[48px] z-10  lg:tracking-[50px] md:tracking-[32px] sm:tracking-[28px]"
            >
              Vishwanath
            </motion.div>
          </motion.div>

          <div className="lg:ml-[750px]">
            <motion.div
              initial="initial"
              whileInView="InView"
              viewport={{ once: true }}
              className="w-fit h-fit overflow-hidden"
            >
              <motion.div
                variants={{
                  initial: { y: 100 },
                  InView: { y: 0 },
                }}
                transition={{ delay: 1.5 }}
                
                className="text-[#1C1C1C] font-light text-[30px]"
              >
                <h1>Fullstack Developer</h1>
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="InView"
              viewport={{ once: true }}
              className="w-fit h-fit overflow-hidden"
            >
              <motion.div
                variants={{
                  initial: { y: 100 },
                  InView: { y: 0 },
                }}
                transition={{delay:1.7}}
                
                className="text-[#1C1C1C] font-light text-[30px]"
              >
                <h1>UI/UX designer</h1>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div ref={con} className="h-[300vh] mt-[80vh]">
          <div className="h-[100vh] w-screen flex justify-center items-center sticky top-0">
            <div className="md:text-[40px] text-[30px]  w-[1100px] h-fit text-center text-black ">
              Hi there! Welcome to my portfolio website I&apos;m Vishwanath, a{" "}
              <span className="text-[#D94152] font-semibold">web designer</span>{" "}
              and{" "}
              <span className="text-[#D94152] font-semibold relative">
                <span className="absolute bottom-">
                  <svg
                    className="w-[150px] h-[50px] md:w-[390px] md:h-[57px]"
                    viewBox="0 0 390 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    
                  >
                    <motion.path
                      
                      style={{ pathLength: draw }}
                      d="M241.995 56C140.006 55.5482 -32.5561 45.3436 6.66342 19.9027C48.2089 -7.04692 371.845 -2.09419 387.127 15.5262C398.714 28.8859 360.483 43.993 131.507 56"
                      stroke="#129678"
                      strokeWidth="3"
                      strokeLinecap="round"
                      
                    />
                  </svg>
                </span>{" "}
                Fullstack developer
              </span>
              . Feel free to admire my creation😊
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
