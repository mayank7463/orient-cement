import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { Link } from 'react-router-dom';

function Community() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: false });
  const imageInView = useInView(imageRef, { once: false });

  return (
    <div className='bg-gray-50'>
      <div className='py-12 px-6 marginal my-10'>
        <motion.div 
          ref={textRef}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }} 
          transition={{ duration: 0.8 }}
        >
          <p className='text-5xl text-center font-extrabold py-8 text-[#6d6e71] hero'>
            <span className='text-[#ed1d24]'>Reaching new heights through</span> inclusive 
            <br /> community development
          </p>
        </motion.div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 items-center'>
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -50 }} 
            transition={{ duration: 0.8 }}
            className='w-full max-w-lg mx-auto'
          >
            <img 
              src="./Develope/dev-1.jpg" 
              alt="Orient" 
              className='rounded-lg shadow-lg'
            />
          </motion.div>
          <motion.div 
            ref={textRef}
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : 50 }} 
            transition={{ duration: 0.8 }}
            className='mx-auto'
          >
            <p className='text-gray-700 text-xl font-medium'>
              We strengthened our focus on rural
              development by upgrading infrastructure
              in nearby villages. Our initiatives include
              building roads, culverts and other tertiary
              infrastructure in Devapur and neighbouring
              areas, along with youth skill development
              programmes. Additionally, efforts also
              extend to social tribal development, agricultural training and support during
              emergencies. Our social responsibility
              efforts focus on empowering communities.
              We established a Skill Centre in Dharwad,
              Karnataka, to equip women with valuable
              skills. In addition to this, construction
              projects such as roads, borewells and
              community halls improved the village
              infrastructure in places such as Saaleguda
              and Tudumgudem, near Devapur.
              <div className='flex pt-6'>
                <Link to ={'/community-development'}><ReadMoreButton/></Link>
            </div>
            </p>
          
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Community;
