import React from "react";
import Header from "../common/Header";
import { Table } from "antd";

const Credits = () => {
  return (
    <div>
      <Header title={"My Credits"} category={"Credits"} />
      <div className="grid gap-[20px]">
        <div className="container">
          <div className="card relative text-white shadow-custom px-[20px] mb-[20px] py-[30px] gap-[40px] w-[300px]">
            <p className="opacity-80">Available Balance</p>
            <p className="text-[25px] mt-[10px] font-semibold">
              C$1,104,246.43
            </p>
            <button className="border-gray-500 border my-[30px] px-[20px] shadow-btn transition-all ease-in-out duration-500">
              withdraw
            </button>
            <p className="absolute bottom-[10px] right-[10px]">
              Approx. $864,279.29
            </p>
          </div>
        </div>
        <div>
          <Table className="shadow-custom rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default Credits;
