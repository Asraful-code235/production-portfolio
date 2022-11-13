import React from 'react';
import { AppWrap } from '../wrapper';
import { motion } from 'framer-motion';
import BackgroundRipple from '../../components/BackgroundRipple';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
const HomePage = () => {
  const [text, count] = useTypewriter({
    words: [' Web Developer', 'UI/UX Designer', 'Freelancer'],
    loop: 0,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      className="snap-center min-h-screen  flex flex-col space-x-2 items-center justify-center
    text-center 
    "
    >
      <BackgroundRipple />
      <motion.img
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={'/profile.jpg'}
        alt="profile"
        // width={350}
        // height={350}
        className="rounded-full h-64 w-64 -mt-32 object-cover relative  border border-red-500 "
      />
      <h1>
        <span className="text-slate-800 font-semibold text-xl">
          👋,I'm Asraful a <span className="text-[#313bac]">{text}</span>
        </span>
      </h1>
    </motion.div>
  );
};

export default AppWrap(HomePage, 'home');