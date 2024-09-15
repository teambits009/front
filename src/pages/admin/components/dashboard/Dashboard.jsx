import React from "react";
import ApexChart from "./Charts";
import DonutApexChart from "./DonutChart";

const Dashboard = () => {
  return (
    <div className="overflow-auto md:mx-[10px] w-[95%] content-center mx-auto bg-[#f6f6f7]">
      <p className="text-[24px] font-bold sm:mt-[30px] mt-[10px] mb-[10px]">Dashboard</p>
      <div className="grid md:grid-cols-5 gap-[10px]">
        <div className="bg-white shadow-custom rounded-xl col-span-3">
          <ApexChart />
        </div>
        <div className="md:mx-[10px] grid md:col-span-2 col-span-3">
          <div className="shadow-custom rounded-xl bg-white p-[10px] text-[13px] pb-[20px]">
            <p className="font-semibold text-[18px] mb-[10px]">
              Lifetime orders
            </p>
            <p className="mb-[8px]">6734 orders</p>
            <p>$9,999,999.33 lifetime sale</p>
            <p className="my-[8px]">60% of orders completed</p>
            <p>30% of orders cancelled</p>
          </div>
          <div className="bg-white shadow-custom rounded-xl my-[10px] py-[10px] flex justify-center items-center h-[200px]">
            <DonutApexChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
