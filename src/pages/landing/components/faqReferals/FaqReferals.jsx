import React, { useState } from 'react';
import stroke_bars from '../../assets/SVGs/strokes-bars.svg';
import CustomCollapse, { questionsAndAnswers } from './CustomCollapse';
import ContactModal from './ContactModal';

const FaqReferals = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleCollapseChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="bg-[#F7F7F7] h-max py-[50px] mt-[80px]">
      <div className="grid content-evenly ">
        <img
          className="justify-self-center"
          src={stroke_bars}
          alt="stroke_bars"
        />
        <div className="grid my-[10px] md:grid-cols-2 mx-[auto] w-[90%] md:w-[75%] gap-5 md:gap-16">
          <div className="grid content-evenly py-[20px] px-[10px] bg-[#ECF3FB] text-center ">
            <h3 className="text-[45px] font-bold">FAQs</h3>
            <div className="text-[#0B1035] text-[16px] opacity-75 font-bold">
              {questionsAndAnswers.map((item, index) => (
                <CustomCollapse
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  activeKey={activeKey === index ? '1' : null}
                  onChange={() => handleCollapseChange(index)}
                />
              ))}
            </div>
            <div className="mt-3">
              <p className="text-[#OB1035] opacity-75 text-[18px] font-bold">
                Have More Questions?
              </p>
             
              <ContactModal />
            </div>
          </div>
          <div className="grid content-evenly bg-[#ECF3FB] px-[10px] text-center h-[400px]">
            <h3 className="text-[45px] font-bold">Referals</h3>
            <p className="text-[#OB1035] opacity-75 text-[16px] font-bold">
              Sign Up Or Sign In as a customer or a Vendor to invite your
              friends and earn rewards
            </p>
            <button className="bg-[#015FF1]	 justify-self-center text-white px-[20px] rounded w-max font-semibold  h-[40px] shadow-btn transition-all duration-300 ease-in-out">
              Invite Friends
            </button>
          </div>
        </div>
        <img
          className="justify-self-center"
          src={stroke_bars}
          alt="stroke_bars"
        />
      </div>
    </div>
  );
};

export default FaqReferals;
