import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../wrapper';
import { urlFor, client } from '../../client';
import Image from 'next/image';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <motion.div className="flex flex-1 mt-24  flex-col items-center justify-center">
      <h2 className="capitalize font-bold  text-2xl">
        I am aware that <span className="text-[#313bac]">good business</span>{' '}
        <br />
        results from <span className="text-[#313bac]">good development</span>.
      </h2>

      <motion.div className="mt-16">
        <motion.div className="flex flex-wrap  justify-center items-center">
          {abouts.map((item, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={item.title + index}
              className="min-[2000px]:w-[370px] min-[2000px]:mx-16 min-[2000px] my-2
               w-[190px] h-[350px] flex flex-col justify-start items-start 
              m-4
            
              "
            >
              <Image
                src={`${urlFor(item.imgUrl)}`}
                alt={item.title}
                width={250}
                height={170}
                className="object-contain  h-[170px]  rounded-md mb-3 "
              />
              <h2 className="font-bold text-xl text-slate-700 mb-2">
                {item.title}
              </h2>
              <p className="font-medium text-xs text-slate-400 ">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(About, 'w-full flex-col flex-1'),
  'about',
  'bg-[#ffffff]'
);
