import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../wrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { client } from '../../client';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const contact = {
      _type: 'contact',
      email: formData.email,
      message: formData.message,
    };
    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <motion.div className="flex flex-1 mt-24 flex-col items-center justify-center">
      <h2 className="capitalize text-3xl text-center font-bold text-slate-800">
        Lets get in
        <span className="text-[#313bac] "> touch</span>
      </h2>
      <motion.div className="flex w-full md:w-[60%]  flex-wrap-reverse my-16 mx-8 items-center justify-evenly">
        <motion.div
          whileHover={{
            scale: [1, 1.02],
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="flex bg-slate-200 shadow min-w-[290px] my-4 p-1 rounded-md
         cursor-pointer transition-all items-center justify-start"
        >
          <Image
            src={'/email.png'}
            alt="emailicon"
            width={35}
            height={35}
            className="w-[40px] h-[40px] mx-[0.7rem]"
          />
          <a href="mailto:asrafulislamcodes@gmail.com">
            asrafulislamcodes@gmail.com
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: [1, 1.02],
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="flex bg-slate-200 shadow min-w-[290px] my-4 p-1 rounded-md
         cursor-pointer transition-all items-center justify-start"
        >
          <Image
            src={'/mobile.png'}
            alt="mobileicon"
            width={35}
            height={35}
            className="w-[40px] h-[40px] mx-[0.7rem]"
          />
          <a href="tel:+8801609546741">+8801609546741</a>
        </motion.div>
      </motion.div>
      {!isFormSubmitted ? (
        <div className="w-full md:w-[60%] flex flex-col my-4 mx-8">
          <div className=" cursor-pointer flex w-full my-3 rounded-md bg-slate-300 transition-all items-center justify-center">
            <input
              className="text-slate-600 w-full p-[.95rem] border-none outline-none"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              type="email"
            />
          </div>
          <div className="flex items-center justify-center">
            <textarea
              className="text-slate-600 w-full p-[.95rem] border-none h-[170px] outline-none"
              placeholder="your message"
              name="message"
              value={message}
              onChange={handleChangeInput}
              type="text"
            />
          </div>
          <button
            className="flex text-white capitalize bg-[#313bac] max-[768px]:my-4 max-[768px]:w-full px-8 py-4 border-none rounded-xl outline-none font-semibold cursor-pointer my-8 justify-center items-center "
            onClick={handleSubmit}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="font-bold text-slate-700 text-2xl">
            Thank you for getting in touch. I will contact you as soon as
            possible
          </h3>
        </div>
      )}
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'w-full flex flex-1'),
  'contact',
  'bg-slate-100'
);
