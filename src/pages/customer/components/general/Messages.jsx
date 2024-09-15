import React from "react";
import UuerOutlined from "../../assets/check_balance.jpeg";
import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../common/Header";
import Chat from "./Chat";

const Messages = () => {
  return (
    <div>
      <Header title={"My Messages"} category={"Messages"} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="shadow-custom rounded-xl flex flex-col">
          <div className="px-5 pt-5">
            <div className="items-center w-[100%] flex relative">
              <FontAwesomeIcon className="absolute pl-2.5" icon={faSearch} />
              <input
                className="bg-white w-[100%]  rounded px-10 py-[5px] outline-none"
                type="search"
                name="search"
                placeholder="Search by username"
              />
            </div>
          </div>
          <Divider />
          <div className="flex gap-2.5 bg-[#f2f7ff] p-5 cursor-pointer">
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
        <div className="shadow-custom rounded-xl">
          <div className="flex gap-2.5 px-5 pt-5">
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

export default Messages;
