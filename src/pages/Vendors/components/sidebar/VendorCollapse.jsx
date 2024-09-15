import { Collapse } from "antd";
import React from "react";

const CustomCollapse = ({ icon, title, children }) => {
  return (
    <Collapse
      className="bg-[#f2f7ff]"
      expandIconPosition="end"
      bordered={false}
      size="small"
      items={[
        {
          key: "1",
          label: (
            <div className="flex text-[16px] font-semibold items-center gap-[5px]">
              {icon}
              {title}
            </div>
          ),
          children: (
            <div className="text-zinc-700 px-[15px] ">
            {children}
          </div>
          ),
        },
      ]}
    />
  );
};

export default CustomCollapse;
