"use client";
import { useState, useEffect } from "react";

const getBreakpoint = () => {
  if (window.innerWidth >= 1024) return "lg";
  if (window.innerWidth >= 640) return "md";
  if (window.innerWidth >= 0) return "sm";
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
