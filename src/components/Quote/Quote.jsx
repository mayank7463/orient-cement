import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './Quote.css'
import ReadMoreButton from '../ReadMore/ReadMoreButton';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-prev`}
      style={{
        ...style,
        display: 'block',
        background: '#58595b',
        borderRadius: '50%',
        width: '40px', // Adjust width as needed
        height: '40px', // Adjust height as needed
      }}
      onClick={onClick}
    >
      Prev
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-next`}
      style={{
        ...style,
        display: 'block',
        background: '#58595b',
        borderRadius: '50%',
        width: '40px', // Adjust width as needed
        height: '40px', // Adjust height as needed
      }}
      onClick={onClick}
    >
      Next
    </button>
  );
};

const Quote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className='px-4 mt-8'>
      <div className='quote-section pt-2 '>
        <div className='carousel-container w-full lg:w-[70%] mx-auto'>
          <Slider {...settings}>
            <div className='p-4'>
            <h2 className='text-5xl text-center font-extrabold py-8 text-[#6d6e71] hero'><span className='text-[#ed1d24]'>Chairman’s</span> Message</h2>
              <div className='slide'>
                <img src="./Chair/CM.png" className='object-contain mx-auto' alt="Quote 1" />
              </div>
              <div className='flex justify-center mt-8 pb-4'>
                <Link to={"/chairman-messages"}><ReadMoreButton /></Link>
              </div>
            </div>
            <div className='p-4'>
            <h2 className='text-5xl text-center font-extrabold py-8 text-[#6d6e71] hero'><span className='text-[#ed1d24]'>Managing Director’s</span>  Message</h2>
              <div className='slide'>
                <img src="./Md/CM2.png" className='object-contain mx-auto' alt="Quote 2" />
              </div>
              <div className='flex justify-center mt-8 pb-4'>
                  <Link to={"/md-messages"}><ReadMoreButton /></Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Quote;
