import React from 'react';
import { motion } from 'framer-motion';
import { BsFileEarmarkPdf } from 'react-icons/bs';

const Resume = () => {
  return (
    <motion.div
      className="capitalize mt-4 z-30"
      //   whileInView={{ x: [-100, 0], opacity: [0, 1], animationDelay: 3 }}
      //   transition={{ duration: 0.5, ease: 'easeInOut' }}
      //   className=" grid md:place-items-center  mt-28 md:mt-0 "
      initial={{
        x: 0,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <a
        href="/CV.pdf"
        target={'_blank'}
        className="flex rounded-md items-center justify-center  px-6 py-2 m-1 bg-slate-800 text-white"
      >
        CV
      </a>
    </motion.div>
  );
};

export default Resume;
