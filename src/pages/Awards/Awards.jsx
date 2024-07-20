import React from 'react'

function Awards() {
  return (
    <div className='marginal'>
      <div className='my-8' >
        <div>
             <p className='text-5xl font-bold text-[#6d6e71] my-4 hero'><span className='text-[#ed1d24]'>Awards and </span>accolades</p>
             <p className='text-[#6d6e71] text-2xl py-4'>Our unparalleled expertise and unmatched excellence have
                    enabled us to win impressive awards this year. In March, the
                    Company was certified as a ‘Great Place to Work’ for the
                    fifth consecutive year (Top 50). Additionally, it is India’s best
                    workplaces in cement and building materials, among the Top
                    25 Best Workplaces in Manufacturing and Top 50 for fostering a
                    culture of innovation. These awards and recognition showcase our
                    commitment to a ‘High-Trust, High-Performance Culture’.</p>
             <p className='py-4'>We also received the winner’s award for POSH Training Excellence, demonstrating our
                dedication to creating a safe workplace. Transcending the set norms, these awards recognise
                our achievements in sustainability, safety and innovation throughout FY24.</p>
             <p className='py-4'>The prominent awards earned during FY24 are listed below</p>
        </div>
        <div className='my-4'>
               <div>
                     <img src="./Awards/awards-1.jpg" alt="" />
               </div>
               <div className='w-[98%] mx-auto'>
                     <img src="./Awards/awards-2.jpg" alt="" />
               </div>
               <div>
                     <img src="./Awards/awards-3.jpg" alt="" />
               </div>
        </div>
        </div>
    </div>
  )
}

export default Awards
