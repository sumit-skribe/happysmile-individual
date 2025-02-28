import React from "react";
import { motion } from "framer-motion";

interface CollapsibleItemProps {
  isOpen: boolean;
  content: string[];
  className?: string;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({
  isOpen,
  content,
}) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`overflow-hidden absolute top-full left-0 w-full bg-white z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col items-end gap-8 p-4">
        {content.map((item, index) => (
          <p key={index} className="text-lg leading-7 font-semibold text-color">
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default CollapsibleItem;
