import React, { useState } from "react";
import Overview from "./Overview";
import Keywords from "./Keywords"

const Tabs = ({overview, id}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <div 
          className={`relative w-full h-[40px] border-b border-white text-center my-auto uppercase cursor-pointer ${checkActive(1, "active after:content-[''] after:absolute after:w-full after:h-[3px] after:bottom-[-1px] after:left-0 after:bg-red-900")} ${activeIndex === 1 ? 'text-red-900' : 'text-gray-500'}`} 
          onClick={() => handleClick(1)}
        >
          Overview
        </div>
        <div
          className={`relative w-full h-[40px] border-b border-white text-center my-auto uppercase cursor-pointer ${checkActive(2, "active after:content-[''] after:absolute after:w-full after:h-[3px] after:bottom-[-1px] after:left-0 after:bg-red-900")} ${activeIndex === 2 ? 'text-red-900' : 'text-gray-500'}`} 
          onClick={() => handleClick(2)}
        >
          Keywords
        </div>
      </div>
      <div>
        <div className={`w-full p-4 shadow-tabBox ${checkActive(1, "active")} ${activeIndex === 1 ? 'block' : 'hidden'}`}>
          <Overview overview={overview} />
        </div>
        <div className={`w-full p-4 shadow-tabBox ${checkActive(2, "active")} ${activeIndex === 2 ? 'block' : 'hidden'}`}>
         <Keywords id={id}/>
        </div>
      </div>
    </>
  );
};

export default Tabs;