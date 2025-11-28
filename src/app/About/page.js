"use client";
import { React, useRef } from "react";
import Transition from "../Transition";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

function About() {
  const target = useRef();
  const { scrollYProgress } = useScroll({ target: target });
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]);
  const abt2 = useTransform(scrollYProgress, [0.2, 0.6], [0.5, 1]);
  const abt3 = useTransform(scrollYProgress, [0.8, 1], [0.5, 1]);
  const text = "About me";
  const letters = text.split("");
  return (
    <Transition>
      <div className="h-auto w-screen relative">
        <div className="h-screen w-screen flex justify-center items-center sticky top-0 z-0">
          <div className="absolute bottom-16">
            <svg
              width="250"
              height="250"
              viewBox="0 0 80 40"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#666"
              strokeWidth="2"
              fill="none"
            >
              <motion.circle
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1.1 }}
                transition={{ delay: 1.5, duration: 2 }}
                cx="20"
                cy="20"
                r="4"
              />
              <motion.circle
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1.1 }}
                transition={{ delay: 1.5, duration: 2 }}
                cx="60"
                cy="20"
                r="4"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: 2, duration: 2 }}
                d="M25 30 Q40 38 55 30"
              />
            </svg>
          </div>
          <motion.div
            initial="initial"
            whileInView="Inview"
            viewport={{ once: true }}
            className="h-fit w-fit overflow-hidden flex items-center"
          >
            {letters.map((letter, i) => {
              return (
                <motion.div
                  key={i}
                  variants={{
                    initial: { y: 100 },
                    Inview: { y: 0 },
                  }}
                  transition={{ duration: 2, delay: (i + 1) * 0.25 }}
                  className="text-black tracking-widest lg:text-[100px] md:text-[64px] sm:text-[56px] text-[48px]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div ref={target}>
          <motion.div
            style={{ scale }}
            className="h-screen w-screen sticky flex justify-center items-center top-0 bg-[#e3af85]"
          >
            <div className="w-[60%] lg:leading-11 text-center text-[#1a1a1a] lg:text-3xl">
              I&#39;m a passionate web developer with a strong eye for design
              and a solid foundation in UI/UX principles. I bring ideas to life
              on the web using Next.js for fast, scalable applications, and I
              craft smooth, engaging interactions with Framer Motion to elevate
              user experience. With hands-on experience in Figma, I bridge the
              gap between design and development, ensuring every project is both
              visually compelling and technically sound.
            </div>
          </motion.div>
          <motion.div
            style={{ scale: abt2 }}
            className="h-screen w-screen sticky top-0 mt-[200vh] flex justify-center items-center bg-[#CEE0A8]"
          >
            <div className="h-auto w-[60%] lg:w-4xl lg:leading-11 text-center text-black lg:text-3xl">
              I&#39;m always exploring new technologies and pushing the
              boundaries of what&#39;s possible in the browser. Whether it&#39;s
              optimizing performance, experimenting with animations, or
              collaborating closely with designers and product teams, I thrive
              on turning complex problems into intuitive, elegant solutions.
              Beyond the code, I value clean communication, creative thinking,
              and building web experiences that not only look great—but feel
              great to use.
            </div>
          </motion.div>
          <motion.div
            style={{ scale: abt3 }}
            className="h-screen w-screen sticky top-0 mt-[200vh] flex justify-center items-center bg-[#F3EBA3]"
          >
            <div className="h-auto w-[60%] lg:w-4xl lg:leading-11 text-center text-black lg:text-3xl">
              I&#39;m a dedicated backend developer with a strong command of Java
              and the Spring Boot ecosystem. I build reliable, scalable services
              that prioritize clean architecture, maintainability, and
              performance. With experience in designing RESTful APIs,
              integrating databases, and optimizing server-side workflows, I
              focus on creating systems that are both efficient and easy to
              extend. My approach blends solid engineering practices with a deep
              understanding of backend principles, ensuring every application I
              build is robust, secure, and ready to scale.
            </div>
          </motion.div>
          <div className="h-[200vh]" />
        </div>
      </div>
    </Transition>
  );
}

export default About;
