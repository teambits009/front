import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";

const MyButton = () => {
  return (
    <div>
      <button className="border hover:shadow-lg transition-all duration-500 ease-in-out hover:text-[#015FF1] rounded-lg px-[10px] py-[5px] bg-white">
        <ArrowLeftOutlined />
      </button>
    </div>
  );
};

export default MyButton;
