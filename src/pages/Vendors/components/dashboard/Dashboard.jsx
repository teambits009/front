import React from "react";
import ApexChart from "./Charts";
import DonutApexChart from "./DonutChart";
import Header from "../common/Header";

const Dashboard = () => {
  return (
    <div>
      <Header title={"My Performance"} category={"performance"} />
      <div>
        <div className="grid md:grid-cols-3 gap-4 my-2">
          <div className="shadow-custom bg-primary rounded-xl text-white p-[10px] text-[13px]">
            <p className="font-semibold text-[18px] mb-[10px]">Total Sales</p>
            <p className="my-[8px]">6734</p>
          </div>
          <div className="shadow-custom rounded-xl border border-primary bg-white p-[10px] text-[13px]">
            <p className="font-semibold text-[18px] mb-[10px]">Total Profit</p>
            <p className="my-[8px]">Ksh 67344</p>
          </div>
          <div className="shadow-custom rounded-xl bg-primary text-white p-[10px] text-[13px]">
            <p className="font-semibold text-[18px] mb-[10px]">My Ratings</p>
            <p className="my-[8px]">67+</p>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-2.5">
          <div className="bg-white shadow-custom rounded-xl col-span-3 mt-2">
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
    </div>
  );
};

export default Dashboard;
