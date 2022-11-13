import React from 'react';

import { AppWrap, MotionWrap } from '../wrapper';

const About = () => {
  return <div>About</div>;
};

export default AppWrap(
  MotionWrap(About, 'w-full flex-col flex-1'),
  'about',
  'bg-[#ffffff]'
);
