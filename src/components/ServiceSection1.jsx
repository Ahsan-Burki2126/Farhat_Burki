import React, { useEffect } from 'react';
import serviceImg from '../assets/images/serviceImg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './Button';

const ServiceSection1 = ({ title = "Your Videos in Expert Hands", description = "Skilled video editor with experience delivering high-quality, engaging content for over 100 clients. Proficient in creating visually compelling videos that captivate audiences" }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className='py-16 overflow-x-hidden'> 
      <div className="flex flex-wrap justify-between items-start gap-4 w-full p-4">
        <div className="w-full md:w-2/5 h-full p-4 flex justify-center items-center flex-col flex-1" data-aos="zoom-in">
          <h1 className="text-5xl text-center lg:text-left lg:text-7xl font-bold mb-2 py-6 text-white">
            {title.slice(0,5)} <span className='text-orange-600'>{title.slice(5,11)}</span> {title.slice(11,21)} <span className='text-orange-600'>{title.slice(21)}</span>
          </h1>

          <p className='leading-tight text-white text-center lg:text-start'>
            {description ? (
              <>
                {description.slice(0,8)}
                <span className='text-orange-600'>{description.slice(8,13)}</span>
                {description.slice(13,82)}
                <span className='text-orange-600'>{description.slice(82,91)}</span>
                {description.slice(91)}
              </>
            ) : null}
          </p>

          <Button />
        </div>
        <div className="w-full md:w-2/5 h-full">
          <img src={serviceImg} alt="Expert video services" className="w-full h-auto object-cover" data-aos="zoom-in"/>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection1;

