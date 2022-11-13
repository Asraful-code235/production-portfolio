import React from 'react';
import { motion } from 'framer-motion';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const SocialMediaIcons = () => {
  return (
    <motion.div className="flex gap-4 justify-end md:justify-center opacity-70 md:opacity-100 items-center flex-col   p-2">
      <motion.div
        whileHover={{
          x: [0, 6],
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className="h-9 w-9 my-1 cursor-pointer  hover:bg-white border-none flex items-center justify-center
      transition-all  rounded-full"
      >
        <BsFacebook
          size={35}
          className="text-[#6b7688] hover:text-[#313bac]  border-none "
        />
      </motion.div>
      <motion.div
        whileHover={{
          x: [0, 6],
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className="h-9 w-9 my-1 hover:bg-white border-none cursor-pointer flex items-center justify-center
         transition-all  rounded-full"
      >
        <AiFillLinkedin
          size={35}
          className="text-[#6b7688] hover:text-[#313bac] border-none "
        />
      </motion.div>
      <motion.div
        whileHover={{
          x: [0, 6],
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className="h-9 w-9 my-1 hover:bg-white border-none  cursor-pointer items-center justify-center
         transition-all  rounded-full flex"
      >
        <AiFillTwitterCircle
          size={35}
          className="text-[#6b7688] hover:text-[#313bac] border-none "
        />
      </motion.div>
    </motion.div>
  );
};

export default SocialMediaIcons;
