import React from "react";
import { Link } from "react-scroll";

const SidebarSettings = ({ setSelectedSetting }) => {
  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
  };

  return (
    <div className="bg-white shadow-custom rounded-xl p-[25px] grid gap-[15px]">
      <div>
        <Link to="store">
          <button onClick={() => handleSettingClick("store")}>
            <p className="uppercase text-[24=0px] font-semibold hover:underline hover:text-[#015FF1]">
              Store Setting
            </p>
          </button>
        </Link>

        <p className="text-[14px] mt-[10px]">
          Configure your store information
        </p>
      </div>
      <hr />
      <div>
        <Link to="payment">
          <button onClick={() => handleSettingClick("payment")}>
            <p className="uppercase text-[24=0px] font-semibold hover:underline hover:text-[#015FF1]">
              Payment setting
            </p>
          </button>
        </Link>

        <p className="text-[14px] mt-[10px]">
          Configure the available payment methods
        </p>
      </div>
      <hr />
      <div>
        <Link to="shipping">
          <button onClick={() => handleSettingClick("shipping")}>
            <p className="uppercase text-[24=0px] font-semibold hover:underline hover:text-[#015FF1]">
              Shipping Setting
            </p>
          </button>
        </Link>

        <p className="text-[14px] mt-[10px]">
          Where you ship, shipping methods and delivery fee
        </p>
      </div>
      <hr />
      <div>
        <Link to="tax">
          <button onClick={() => handleSettingClick("tax")}>
            <p className="uppercase text-[24=0px] font-semibold hover:underline hover:text-[#015FF1]">
              Tax Setting
            </p>
          </button>
        </Link>

        <p className="text-[14px] mt-[10px]">
          Configure tax classes and tax rates
        </p>
      </div>
    </div>
  );
};

export default SidebarSettings;
