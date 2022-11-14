import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../wrapper';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = "*[_type=='experiences']";
    const skillsQuery = "*[_type=='skills']";

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <motion.div className="flex mt-24 flex-col w-full  flex-1 justify-center items-center">
      <h2 className="text-3xl font-bold text-slate-800">
        Skills & Experiences
      </h2>
      <motion.div className="flex items-center justify-center mt-24">
        <motion.div className="flex flex-wrap items-center justify-center">
          {skills.map((skill) => (
            <motion.div
              whileHover={{
                scale: [1, 1.05],
                type: 'tween',
              }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
              className="flex flex-col items-center justify-center transition-all m-4"
            >
              <div className="flex items-center justify-center  max-[450px]:w-16 max-[450px]:h-16  w-24 h-24 rounded-full bg-[#fef4f5] min-[2000px]:w-40 min-[2000px]:h-40 min-[2000px]:my-4 min-[2000px]:mx-8">
                <Image
                  width={90}
                  height={90}
                  className="w-[50%] h[50%]  "
                  src={`${urlFor(skill.icon)}`}
                  alt={skill.name}
                />
              </div>
              <p className="font-medium mt-2 text-slate-700 min-[2000px]:mt-4">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'w-full flex flex-1'),
  'skills',
  'bg-[#ffffff]'
);
