import React from 'react'
import ReadMoreButton from '../ReadMore/ReadMoreButton'
import { Link } from 'react-router-dom'

function AboutUsHome() {
  return (
    <div className='marginal'>
          <div>
                <h2 className='text-5xl text-center font-extrabold py-8 text-[#6d6e71] hero'><span className='text-[#ed1d24]'>About </span> Us</h2>
                <p className='text-3xl font-bold text-[#6d6e71] py-4'>Accomplishing sustainable growth
                with stronger roots</p>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                      <div>
                            <p className='text-gray-700 text-2xl font-medium'>Orient Cement is a distinguished player in the
                            cement industry, renowned for its steadfast
                            commitment to excellence in operations and
                            customer satisfaction.With a rich legacy built on trust and reliability,
                            we provide industry-leading products
                            and solutions tailored to meet the diverse
                            construction needs of our customers.</p>
                      </div>
                      <div className='flex justify-center'>
                            <div>
                                    <p className='text-4xl font-bold text-[#ed1d24]'>Our vision</p>
                                    <p className='text-6xl font-bold py-4'>Build
                                    Sustainably</p>
                                    <p className='text-2xl font-bold inline-block bg-slate-500 p-1'>to</p>
                                    <p className='text-xl font-medium'>be a Valued
                                    Partner in
                                    Progress</p>
                            </div>
                      </div>
                </div>
                <div>
                     <p className='text-4xl font-bold text-[#ed1d24] py-4 '>Our values</p>      
                </div>
                <div className='grid lg:grid-cols-8 sm:grid-cols-1 gap-2 my-8 '>
                    <div className='flex flex-col items-center'>
                        <div className='w-[70%]'>
                              <img src="./value/v1.png" alt="" />
                        </div>
                        <p className='text-sm font-bold'>Collaboration</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[70%]'>
                              <img src="./value/v2.png" alt="" />
                        </div>
                        <p className='text-sm font-bold'>Humility to learn</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[70%]'>
                              <img src="./value/v3.png" alt="" />
                        </div>
                        <p className='text-sm font-bold'>Walk the Talk</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[70%]'>
                              <img src="./value/v4.png" alt="" />
                        </div>
                        <p className='text-sm font-bold'>Respect for all</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[70%]'>
                              <img src="./value/v5.png" alt="" />
                        </div>
                        <p className='text-sm font-bold'>Celebrate diversity</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[70%]'>
                              <img src="./value/v6.png" alt="" />
                        </div>
                        <p className='text-sm font-bold'>Passion to excel</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[70%]'>
                              <img src="./value/v7.png" alt="" />
                        </div>
                        <p className='text-sm font-bold'>Agility with speed</p>
                    </div>
                </div>
          </div>
          <div className='flex justify-center'>
               <Link to={'/about-us'}><ReadMoreButton/></Link>
          </div>
    </div>
  )
}

export default AboutUsHome
