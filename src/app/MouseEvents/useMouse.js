"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";

function useMouse() {
  const [mouse, setmouse] = useState({ x: 0, y: 0 });
  const throttle = useRef(null);
  const updateMouse = (e) => {
    if (throttle.current === null) {
      setmouse({ x: e.clientX, y: e.clientY });
    }

    throttle.current = setTimeout(() => {
      throttle.current = null;
    }, 100);
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMouse);
    return () => {
      window.removeEventListener("mousemove", updateMouse);
      if (throttle.current) {
        clearTimeout(throttle.current);
      }
    };
  });
  return mouse;
}

export default useMouse;
