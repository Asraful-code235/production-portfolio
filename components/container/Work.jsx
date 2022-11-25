import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../components/wrapper';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = "*[_type =='works']";

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'all') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <motion.div className="flex flex-1 mt-16 flex-col justify-start items-center">
      <h1 className="text-3xl font-bold capitalize">
        Some of my <span className="text-[#313bac]">projects</span>
      </h1>
      <div className="flex gap-4 mt-8 flex-wrap items-center justify-center">
        {['ui/ux', 'nextjs', 'reactjs', 'all'].map((data, index) => (
          <div
            onClick={() => handleWorkFilter(data)}
            className={`transition-colors py-2 cursor-pointer tracking-wide hover:bg-[#313bac]  hover:text-white px-3 text-sm text-slate-700 capitalize rounded-md 
            ${
              activeFilter === data
                ? 'bg-[#313bac] !text-white border'
                : ' border '
            }
            `}
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5, type: 'tween' }}
        className="mt-6 flex flex-wrap gap-4 items-center justify-center "
      >
        {filterWork.map((work, index) => (
          <motion.div
            whileHover={{
              scale: [1, 1.05],
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            key={index}
            className=" flex flex-col justify-between rounded-md w-[320px] p-4 m-4 h-[400px] min-[2000px]:w-[470px] "
          >
            <div className="flex flex-col justify-between gap-2 ">
              <Image
                src={`${urlFor(work.imgUrl)}`}
                alt={work.title}
                width={250}
                height={170}
                className="w-full h-[230px]"
              />
              <motion.div className="">
                <h4 className="text-lg  font-semibold text-slate-700">
                  {work.title}
                </h4>
                <p className="text-sm text-slate-500">{work.description}</p>
              </motion.div>
            </div>
            <div className="flex justify-between  items-center ">
              <button className="py-2 bg-slate-700 text-white px-6 rounded-sm">
                <a href={`${work.projectLink}`} target="_blank">
                  Live
                </a>
              </button>
              <button className="py-2 bg-[#313bac] text-white px-6 rounded-sm">
                <a href={`${work.codeLink}`} target="_blank">
                  Code
                </a>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'w-full flex-col flex-1'),
  'work',
  'bg-inherit'
);
