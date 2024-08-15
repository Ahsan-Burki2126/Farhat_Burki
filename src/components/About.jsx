import React, { useEffect } from 'react'; 
import { whyUs } from '../constants';
import serviceImg from "../assets/images/serviceImg.jpg";
import meeting from "../assets/images/meeting.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import{House} from "lucide-react"



const About = () => {
  useEffect(() => {
    AOS.init({
      duration:1200,
    });
  }, []);
  return (
    <>
    <div className='px-8 overflow-x-hidden '>
    <h1 className="w-fit m-auto border-b-orange-600 border-b-2 py-4 text-4xl font-bold text-white">Our <span className='text-orange-600'>Vision</span></h1>
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-6 w-full py-8">
        <div className="text-base text-center md:text-start lg:text-start md:text-2xl text-white w-full md:w-3/5 " data-aos="fade-right">
          <p className='leading-normal tracking-normal'>
          At Farhat Burki, our vision is to be a trailblazer in the video editing industry, transforming raw footage into compelling visual narratives. We aim to empower creators and brands with innovative editing solutions that captivate audiences and drive engagement. By embracing the latest technology and creative techniques, we strive to exceed expectations and set new standards in video excellence.
          </p>
        </div>
        <div className="w-full md:w-2/5 h-full p-4 flex justify-center items-center" data-aos="fade-left">
          <img src={serviceImg} alt="Hero" className="w-full h-auto object-cover" />
        </div>
      </div>
      {/* why choose us section */}
      <div className='my-14'>
      <h1 className="w-fit m-auto border-b-orange-600 border-b-2 py-4 text-4xl font-bold text-white ">Why <span className='text-orange-600'>Us?</span></h1>
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        <div className='flex flex-col gap-12  w-full md:w-3/5' data-aos="zoom-in">
          {whyUs.map((item,index)=>(
            <>
            <div key={index} className='flex py-3 bg-gray-800 gap-3 border-2 border-orange-600  rounded-md'>
            <div className='border-r-2 border-orange-600 flex justify-center items-center px-5 text-white text-2xl'>
              {item.icon}
            </div>
            <div className='flex flex-col gap-2 justify-center'>
              <h1 className='font-bold text-2xl text-white p-0'>{item.heading}</h1>
              <p className='text-neutral-200'>{item.description}</p>
            </div>
            </div>
            </>
          ))}
        </div>
        <div className="w-full md:w-2/5 h-full p-4 flex justify-center items-center " data-aos="fade-left">
          <img src={meeting} alt="Hero" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div>

      </div>
      </div>
    </>
  );
};

export default About;
