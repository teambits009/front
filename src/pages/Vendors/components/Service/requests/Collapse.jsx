import { DatePicker, Select, Space } from "antd";
import React from "react";

const Collapsed = () => {
  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const handleSelectTaxChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="grid gap-[10px] px-[20px]">
      <div className="sm:flex grid gap-[10px]">
        <div className="grid gap-[10px] w-[100%]">
          <label className="text-[14px]">Status of The Request</label>
          <Select
            defaultValue="Status does not matter"
            onChange={handleSelectTaxChange}
            options={[
              {
                value: "Status does not matter",
                label: "Status does not matter",
              },
              {
                value: "Pending",
                label: "Pending",
              },
              {
                value: "Approved",
                label: "Approved",
              },
              {
                value: "Declined",
                label: "Declined",
              },
            ]}
          />
        </div>
        <div className="grid w-[100%]">
          <Space direction="vertical" size={12}>
            <p>Pick start and end date</p>
            <RangePicker
              className="w-[100%]"
              format="YYYY-MM-DD"
              onChange={onChange}
              onOk={onOk}
            />
          </Space>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="shadow-btn transition-all ease-in-out duration-300 w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
          Search
        </button>
        <button className="shadow-btn transition-all ease-in-out duration-300 outline outline-gray-300 hover:outline-none w-[90px] hover:border-none px-[20px] py-[5px] font-semibold  bg-white rounded-lg">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Collapsed;
