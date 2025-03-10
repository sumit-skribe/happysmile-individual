import React from "react";
import { motion } from "framer-motion";

interface CollapsibleItemProps {
  isOpen: boolean;
  content: string;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({
  isOpen,
  content,
}) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden px-6"
    >
      {content}
    </motion.div>
  );
};

export default CollapsibleItem;
