import { DollarCircleOutlined } from "@ant-design/icons";
import {
  faCaretDown,
  faCaretUp,
  faEllipsis,
  faRoute,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CostChart from "./CostChart";
import { Slider } from "antd";
import MyMapComponent from "./TrackingMaps";
import mapImg from '../../assets/images/unnamed.png'

const Shipping = ({ handleSidebarClickSecond }) => {
  return (
    <div className="overflow- md:mx-[10px] w-[95%] content-center mx-auto bg-[#f6f6f7] my-[10px] md:my-[0px]">
      <div className="grid md:grid-cols-3 md:grid-rows-5 md:m-[20px] gap-[20px]">
        <div className="grid gap-[10px] shadow-custom md:col-span-2 md:row-span-3 p-[20px]  rounded-xl bg-white">
          <div className="flex justify-between">
            <div className="flex gap-[10px] font-bold text-[20px] items-center">
              <div className="text-[#015FF1] cursor-pointer rounded-full flex items-center justify-center border  h-[40px] w-[40px] shadow">
                <FontAwesomeIcon icon={faRoute} />
              </div>
              <p>Live Shipment Tracking</p>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer text-[#015FF1]"
              icon={faEllipsis}
            />
          </div>
          <div className="rounded-xl  md:w-[100%] h-[300px] md:h-[350px] overflow-hidden border">
          <img className="h-[300px] md:h-[350px] w-[100%]" src={mapImg} alt="map"/>
          </div>
          <div className="md:flex grid gap-[10px] justify-between">
            <div className="flex gap-[5px]">
              <p className="opacity-70">Shipping Id:</p>
              <p className="font-semibold text-[#015FF1]">#SP9876543210</p>
            </div>
            <div className="flex gap-[5px]">
              <p className="opacity-70"> Shipping Status:</p>
              <p className="rounded-full h-max py-[2px] px-[10px] text-[#015FF1] bg-opacity-10 border border-[#015FF1] bg-[#015FF1] font-semibold">
                In Transit
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[5px]">
              <p className="opacity-70">Origin:</p>
              <p className="font-semibold">Kenya</p>
            </div>
            <div className="flex gap-[5px]">
              <p className="opacity-70">Destination:</p>
              <p className="font-semibold">Tanzania</p>
            </div>
          </div>
          <div>
            {" "}
            <Slider />
          </div>
          <div className="flex justify-between">
            <div className="grid">
              <p className="opacity-70">Package Shipped</p>
              <p className="font-semibold">20-02-2024, 14:00</p>
            </div>
            <div className="grid text-right">
              <p className="opacity-70">Estimated Package Received</p>
              <p className="font-semibold">20-02-2024, 16:00</p>
            </div>
          </div>
        </div>
        <div className="shadow-custom grid gap-[10px] rounded-xl w-[100%] bg-white p-[15px]">
          <div className="flex justify-between">
            <div className="flex gap-[10px] font-bold items-center">
              <div className="text-[#015FF1] cursor-pointer rounded-full flex items-center justify-center border  h-[40px] w-[40px] shadow">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <button
                onClick={() => handleSidebarClickSecond("inTransit")}
                className="cursor-pointer hover:text-[#015FF1] transition-all  duration-500 ease-in-out hover:underline"
              >
                In Transit Order
              </button>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer text-[#015FF1]"
              icon={faEllipsis}
            />
          </div>
          <div className="flex justify-between">
            <p className="text-[28px] font-bold">486</p>
            <div className="flex items-center rounded-full px-[8px] h-max py-[4px] gap-[8px] bg-opacity-20 bg-[#015FF1] text-[#015FF1]">
              <p>20.76%</p>
              <FontAwesomeIcon className="text-[20px]" icon={faCaretUp} />
            </div>
          </div>
          <p>Shipping Packages</p>
        </div>
        <div className="shadow-custom grid gap-[10px] rounded-xl w-[100%] bg-white p-[15px]">
          <div className="flex justify-between">
            <div className="flex gap-[10px] font-bold items-center">
              <div className="text-[#015FF1] cursor-pointer rounded-full flex items-center justify-center border  h-[40px] w-[40px] shadow">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <button onClick={() => handleSidebarClickSecond("shipped")} className="cursor-pointer hover:text-[#015FF1] transition-all  duration-300 ease-in-out hover:underline">
                Shipped Order
              </button>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer text-[#015FF1]"
              icon={faEllipsis}
            />
          </div>
          <div className="flex justify-between">
            <p className="text-[28px] font-bold">324</p>
            <div className="flex items-center rounded-full px-[8px] h-max py-[4px] gap-[8px] bg-opacity-20 bg-red-500 text-red-500">
              <p>9.23%</p>
              <FontAwesomeIcon className="text-[20px]" icon={faCaretDown} />
            </div>
          </div>
          <p>Shipping Packages</p>
        </div>
        <div className="shadow-custom grid gap-[10px] rounded-xl w-[100%] bg-white p-[15px]">
          <div className="flex justify-between">
            <div className="flex gap-[10px] font-bold items-center">
              <div className="text-[#015FF1] cursor-pointer rounded-full flex items-center justify-center border  h-[40px] w-[40px] shadow">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <button onClick={() => handleSidebarClickSecond("pending")} className="cursor-pointer hover:text-[#015FF1] transition-all  duration-300 ease-in-out hover:underline">
                Pending Order
              </button>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer text-[#015FF1]"
              icon={faEllipsis}
            />
          </div>
          <div className="flex justify-between">
            <p className="text-[28px] font-bold">10</p>
            <div className="flex items-center rounded-full px-[8px] h-max py-[4px] gap-[8px] bg-opacity-20 bg-[#015FF1] text-[#015FF1]">
              <p>-18.76%</p>
              <FontAwesomeIcon className="text-[20px]" icon={faCaretUp} />
            </div>
          </div>
          <p>Shipping Packages</p>
        </div>

        <div className="shadow-custom w-[100%] rounded-xl bg-white md:col-span-3 md:row-span-2 p-[15px] md:mb-[20px]">
          <div className="flex gap-[10px] font-bold items-center">
            <div className="text-[#015FF1] text-[24px] cursor-pointer rounded-full flex items-center justify-center border  h-[40px] w-[40px] shadow">
              <DollarCircleOutlined />
            </div>
            <p>Average shipping Cost</p>
          </div>
          <CostChart />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
