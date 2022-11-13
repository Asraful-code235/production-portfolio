import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const NavigationDots = ({ active }) => {
  return (
    <div className=" flex-col justify-center items-center p-4 hidden md:flex">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
        (list, index) => (
          <Link
            key={index}
            href={`#${list}`}
            className="w-[10px] h[10px] rounded-full bg-[#bebebe] m-2 hover:bg-[#313bac] "
            style={active === list ? { backgroundColor: '#313BAC' } : {}}
          >
            <div className="w-[10px] h[10px] rounded-full bg-red-500 m-2 hover:bg-[#313bac] "></div>
          </Link>
        )
      )}
    </div>
  );
};

export default NavigationDots;
