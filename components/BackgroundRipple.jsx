import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BackgroundRipple = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center z-10 border border-red-400 "
    >
      <div className="absolute border border-[#313bac] rounded-full h-[200px] w-[200px] mt-35 animate-ping"></div>
      <div className="absolute border border-slate-300 rounded-full h-[300px] w-[300px] mt-35 "></div>
      <div className="absolute border opacity-20 animate-pulse border-indigo-500 rounded-full h-[400px] w-[400px]  mt-35"></div>
    </motion.div>
  );
};

export default BackgroundRipple;
