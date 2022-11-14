import React from 'react';

import SocialMediaIcons from '../../components/navitems/SocialMediaIcons';
import NavigationDots from '../../components/navitems/NavigationDots';

const AppWrap = (Components, idname, className) =>
  function HOC() {
    return (
      <div id={idname} className={`w-full min-h-screen flex  ${className}`}>
        <SocialMediaIcons />
        <div
          className="flex items-center justify-center flex-1 w-full flex-col py-16 px-8
        max-[450px]:py-16 max-[450px]:px-8 
        
        "
        >
          <Components />
          <div className=" homepageDisables w-full px-8 py-0  flex-col justify-end items-end hidden md:flex">
            <p className="text-xs uppercase text-left text-slate-600 min-[2000px]:text-2xl">
              @2022 Asraful
            </p>
            <p className="text-xs uppercase text-left text-slate-600 min-[2000px]:text-2xl">
              All rights reserved
            </p>
          </div>
        </div>
        <NavigationDots active={idname} />
      </div>
    );
  };

export default AppWrap;
