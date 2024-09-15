import React from "react";
import { Table } from "antd";
import Header from "../../common/Header";

const Rewards = () => {
  return (
    <div className="grid gap-2.5">
      <Header title={"Reward Points"} category={"Reward points"} />
      <div className="container text-white">
        <div className="card shadow-custom rounded-xl px-5 py-[30px] gap-10 w-max flex">
          <div className="grid">
            <p className="font-semibold text-[18px]">Current Reward Points</p>
            <p className="opacity-75">Reward point balance</p>
            <p className="font-semibold text-[18px] mt-2.5">500</p>
          </div>
          <div className="justify-center flex flex-col">
            <p className="opacity-75">Worth:</p>
            <p className="font-semibold">C$319.41</p>
          </div>
        </div>
      </div>

      <div>
        <Table  className="shadow-custom rounded-xl"/>
      </div>
    </div>
  );
};

export default Rewards;
