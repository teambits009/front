import React from "react";
import Header from "../common/Header";
import { Table } from "antd";

const MyCredits = () => {
  return (
    <div>
      <Header title={"Total Balance"} category={"Balance"} />
      <div className="grid gap-[20px]">
          <div className="bg-primary rounded-xl w-[380px] h-[230px] relative text-white  px-[20px] mb-[20px] py-[30px] gap-[40px]">
            <p className="opacity-80">Available Balance</p>
            <p className="text-[25px] mt-[10px] font-semibold">
              C$1,104,246.43
            </p>
            <button className="my-[30px] px-[20px] shadow- transition-all ease-in-out duration-500">
              withdraw
            </button>
            <p className="absolute bottom-[10px] right-[10px]">
              Approx. $864,279.29
            </p>
          </div>
        <div>
          {/* All transactions */}
          <Table className="overflow-auto bg-white md:w-[100%] w-[83vw] rounded-xl shadow-custom" />
        </div>
      </div>
    </div>
  );
};

export default MyCredits;
