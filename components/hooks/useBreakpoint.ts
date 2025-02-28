"use client";
import { useState, useEffect } from "react";

const getBreakpoint = (): "lg" | "md" | "sm" | undefined => {
  if (typeof window === "undefined") return undefined;
  if (window.innerWidth >= 1024) return "lg";
  if (window.innerWidth >= 640) return "md";
  return "sm";
};

const useBreakpoint = (): "lg" | "md" | "sm" | undefined => {
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
