import { DatePicker, Input, Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Existing from "./Existing";
import Header from "../common/Header";

const Offers = () => {
  const handleSelectTypeChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleDiscountTypeChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleTargetAudienceChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  return (
    <div>
        <Header title={'Offers and Rewards Overview'} category={'Offers and Rewards'}/>
      <div className="md:flex grid gap-5">
        <div className="rounded-lg w-full p-5 text-center shadow-custom border-l-4 border-[#4CAF50]">
          <p>Active Offers: 5</p>
          <p>Upcoming Offers: 2</p>
          <p>Expired Offers: 10</p>
          <p>Total Rewards Issued: 5</p>
        </div>
        <div className="rounded-lg w-full p-5 text-center shadow-custom border-l-4 border-[#00BCD4]">
          <p className="font-medium">Analytics Snapshot</p>
          <ul>
            <li>Total Redemtion: 200</li>
            <li>Revenue Generated: $5000</li>
            <li>Customer Acquisitions: 30</li>
          </ul>
        </div>
      </div>
      <p className="font-medium text-xl mt-7 mb-4 text-center">Create New Offer</p>
      <form className="shadow-custom p-5 rounded-xl" action="">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="grid gap-2">
            <div className="grid gap-[10px]">
              <label>Offer Type</label>
              <Select
                defaultValue="Discount"
                onChange={handleSelectTypeChange}
                options={[
                  {
                    label: "Select offer type",
                    options: [
                      {
                        labe: "Discount",
                        value: "discount",
                      },
                      {
                        labe: "Buy one get one",
                        value: "Buy one get one",
                      },
                      {
                        labe: "Free Shipping",
                        value: "Free Shipping",
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className="grid gap-[10px]">
              <label>Offer Name</label>
              <Input type="text" placeholder="Offer name" required />
            </div>
            <div className="grid gap-[10px]">
              <label>Description</label>
              <TextArea size="large" placeholder="Enter Description" required />
            </div>
            <div className="grid gap-[10px]">
              <label>Discount Type</label>
              <Select
                onChange={handleDiscountTypeChange}
                placeholder="Select discount type"
                options={[
                  {
                    label: "Select discount type",
                    options: [
                      {
                        labe: "Percentage",
                        value: "Percentage",
                      },
                      {
                        labe: "Fixed amount",
                        value: "Fixed amount",
                      },
                    ],
                  },
                ]}
              />
            </div>
            
          </div>
          <div className="grid gap-2">
          <div className="grid gap-[10px]">
              <label>Discount Value</label>
              <Input
                type="number"
                min={1}
                placeholder="Discount value"
                required
              />
            </div>
            <div className="grid gap-[10px]">
              <label>Minimum Purchase Requirement</label>
              <Input
                type="number"
                min={1}
                placeholder="Minimum purchase requirement"
                required
              />
            </div>
            <div className="grid gap-[10px]">
              <Space direction="vertical" size={12}>
                <p>Pick Start and End date</p>
                <RangePicker
                  format="YYYY-MM-DD"
                  onChange={onChange}
                  onOk={onOk}
                />
              </Space>
            </div>
            <div className="grid gap-[10px]">
              <label>Discount Type</label>
              <Select
                onChange={handleTargetAudienceChange}
                placeholder="Select target audience"
                options={[
                  {
                    label: "Select target audience",
                    options: [
                      {
                        labe: "Old customers",
                        value: "Old customers",
                      },
                      {
                        labe: "New customers",
                        value: "New customers",
                      },
                      {
                        labe: "Loyal customers",
                        value: "Loyal customers",
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className="grid gap-[10px]">
              <label>Usage Limit</label>
              <Input type="number" min={1} placeholder="Usage limit" required />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="shadow-btn transition-all ease-in-out duration-500 mt-5 font-semibold px-5 py-[5px] bg-[#015FF1] rounded-lg text-white"
        >
          Create Offer
        </button>
      </form>
      <p className="font-medium text-xl mt-7 mb-4 text-center">Manage Existing Offers</p>
      <Existing />
    </div>
  );
};

export default Offers;
