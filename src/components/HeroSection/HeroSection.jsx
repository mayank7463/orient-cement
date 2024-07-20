import React from 'react';
import './HeroSection.css'
 // Import custom CSS for additional styling

const HeroSection = () => {
  return (
    <div className="hero relative w-full h-[90vh] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./Herosection/hero.webm"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-normal">STRONG ROOTS <br />
        RARING TO SOAR</h1>
        <div className='flex flex-col justify-end items-end absolute bottom-0 right-4'>
            <p className="text-xl font-medium">ORIENT CEMENT LIMITED</p>
            <p className="text-sm mb-6">Annual Report 2023-24</p>
        </div>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button> */}
      </div>
    
    </div>
  );
};

export default HeroSection;
