// src/components/CardList.js
import React from 'react';
import { cardItems } from '../constants';
import Card from './Card';

const CardList = () => {
  return (

    <div className="container mx-auto sm:px-4 lg:px-20 overflow-x-hidden">
            <div className='my-10'>
    <h1 className='text-4xl text-center py-3 text-neutral-400 px-10 my-10 bg-transparent border-2 border-orange-700 w-fit m-auto backdrop-blur'>
      Our <span className='text-orange-600 '>Services</span>
    </h1>
    <p className='text-center text-neutral-400'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel?
    </p>
  </div>
      <div className="flex flex-wrap bg-gray-900">
        {cardItems.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 ">
            <Card title={item.title} icon={item.icon} description={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
