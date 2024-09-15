import React from "react";
import "./style.css";
import Header from "../../common/Header";
import { Card, Checkbox, Divider } from "antd";
import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";

const ManageAddres = () => {
  return (
    <div>
      <Header title={"Manage Addresses"} category={"My Addresses"} />
      <div className="shadow-custom rounded-xl p-5">
        <div className="grid md:grid-cols-2 gap-[10px]">
          <Card className="transition-all text-white bg-primary shadow-custom-2 ease-in-out duration-500 cursor-pointer">
            <div className="grid place-items-center place-content-center h-[250px] gap-[10px] text-[20px]">
              <HomeOutlined className="text-[30px]" />
              <p>Add New Address</p>
            </div>
          </Card>
          <Card>
            <div className="flex gap-[10px]">
              <Checkbox className="rounded-[50%] self-start" />
              <div className="grid gap-[10px]">
                <div className="flex gap-[10px]">
                  <p className="font-bold">Kanwar</p>
                  <p className="uppercase border p-1 px-2 rounded-[100vw] text-green-500 border-green-500">
                    Akyloft
                  </p>
                </div>
                <ul>
                  <li>Plot no 268, JLPL industrial area,</li>
                  <li>Sector 82</li>
                  <li>Mohali</li>
                  <li>mohali, Punjab</li>
                  <li>India</li>
                  <li>Zip:160055</li>
                </ul>
                <div className="mt-2 flex gap-2">
                  <PhoneOutlined />
                  <p>Phone:+916867456</p>
                </div>
              </div>
            </div>
            <Divider />
            <div className="flex justify-between">
              <button className="shadow-btn transition-all ease-in-out duration-500 py-[5px] uppercase w-[100%] text-center font-semibold text-[#015FF1] cursor-pointer">
                Edit
              </button>
              <Divider type="vertical" />
              <button className="shadow-btn transition-all ease-in-out duration-500 py-[5px] uppercase w-[100%] text-center font-semibold text-[#015FF1] cursor-pointer">
                Delete
              </button>
            </div>
          </Card>
          <Card>
            <div className="flex gap-[10px]">
              <Checkbox className="self-start" />
              <div className="grid gap-[10px]">
                <div className="flex gap-[10px]">
                  <p className="font-bold">Kanwar</p>
                  <p className="uppercase border p-1 px-2 rounded-[100vw] text-green-500 border-green-500">
                    Akyloft
                  </p>
                </div>
                <ul>
                  <li>Plot no 268, JLPL industrial area,</li>
                  <li>Sector 82</li>
                  <li>Mohali</li>
                  <li>mohali, Punjab</li>
                  <li>India</li>
                  <li>Zip:160055</li>
                </ul>
                <div className="mt-2 flex gap-2">
                  <PhoneOutlined />
                  <p>Phone:+916867456</p>
                </div>
              </div>
            </div>
            <Divider />
            <div className="flex justify-between">
              <button className="shadow-btn transition-all ease-in-out duration-500 py-[5px] uppercase w-[100%] text-center font-semibold text-[#015FF1] cursor-pointer">
                Edit
              </button>
              <Divider type="vertical" />
              <button className="shadow-btn transition-all ease-in-out duration-500 py-[5px] uppercase w-[100%] text-center font-semibold text-[#015FF1] cursor-pointer">
                Delete
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageAddres;
