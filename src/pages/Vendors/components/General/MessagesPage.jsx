import React from "react";
import UuerOutlined from "../../assets/check_balance.jpeg";
import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../common/Header";
import Chat from "./Chat";

const MessagesPage = () => {
  return (
    <div>
      <Header title={"My Messages"} category={"Messages"} />
      <div className="grid sm:grid-cols-2 gap-[20px]">
        <div className="shadow-custom rounded-xl flex flex-col">
          <div className="px-[20px] pt-[20px]">
            <div className="items-center w-[100%] flex relative">
              <FontAwesomeIcon className="absolute pl-[10px]" icon={faSearch} />
              <input
                className="bg-white w-[100%]  rounded px-[40px] py-[5px] outline-none"
                type="search"
                name="search"
                placeholder="Search by username"
              />
            </div>
          </div>
          <Divider />
          <div className="flex gap-[10px] bg-[#f2f7ff] p-[20px] cursor-pointer">
            <img
              className="h-[30px] w-[30px] rounded-[100%] cursor-pointer"
              src={UuerOutlined}
              alt=""
            />
            <div className="grid">
              <p className="font-semibold text-[18px]">Michael Williams</p>
              <p className="opacity-75">Hi Michael Williams.</p>
            </div>
          </div>
        </div>
        <div className="shadow-custom rounded-xl" >
          <div className="flex gap-[10px] px-[20px] pt-[20px]">
            <img
              className="h-[30px] w-[30px] rounded-[100%] cursor-pointer"
              src={UuerOutlined}
              alt=""
            />
            <div className="grid">
              <p className="font-semibold text-[18px] opacity-90">
                Michael Williams
              </p>
              <p>Subject: Condition for the product.</p>
            </div>
          </div>
          <Divider />
          <Chat/>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
