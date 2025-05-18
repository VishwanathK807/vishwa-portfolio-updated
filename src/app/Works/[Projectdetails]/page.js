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
      <div className="h-screen w-screen overflow-auto">
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-15 mt-70">
          <motion.div className="text-6xl h-[9%] w-fit font-semibold text-black overflow-hidden">
            <motion.a
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.5, duration: 2 }}
              className="flex justify-center items-center gap-5"
              href={content.Url}
            >
              {content.Title}
              <svg
                width="50"
                height="50"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.4017 2.59835C16.9372 1.13388 14.5628 1.13388 13.0984 2.59835L8.59835 7.09835C7.13388 8.56282 7.13388 10.9372 8.59835 12.4017C8.90922 12.7125 9.25977 12.9565 9.63303 13.1348C10.0068 13.3134 10.165 13.7611 9.98649 14.1349C9.80794 14.5086 9.36021 14.6669 8.98645 14.4883C8.46169 14.2376 7.97063 13.8953 7.53769 13.4623C5.48744 11.4121 5.48744 8.08794 7.53769 6.03769L12.0377 1.53769C14.0879 -0.512563 17.4121 -0.512563 19.4623 1.53769C21.5126 3.58794 21.5126 6.91206 19.4623 8.96231L17.7053 10.7193C17.4124 11.0122 16.9376 11.0122 16.6447 10.7193C16.3518 10.4264 16.3518 9.95151 16.6447 9.65862L18.4017 7.90165C19.8661 6.43718 19.8661 4.06282 18.4017 2.59835ZM11.0135 6.86513C11.1921 6.49138 11.6398 6.33313 12.0135 6.51167C12.5383 6.76236 13.0294 7.10475 13.4623 7.53769C15.5126 9.58794 15.5126 12.9121 13.4623 14.9623L8.96231 19.4623C6.91206 21.5126 3.58794 21.5126 1.53769 19.4623C-0.512563 17.4121 -0.512563 14.0879 1.53769 12.0377L3.29466 10.2807C3.58755 9.98783 4.06243 9.98783 4.35532 10.2807C4.64821 10.5736 4.64821 11.0485 4.35532 11.3414L2.59835 13.0984C1.13388 14.5628 1.13388 16.9372 2.59835 18.4017C4.06282 19.8661 6.43718 19.8661 7.90165 18.4017L12.4017 13.9016C13.8661 12.4372 13.8661 10.0628 12.4017 8.59835C12.0908 8.28748 11.7402 8.04347 11.367 7.86517C10.9932 7.68662 10.835 7.23889 11.0135 6.86513Z"
                  fill="#FF8181"
                />
              </svg>
            </motion.a>
          </motion.div>
          <div className="w-[70%] text-black text-center text-xl overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.5, duration: 2 }}
            >
              {content.content}
            </motion.div>
          </div>
          <iframe
            className="rounded-2xl"
            width="85%"
            height="60%"
            src={content.Url}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Transition>
  );
}

export default Projectdetails;
