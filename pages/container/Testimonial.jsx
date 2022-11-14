import React from 'react';
import { AppWrap, MotionWrap } from '../wrapper';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return <div>Testimonial</div>;
};

export default AppWrap(
  MotionWrap(Testimonial, 'w-full flex flex-1'),
  'testimonial',
  'inherit'
);
