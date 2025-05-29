"use client";

import * as React from "react";
import { motion } from "framer-motion";

export default function ExpandHoverButton({ title, icon }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ width: 35, height: 35 }}
      whileHover={{ width: 180 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
      className="bg-primary flex items-center justify-center overflow-hidden relative"
      style={{ borderRadius: 32 }}
    >
      <motion.div
        className="absolute"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.8 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-white text-2xl">{icon}</span>
      </motion.div>

      <motion.div
        className="w-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
      >
        <span className="text-white text-sm mr-2">{icon}</span>
        <span className="text-white text-sm font-bold whitespace-nowrap">
          {title}
        </span>
      </motion.div>
    </motion.div>
  );
}
