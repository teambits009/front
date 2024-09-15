import React from "react";
import Header from "../common/Header";
import { Input } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import iphone from "../../assets/iphone.jpg";

const Wishlist = () => {
  const [selected, setSelected] = React.useState("wishlist");

  const handleSelected = (setting) => {
    setSelected(setting);
  };
  return (
    <div>
      <Header title={"Wishlist"} category={"Wishlist"} />
      <div className="shadow-custom rounded-xl">
        <div className="flex px-5 gap-5">
          <button
            className={
              selected === "wishlist"
                ? "border-b-2 border-[#015FF1] py-5"
                : "py-5"
            }
            onClick={() => handleSelected("wishlist")}
          >
            Wishlist
          </button>
          <button
            className={
              selected === "vendors" ? "border-b-2 border-[#015FF1]" : ""
            }
            onClick={() => handleSelected("vendors")}
          >
            Vendors
          </button>
        </div>
        <hr />
        <div>
          {selected === "wishlist" && <WishlistComponent />}
          {selected === "vendors" && <Vendors />}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

const WishlistComponent = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-2.5 p-5">
      <div className="shadow-custom rounded-xl p-5 rounded-xl">
        <p className="font-semibold">Create New List</p>
        <Input className="my-2.5" placeholder="Enter List Name" required />
        <button className="shadow-btn transition-all ease-in-out duration-500 rounded w-max bg-[#015FF1] text-white px-5 py-[5px]">
          Create
        </button>
      </div>
      <div className="shadow-custom rounded-xl p-5 min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-2.5">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom rounded-xl p-5 min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-2.5">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom rounded-xl p-5 min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-2.5">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom rounded-xl p-5 min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-2.5">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom rounded-xl p-5 min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-2.5">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Vendors = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-2.5 p-5">
      <div className="shadow-custom rounded-xl p-5">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shop</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Punjab Household collections</p>
            <p className="opacity-75 my-2.5">Verification: Verified</p>
            <p>Category: Households</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom rounded-xl p-5">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shop</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Punjab Household collections</p>
            <p className="opacity-75 my-2.5">Verification: Verified</p>
            <p>Category: Households</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom rounded-xl p-5">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shop</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Punjab Household collections</p>
            <p className="opacity-75 my-2.5">Verification: Verified</p>
            <p>Category: Households</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom rounded-xl p-5">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shop</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-5">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-5">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-2.5">
            <p className="text-18px font-bold">Punjab Household collections</p>
            <p className="opacity-75 my-2.5">Verification: Verified</p>
            <p>Category: Households</p>
          </div>
        </div>
      </div>
    </div>
  );
};
