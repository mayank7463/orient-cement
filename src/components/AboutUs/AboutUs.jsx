import React from 'react'
import OurValues from '../OurValues/OurValues'

function AboutUs() {
  return (
    <div className='marginal'>
         <h2 className='text-3xl text-center font-extrabold py-8 text-[#6d6e71] hero'><span className='text-[#ed1d24]'>About</span> us</h2>
         <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
             <div>
                <p className='text-2xl font-bold text-[#ed1d24] pb-4'>Accomplishing sustainable growth
                with stronger roots</p>
                <p className='text-xl font-medium'>Orient Cement is a distinguished player in the
                cement industry, renowned for its steadfast
                commitment to excellence in operations and
                customer satisfaction.With a rich legacy built on trust and reliability,
                we provide industry-leading products
                and solutions tailored to meet the diverse
                construction needs of our customers.</p>
            </div>
            <div className='flex justify-center '>
                 <div>
                      <p className='text-2xl font-bold text-[#ed1d24]'>Our vision</p>
                      <p className='text-5xl font-bold'>Build
                      Sustainably</p>
                      <p className='bg-slate-500 p-1 font-bold text-3xl inline-block'>to</p>
                      <p className='text-2xl font-medium'>be a Valued
                        Partner in
                        Progress</p>
                 </div>
            </div>   
         </div>
         <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <div className="relative ">
                <div className="absolute top-[10%] left-[30%] w-[16%] flex flex-col items-center">
                  <img src="./value/v1.png" alt="Image 1" className="w-full" />
                  <p className="mt-2 text-center">Text 1</p>
                </div>
                <div className="absolute top-[10%] left-[60%] w-[16%] flex flex-col items-center">
                  <img src="./value/v2.png" alt="Image 2" className="w-full" />
                  <p className="mt-2 text-center">Text 2</p>
                </div>
                <div className="absolute top-[40%] left-[10%] w-[16%] flex flex-col items-center">
                  <img src="./value/v3.png" alt="Image 3" className="w-full" />
                  <p className="mt-2 text-center">Text 3</p>
                </div>
                <div className="absolute top-[40%] left-[40%] w-[16%] flex flex-col items-center">
                  <img src="./value/v4.png" alt="Image 4" className="w-full" />
                  <p className="mt-2 text-center">Text 4</p>
                </div>
                <div className="absolute top-[40%] left-[75%] w-[16%] flex flex-col items-center">
                  <img src="./value/v5.png" alt="Image 5" className="w-full" />
                  <p className="mt-2 text-center">Text 5</p>
                </div>
                <div className="absolute top-[70%] left-[30%] w-[16%] flex flex-col items-center">
                  <img src="./value/v6.png" alt="Image 6" className="w-full" />
                  <p className="mt-2 text-center">Text 6</p>
                </div>
                <div className="absolute top-[70%] left-[60%] w-[16%] flex flex-col items-center">
                  <img src="./value/v7.png" alt="Image 7" className="w-full" />
                  <p className="mt-2 text-center">Text 7</p>
                </div>
              </div>
              <div className=''>
                  <div className=' bg-slate-400  p-4'>
                        <img src="./value/maaap.png" alt="" />
                    </div>
              </div>
         </div>
    </div>
  )
}

export default AboutUs
