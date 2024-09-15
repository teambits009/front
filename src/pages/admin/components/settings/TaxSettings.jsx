import { Select, Table } from "antd";
import React from "react";

const TaxSettings = () => {
  const handleSelectTaxChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSelectAddressChange = (value) => {
    console.log(`selected ${value}`);
  };

  return ( 
    <div className="grid gap-[20px]">
      <div className="bg-white p-[25px] grid gap-[10px] shadow-custom rounded-xl">
        <p className="uppercase text-[24=0px] font-semibold">Tax</p>
        <p className="text-[14px]">
          Configure the tax classes that will be available to your customers at
          checkout
        </p>
        <hr className="my-[10px]" />
        <p className="font-semibold">Basic Configuration</p>
        <div className="md:flex grid gap-[10px]">
          <div className="grid gap-[10px] w-[100%]">
            <label className="text-[14px]">Shopping tax class</label>
            <Select
              defaultValue="None"
              onChange={handleSelectTaxChange}
              options={[
                {
                  value: "None",
                  label: "None",
                },
                {
                  value: "Proportional allocation based on cart items",
                  label: "Proportional allocation based on cart items",
                },
                {
                  value: "Highest tax rate based on cart items",
                  label: "Highest tax rate based on cart items",
                },
                {
                  value: "Taxable Goods",
                  label: "Taxable Goods",
                },
              ]}
            />
          </div>
          <div className="grid gap-[10px] w-[100%]">
            <label className="text-[14px]">Base calculation address</label>
            <Select
              defaultValue="Shipping address"
              onChange={handleSelectAddressChange}
              options={[
                {
                  label: "Please select",
                  options: [
                    {
                      labe: "Shipping address",
                      value: "Shipping address",
                    },
                    {
                      labe: "Billing address",
                      value: "Billing address",
                    },
                    {
                      labe: "Store address",
                      value: "Store address",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <button className="border-2 w-max mt-[10px] font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
          Save
        </button>
      </div>
      <div className="bg-white p-[25px] grid gap-[10px] shadow-custom rounded-xl mb-[50px]">
        <p className="uppercase text-[24=0px] font-semibold">Tax classes</p>
        <div className="w-[100%]">
          <p className="text-[14px] mb-[10px]">Taxable Goods</p>
          <div className="border">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              className="overflow-auto md:w-[100%] w-[83vw]"
            />
          </div>
        </div>
        <button className="border-2 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
          Create new tax class
        </button>
      </div>
    </div>
  );
};

const dataSource = [
  {
    key: "1",
    name: "VAT",
    rate: "10%",
    compound: "No",
    priority: "0",
    action: "Edit Delete",
  },
  {
    key: "2",
    name: "Hungary",
    rate: "10%",
    compound: "No",
    priority: "1",
    action: "Edit Delete",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Rate",
    dataIndex: "rate",
  },
  {
    title: "Compound",
    dataIndex: "compound",
  },
  {
    title: "Priority",
    dataIndex: "priority",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

export default TaxSettings;
