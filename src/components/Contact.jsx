import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-800 p-10 m-10 py-12 px-6 sm:px-12 lg:px-24 rounded-lg border-b-2 border-b-orange-600 overflow-x-hidden">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Get in <span className="text-orange-600">Touch</span>
      </h2>
      <form 
        className="max-w-xl mx-auto bg-gray-600 shadow-lg rounded-lg p-8" 
        data-aos="zoom-in" 
        action="https://formspree.io/f/xvgpqggp" 
        method="POST"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-orange-600 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name" // Added name attribute
            placeholder="Enter your name"
            className="w-full px-4 py-2 border text-orange-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-orange-600 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email" // Added name attribute
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-orange-600 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message" // Added name attribute
            rows="5"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

