"use client";
import { useEffect } from "react";

const useDisableScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
};

export default useDisableScroll;
