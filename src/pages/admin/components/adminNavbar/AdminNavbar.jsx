import React from "react";
import logo from "../../assets/svgs/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  AuditOutlined,
  HomeOutlined,
  LogoutOutlined,
  RetweetOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UuerOutlined from "../../assets/images/check_balance.jpeg";
import { Popover } from "antd";

const AdminNavbar = ({ handleSideMenuToggle, isCollapsed }) => {
  let userProfile = sessionStorage.getItem("user");
  userProfile = JSON.parse(userProfile);
  const content = (
    <div className="p-[10px]">
      <div className="flex gap-[5px] justify-center items-center">
        <img className="h-[40px] w-[40px]" src={UuerOutlined} alt="" />
        <div className="font-semibold">
          <p className="text-[18px]">Hi, {userProfile.first_name}</p>
          <p>{userProfile.email}</p>
        </div>
      </div>
      <hr className="my-[10px]" />
      <div className="grid gap-[10px]">
        <div className="flex gap-[5px] opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 cursor-pointer">
          <AuditOutlined />
          <p className="">Dashboard</p>
        </div>
        <div className="flex gap-[5px] transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 cursor-pointer">
          <HomeOutlined />
          <p>Home</p>
        </div>
        <div className="flex gap-[5px] transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 cursor-pointer">
          <UserOutlined />
          <p>Profile</p>
        </div>
        <div className="flex gap-[5px] transition-all duration-300 ease-in-out transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 cursor-pointer">
          <RetweetOutlined />
          <p>Update Credentials</p>
        </div>
      </div>

      <hr className="my-[10px]" />
      <div className="flex gap-[5px] cursor-pointer">
        <LogoutOutlined />
        <p>Logout</p>
      </div>
    </div>
  );
  return (
    <nav className="grid p-[10px] gap-[10px] place-content-center grid-cols-3 sm:grid-cols-3 md:h-[12vh] shadow-xl">
      <Link to={"/"} className="flex  items-center gap-[5px] cursor-pointer">
        <img className="h-[40px] w-[40px]" src={logo} alt="logo" />
        <p className=" font-bold text-[25px] text-[#015FF1]">GENESIS</p>
      </Link>
      <div className="items-center sm:col-span-1 col-span-3 order-last flex relative">
        <FontAwesomeIcon className="absolute pl-[10px]" icon={faSearch} />
        <input
          className="bg-[#f1f2f3] sm:w-[400px] w-[100%] rounded px-[40px] py-[5px] outline-none focus:border-[#015FF1] border-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>

      <div className="flex place-self-end	 sm:order-last items-center justify-center rounded-[50%] border-[#015FF1] border-2 h-[32px] w-[32px] cursor-pointer ">
        <Popover content={content} placement="leftTop" trigger="click">
          <img
            className="h-[30px] w-[30px] rounded-[100%] cursor-pointer"
            src={UuerOutlined}
            alt=""
          />
        </Popover>
      </div>
      <div
        onClick={handleSideMenuToggle}
        className="md:hidden flex items-center justify-end "
      >
        <FontAwesomeIcon icon={isCollapsed ? faX : faBars} />
      </div>
    </nav>
  );
};

export default AdminNavbar;
