import React from 'react';
import stroke_bar from '../../assets/SVGs/strokes-bars.svg';
import payment_option from '../../assets/SVGs/payment_option.svg';
import rates from '../../assets/SVGs/rates.svg';
import interest_fee from '../../assets/SVGs/interest_fee.svg';
import enhanced_shopping from '../../assets/SVGs/enhanced_shopping.svg';
import SimpleSlider from './SimpleSlider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faShippingFast } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = () => {
  return (
    <div>
      <div className="md:relative grid md:mb-[220px]">
        <div className="overflow-x-hidden">
          <SimpleSlider />
        </div>

        <div className="absolute md:top-[150px] rounded opacity-75 bg-white left-[20px] top-[300px] md:left-[13%] p-4 ">
          <span className="text-[#015FF1] flex gap-[5px] justify-center items-center">
            <img src={stroke_bar} alt="stroke_bar" />
            <p>Welcome To BNPL</p>
          </span>
          <h3 className="font-bold text-4xl my-[5px]">Buy Now</h3>
          <h3 className="font-bold text-4xl text-[#015FF1]">Pay Later</h3>
          <Link to="/signup">
            <button className="uppercase mt-[15px] w-[145px] text-white bg-[#015FF1] rounded-[100vw] h-[40px] shadow-btn transition-all duration-300 ease-in-out">
              Enroll now
            </button>
          </Link>
        </div>
        <div className="md:flex grid grid-cols-2  mt-[20px] md:mt-0 mx-auto gap-[20px] md:justify-between w-[90%] md:w-[85%] md:absolute md:left-1/2 transform md:-translate-x-1/2 md:bottom-[-110px] ">
          <div className="flex order-1 flex-col cursor-pointer rounded justify-center  items-center h-[150px] w-[100%] md:w-[150px] text-center bg-white font-semibold | transform-scale shaow-custom ">
            <img src={payment_option} alt="payment_option" />
            <p>
              Flexible Payment <br /> Options
            </p>
          </div>
          <div className="flex order-3 md:order-2 flex-col cursor-pointer rounded justify-center items-center h-[150px] w-[100%] md:w-[150px] text-center bg-[#015FF1] text-white font-semibold | transform-scale shaow-custom">
            <img src={interest_fee} alt="interest_fee" />
            <p>
              Interest Free <br /> Periods
            </p>
          </div>
          <div className="flex order-4 md:order-3 flex-col cursor-pointer rounded justify-center items-center h-[150px] w-[100%] md:w-[150px] text-center  bg-white font-semibold | transform-scale shaow-custom">
            <img src={rates} alt="rates" />{' '}
            <p>
              Instant Approval <br /> Rates
            </p>
          </div>
          <div className="flex order-3 md:order-4 flex-col cursor-pointer rounded justify-center items-center h-[150px] w-[100%] md:w-[150px] text-center bg-[#015FF1] text-white font-semibold | transform-scale shaow-custom">
            <Link to="/market-place">
              <img src={enhanced_shopping} alt="enhanced_shopping" />
              <p>Market Place</p>
            </Link>
          </div>
          <div className="flex  order-6 md:order-5 flex-col cursor-pointer rounded justify-center items-center h-[150px] w-[100%] md:w-[150px] text-center  bg-white font-semibold | transform-scale shaow-custom">
            <Link to="/shipping">
              <FontAwesomeIcon className="text-[42px]" icon={faShippingFast} />
              <p>Shipping</p>
            </Link>
          </div>
          <div className="flex order-6 flex-col cursor-pointer rounded justify-center items-center h-[150px] w-[100%] md:w-[150px] text-center bg-[#015FF1] text-white font-semibold | transform-scale shaow-custom">
            <Link to="/printing">
              <FontAwesomeIcon className="text-[42px]" icon={faPrint} />
              <p>Printing</p>
            </Link>
          </div>
        </div>
        <div className="md:absolute mx-auto my-[20px]  md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-[-200px]">
          <Link to="/signup">
            <button className="uppercase md:mt-[15px] w-[145px] text-white bg-[#015FF1] rounded-[8px] h-[40px] shadow-btn transition-all duration-300 ease-in-out">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
