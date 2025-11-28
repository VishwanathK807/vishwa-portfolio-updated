"use client";
import { React, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Transition from "../Transition";
import axios from "axios";

function Hire() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const card1 = useTransform(scrollYProgress, [0, 0.2], [90, 0]);
  const card2 = useTransform(scrollYProgress, [0, 0.11], [90, 0]);
  const card3 = useTransform(scrollYProgress, [0.2, 0.35], [90, 0]);
  const card4 = useTransform(scrollYProgress, [0.35, 0.6], [90, 0]);
  const card5 = useTransform(scrollYProgress, [0.6, 0.78], [90, 0]);
  const [details,setdetails] = useState({user_name:"",email:"",message:""});
  const handleChange = (e)=>{
    e.preventDefault();
    const {name,value} = e.target;
    setdetails((p)=>({
      ...p,
      [name]:value,
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    try{
      const res = axios.post("http://localhost:8080/add",details);
      res==true?alert("success"):null;
      
      
    }catch(err){
      console.log(err);
    }finally{
      setdetails({user_name:"",email:"",message:""});
    }
  }
  return (
    <Transition>
      <div className="h-[700vh] w-screen relative">
        <div ref={ref} className="h-[600vh]">
          <div className="h-screen w-screen sticky top-0 flex justify-center z-1 bg-[#FFEBCA] items-center text-2xl md:text-7xl sm:text-center text-black">
            What am I looking for?
          </div>
          <motion.div
            style={{ rotateY: card1 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3 top-[100vh] md:left-1/2 md:top-[120vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-2xl font-semibold">Fellow Developers</span>
            <div className="text-sm md:text-lg">
              Always down to pair up,
              <br /> share tips, or just rant about bugs.
              <br /> If you&#39;re building something cool
              <br /> or weird, let&#39;s connect.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card2 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3 top-[220vh] md:left-1/12 md:top-[80vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              {" "}
              Creative Collaborators
            </span>
            <div className="text-sm md:text-lg">
              Designers, storytellers,
              <br /> digital dreamers <br /> I&#39;d love to team up <br /> and
              bring fresh ideas to life.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card3 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3 top-[300vh] md:left-[75%] md:top-[220vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Mentors & Guides
            </span>
            <div className="text-sm md:text-lg">
              If you&#39;ve walked the
              <br /> path before and love <br /> helping others grow <br />—
              I&#39;m all ears and
              <br /> eager to learn.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card3 }}
            className="w-fit h-64 lg:h-72 p-5 justify-start absolute left-1/3 top-[400vh] md:left-1/5 md:top-[200vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Opportunities & Roles
            </span>
            <div className="text-sm md:text-lg">
              Actively exploring new
              <br /> roles and meaningful work.
              <br /> If you&#39;re hiring or
              <br /> know someone who is,
              <br /> I&#39;d love to chat.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card4 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3  md:left-1/2 top-[480vh] md:top-[300vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Friendships in Tech
            </span>
            <div className="text-sm md:text-lg">
              Whether it&#39;s code,
              <br /> games, memes, or random <br /> late-night convos <br />—
              I&#39;m here for genuine <br /> connection.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card5 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3 md:left-1/8 md:top-[400vh] top-[540vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Convos & Coffee Chats
            </span>
            <div className="text-sm md:text-lg">
              I love swapping stories,
              <br /> ideas, and experiences.
              <br /> Hit me up if you&#39;re down for a <br />
              casual convo or virtual coffee.
            </div>
          </motion.div>
        </div>
        <div>
          <div className="h-screen mt-[-100vh]" />
          <div className="h-[100vh] w-screen bg-[#edfed1] sticky bottom-0  flex  justify-center rounded-t-[56px]">
            <div className="h-auto w-auto flex lg:flex-row md:flex-row flex-col mt-30 items-center justify-center lg:gap-50 md:gap-40">
            <div className="lg:text-7xl lg:tracking-widest  lg:text-left md:text-left md:text-6xl md:tracking-wider sm:text-5xl  text-3xl sm:text-center sm:tracking-normal  font-semibold text-black">
              Let's connect
            </div>

            {/* form element */}
            <form 
              onSubmit={handleSubmit}
              className="w-[150%]  max-w-xl bg-white/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl  flex flex-col gap-6"
              method="POST"
            >
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold text-lg">Name</label>
                <input
                  onChange={handleChange}
                  value = {details.user_name}
                  type="text"
                  name="user_name"
                  required
                  className="p-3 rounded-lg border-1 border-dashed text-black outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold text-lg">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value = {details.email}
                  required
                  className="p-3 rounded-lg border-1  border-dashed text-black outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold text-lg">
                  Message
                </label>
                <input
                  name="message"
                  onChange={handleChange}
                  value = {details.message}
                  required
                  className="p-3 rounded-lg border-1 border-dashed text-black outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white py-3 rounded-lg font-semibold hover:opacity-80 transition"
              >
                Send
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Hire;
