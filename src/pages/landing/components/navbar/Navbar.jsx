import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDoorOpen,
  faPhoneAlt,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import business_icon from "../../assets/SVGs/business.svg";
import salemLogo from '../../assets/brand/logo.svg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-white">
      <div className="md:flex hidden mx-[auto] justify-between w-[90%] md:w-[70%] py-[10px] mt-[5px]">
        <div className="flex font-bold gap-[5px] items-center justify-center">
          <img
            className="cursor-pointer"
            src={business_icon}
            alt="business_icon"
          />
          <p>Business</p>
        </div>
        <div className="flex gap-[20px]">
          <span className="flex text-[#015FF1] gap-[5px] items-center justify-center">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>1-800-356-6522</p>
          </span>
          <div className="flex gap-[5px] items-center justify-center">
            <FontAwesomeIcon icon={faDoorOpen} />
            <p>Sign up/Login</p>
          </div>
        </div>
      </div>
      <hr className="md:w-[70%] w-[90%] mx-[auto]" />
      <div className="flex justify-between md:w-[70%] w-[90%] mx-[auto] py-[10px]">
        <div className="flex items-center justify-center gap-[5px]">
          <NavLink className="w-[45px]" to="/">
            <img
              className="cursor-pointer"
              src={salemLogo}
              alt="Salem logo"
            />
          </NavLink>
        </div>
        <div
          className={`${
            toggle ? "fixed md:hidden inset-0 bg-black opacity-50 z-[99]" : ""
          }`}
          onClick={handleToggle}
        ></div>
        <ul
          className={`nav-bar-items grid md:flex text-center items-center justify-center gap-[20px] font-semibold py-[20px] absolute md:relative md:h-[50px] md:w-[100%]  transition-all duration-500 ease-in-out ${
            toggle
              ? "w-[300px] h-[300px] bg-white right-0 mx-auto z-[999] md:top-[0px] top-[80px] "
              : "w-[0] h-[300px] hidden"
          }`}
        >
          <li>
            <Link onClick={handleToggle} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              to="about"
              smooth={true}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              to="services"
              smooth={true}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link onClick={handleToggle} to="faqs" smooth={true} duration={500}>
              FAQs
            </Link>
          </li>
          <li>
            <Link onClick={handleToggle} to="faqs" smooth={true} duration={500}>
              Refer a Friend
            </Link>
          </li>
          <div className="self-center md:hidden">
            <NavLink to="/login">
              <button className="bg-[#015FF1] text-white rounded w-[95px] uppercase h-[34px] hover:bg-transparent hover:border border-[#015FF1] hover:text-black transition-background duration-150">
                Sign in
              </button>
            </NavLink>
          </div>
        </ul>
        <div className="self-center md:block hidden">
          <NavLink to="/login">
            <button
              onClick={() => {
                handleToggle();
              }}
              className="bg-[#015FF1] text-white rounded w-[95px] uppercase h-[34px] shadow-btn transition-all ease-in-out duration-500"
            >
              Sign in
            </button>
          </NavLink>
        </div>
        <button
          onClick={handleToggle}
          className="z-[999] bg-white rounded-md h-[50px] w-[50px] md:hidden "
        >
          {toggle ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
