import React from "react";
import christina from "../../assets/images/christina.jpeg";
import krake from "../../assets/images/krake.jpeg";
import stroke_bar from "../../assets/SVGs/strokes-bars.svg";
import vision from "../../assets/SVGs/vision.svg";
import bulls_eye from "../../assets/SVGs/Bullseye.svg";
import { Link } from "react-scroll";

const GlobalReach = () => {
  return (
    <div className="w-[100%] bg-[#F7F7F7] h-max py-[40px]">
      <div className="grid gap-[20px] md:grid-cols-2 md:w-[87%] w-[95%] mx-[auto]">
        <div className="grid order-last md:order-first grid-cols-2">
          <div className="grid h-[280px] md:h-[100%] relative">
            <div className="text-white absolute right-[60px] font-bold bg-[#015FF1] w-max h-max px-[35px] py-[8px] text-[14px]">
              <p>
                100 <br /> Awards
              </p>
            </div>
            <img
              className="self-end h-[75%] absolute"
              src={christina}
              alt="christina"
            />
          </div>
          <div className="grid relative">
            <div className="text-white abolute self-end mx-[20px] font-bold bg-[#015FF1] w-max h-max px-[35px] py-[8px] text-[14px]">
              <p>
                3.5 m <br /> Clients
              </p>
            </div>
            <img
              className="self-start left-[-40px] absolute h-[75%]"
              src={krake}
              alt="krake"
            />
          </div>
        </div>
        <div className="grid md:ml-[50px] md:my-[20px] content-between">
          <div className="flex gap-[5px] text-[#015FF1] md:justify-start justify-center items-center">
            <img src={stroke_bar} alt="stroke_bar" />
            <p className="text-[22px]  font-semibold">About us</p>
          </div>
          <h2 className="font-semibold text-[34px] text-center md:text-left md:text-[36px] leading-tight	">
            Not Fast Decisions But <br /> Good{" "}
            <span className="text-[#015FF1]">Decisions</span> Fast
          </h2>
          <div className="flex gap-[10px]  text-[#015FF1]">
            <img src={bulls_eye} alt="bulls_eye" />
            <div className="mt-[15px]">
              <h2 className="text-[22px]  font-semibold">Our Goals</h2>
              <p className="text-black opacity-60">
                To be one of the best with customers all over the world
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] text-[#015FF1]">
            <img src={vision} alt="vision" />
            <div className="mt-[20px]">
              <h2 className="text-[22px]  font-semibold">Our Vision</h2>
              <p className="text-black opacity-60">
                Giving easy acess to shopping And Financing anywhere and
                Everywhere
              </p>
            </div>
          </div>
          <Link to="services" smooth={true} duration={500}>
          <button className="text-white place-self-center md:place-self-start bg-[#015FF1] rounded-[5px]  w-[140px] mt-[20px] h-[40px] shadow-btn transition-all duration-300 ease-in-out">
            More About Us
          </button>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;
