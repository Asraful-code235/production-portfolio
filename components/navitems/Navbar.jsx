import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="sticky p-5  z-40 backdrop-sepia-0 bg-slate-100/80 top-0 ">
      <div className="flex items-center max-w-7xl mx-auto justify-between">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          <h1 className="text-2xl font-bold capitalize">Asraful Islam</h1>
        </motion.div>
        <motion.ul
          initial={{
            // x: -500,
            opacity: 0,
            // scale: 0.5,
          }}
          animate={{
            // x: 0,
            opacity: 1,
            // scale: 1,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className=" items-center justify-center hidden md:flex"
        >
          {[
            'home',
            'about',
            'work',
            'skills',

            // 'testimonial',

            'contact',
          ].map((list, index) => (
            <li className="mx-2 text-slate-600" key={index}>
              <Link className="capitalize" href={`#${list}`}>
                {list}
              </Link>
            </li>
          ))}
        </motion.ul>
        <div className="flex gap-4 items-center justify-between md:invisible rounded-full p-2 ">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex gap-2 items-center justify-center "
          >
            <motion.div
              transition={{ duration: 0.1, ease: 'easeOut' }}
              className=" my-1 cursor-pointer  hover:bg-white border-none flex items-center justify-center
      transition-all  rounded-full"
            >
              <a
                href="https://www.facebook.com/asraful.Islam.shoag"
                target={'_blank'}
              >
                <BsFacebook
                  size={25}
                  className="text-[#6b7688] hover:text-[#313bac]  border-none "
                />
              </a>
            </motion.div>
            <motion.div
              transition={{ duration: 0.1, ease: 'easeOut' }}
              className=" my-1 hover:bg-white border-none cursor-pointer flex items-center justify-center
         transition-all  rounded-full"
            >
              <a
                href="linkedin.com/in/asraful-islam-389a40256"
                target={'_blank'}
              >
                <AiFillLinkedin
                  size={25}
                  className="text-[#6b7688] hover:text-[#313bac] border-none "
                />
              </a>
            </motion.div>
            <motion.div
              transition={{ duration: 0.1, ease: 'easeOut' }}
              className=" my-1 hover:bg-white border-none  cursor-pointer items-center justify-center
         transition-all rounf'
           rounded-full flex"
            >
              <a href="https://twitter.com/AsrafulCodes" target={'_blank'}>
                <AiFillTwitterCircle
                  size={25}
                  className="text-[#6b7688] rounded-full hover:text-[#313bac] border-none "
                />
              </a>
            </motion.div>
          </motion.div>
          <HiBars3BottomRight
            onClick={() => setToggle(true)}
            size={25}
            className="relative flex   cursor-pointer "
          />
          {toggle && (
            <motion.div
              initial={{
                x: 500,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              className="fixed  right-0 h-screen  top-0 w-[60%]  bg-white z-50 flex flex-col items-start justify-between "
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <HiXMark
                onClick={() => setToggle(false)}
                className="w-[35px] h-[35px] p-1 m-2 cursor-pointer border border-red-50 rounded-full bg-slate-200 text-[#3c1aa3] ml-1"
              />
              <ul className="flex-1  w-full p-16">
                {[
                  'home',
                  'about',
                  'work',
                  'skills',
                  // 'testimonial',
                  'contact',
                ].map((list, index) => (
                  <motion.li
                    initial={{
                      scale: 1,
                      opacity: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="mx-2 text-slate-600 p-4 "
                    key={index}
                  >
                    <Link
                      onClick={() => setToggle(false)}
                      className="capitalize hover:text-[#3c1aa3]"
                      href={`#${list}`}
                    >
                      {list}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
