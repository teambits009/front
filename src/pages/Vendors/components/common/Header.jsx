import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, category }) => {
  return (
    <div>
    <p className="text-[24px] mt-[20px] font-semibold">{title}</p>
    <div className="flex font-medium py-[10px] my-[5px] gap-[0px] text-zinc-700">
      <Link to="/">
        <p className="hover:text-[#015FF1] cursor-pointer">Home</p>
      </Link>
      <CaretRightOutlined className="ml-[5px] text-[18px]"/> 
      <p>{category}</p>
    </div>
    </div>
  );
};

export default Header;
