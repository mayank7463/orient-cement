import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { Link } from 'react-router-dom';

export default function OurBrands() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } },
    };

    return (
        <div className='marginal'>
            <div className='pl-14 my-10' ref={ref}>
                <motion.h2
                    className='text-5xl text-center font-extrabold py-8 text-[#6d6e71] hero'
                    initial='hidden'
                    animate={controls}
                    variants={headingVariants}
                >
                    <span className='text-[#ed1d24]'>
                        Our brands are more than <br />what
                    </span>
                    meets the eye
                </motion.h2>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <motion.div
                        initial='hidden'
                        animate={controls}
                        variants={contentVariants}
                    >
                        <p className='text-gray-700 text-2xl font-medium'>
                            Our brand portfolio offers a world of choices to our valued customers. By expanding our product portfolio to meet clearly identified needs of the informed customers, we are not only reaching a larger audience, but also tailoring solutions to meet the unique requirements of the targeted segments.
                        </p>
                        <div className='flex py-8'>
                             <Link to={'/our-brands'}><ReadMoreButton/></Link>
                        </div>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                            {/* <div>
                                <p className='text-[#ed1d24] font-bold py-4'>Birla.A1 Dolphin</p>
                                <p className='text-sm'>
                                    The launch of ‘Birla.A1 Dolphin All Weather Cement’ has added significant value to our product portfolio. The product addresses diverse weather conditions, not just offering surface-level protection, but also serves as an integral waterproofing solution.
                                </p>
                            </div> */}
                            {/* <div>
                                <p className='text-[#ed1d24] font-bold py-4'>Birla.A1 OrientGreen</p>
                                <p className='text-sm'>
                                    OrientGreen cement is engineered by grinding superior-strength clinker with a processed mineral admixture containing high-reactive silica, which offers long-term strength gain. With low carbon footprint, OrientGreen Cement is rust-resistant, needs less water and delivers superior strength. Overall, it is truly made in a responsible and sustainable manner.
                                </p>
                            </div> */}
                        </div>
                    </motion.div>
                    <motion.div
                        className='flex lg:flex-row sm:flex-col gap-10'
                        initial='hidden'
                        animate={controls}
                        variants={imageVariants}
                    >
                        <div className='w-[40%]'>
                            <img src='./Brand/oc1.jpg' alt='Brand Image 1' />
                        </div>
                        <div className='w-[40%]'>
                            <img src='./Brand/oc2.jpg' alt='Brand Image 2' />
                        </div>
                    </motion.div>
                </div>
            </div>
            
        </div>
    );
}
