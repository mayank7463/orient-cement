import React from 'react';
// Assuming you have your Tailwind CSS imported in your project

function OurValues() {
  return (
    <div className="relative w-[50vw] h-[80vh]">
      <div className="absolute top-[10%] left-[60%] w-[16%] flex flex-col items-center">
        <img src="./value/v1.png" alt="Image 1" className="w-full" />
        <p className="mt-2 text-center">Text 1</p>
      </div>
      <div className="absolute top-[10%] left-[80%] w-[16%] flex flex-col items-center">
        <img src="./value/v2.png" alt="Image 2" className="w-full" />
        <p className="mt-2 text-center">Text 2</p>
      </div>
      <div className="absolute top-[40%] left-[45%] w-[16%] flex flex-col items-center">
        <img src="./value/v3.png" alt="Image 3" className="w-full" />
        <p className="mt-2 text-center">Text 3</p>
      </div>
      <div className="absolute top-[40%] left-[70%] w-[16%] flex flex-col items-center">
        <img src="./value/v4.png" alt="Image 4" className="w-full" />
        <p className="mt-2 text-center">Text 4</p>
      </div>
      <div className="absolute top-[40%] left-[95%] w-[16%] flex flex-col items-center">
        <img src="./value/v5.png" alt="Image 5" className="w-full" />
        <p className="mt-2 text-center">Text 5</p>
      </div>
      <div className="absolute top-[70%] left-[55%] w-[16%] flex flex-col items-center">
        <img src="./value/v6.png" alt="Image 6" className="w-full" />
        <p className="mt-2 text-center">Text 6</p>
      </div>
      <div className="absolute top-[70%] left-[85%] w-[16%] flex flex-col items-center">
        <img src="./value/v7.png" alt="Image 7" className="w-full" />
        <p className="mt-2 text-center">Text 7</p>
      </div>
    </div>
  );
}

export default OurValues;
