import React, { useEffect } from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Recentwork() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div>
        <h1 className="w-fit m-auto border-b-orange-600 border-b-2 py-4 text-4xl font-bold text-white">
          Recent <span className='text-orange-600'>Work</span>
        </h1>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 border-2 border-orange-600" data-aos="zoom-in">
              <video className="w-full h-auto" autoPlay muted loop>
                <source src={video6} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-span-1 border-2 border-orange-600" data-aos="zoom-in">
              <video className="w-full h-auto" autoPlay muted loop>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-span-1 border-2 border-orange-600" data-aos="fade-down-left">
              <video className="w-full h-auto" autoPlay muted loop>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-span-1 border-2 border-orange-600" data-aos="fade-up-right">
              <video className="w-full h-auto" autoPlay muted loop>
                <source src={video4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-span-1 border-2 border-orange-600" data-aos="zoom-in">
              <video className="w-full h-auto" autoPlay muted loop>
                <source src={video5} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-span-1 border-2 border-orange-600" data-aos="fade-up-left">
              <video className="w-full h-auto" autoPlay muted loop>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recentwork;

