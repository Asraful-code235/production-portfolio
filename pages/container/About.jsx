import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../wrapper';
// import {urlFor,client} from "./"

const About = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center">
      <h2 className="capitalize font-bold  text-2xl">
        I am aware that <span className="text-[#313bac]">good business</span>{' '}
        <br />
        results from <span className="text-[#313bac]">good development</span>.
      </h2>

      <motion.div>
        <motion.div></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(About, 'w-full flex-col flex-1'),
  'about',
  'bg-[#ffffff]'
);
