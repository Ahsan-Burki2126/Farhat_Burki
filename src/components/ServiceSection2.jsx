import React, { useEffect } from 'react';
import { cardItems } from "../constants";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceSection2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="relative border-b border-neutral-800 overflow-x-hidden p">
      <div className="text-center">
        <h1 className="text-4xl text-white border-b-2 w-fit py-6 font-extrabold m-auto border-orange-600">
          Our <span className="text-orange-600">Services</span>
        </h1>
      </div>
      <div className="flex flex-wrap my-8" data-aos="zoom-in">
        {cardItems.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 border border-orange-700 py-3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {item.icon} {/* Render the icon */}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-white font-bold">{item.title}</h5>
                <p className="text-md p-2 mb-20 text-neutral-300">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection2;
