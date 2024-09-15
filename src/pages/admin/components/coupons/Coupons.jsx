import { Badge, Checkbox, Table, message } from "antd";
import React, { useState, useEffect } from "react";
import { getCoupons } from "../../../../Api/api";
import moment from 'moment';

const Coupons = ({ handleSidebarClickSecond }) => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await getCoupons(); // Replace with the correct API call if necessary
        const currentDate = moment();

        const couponsData = response.map((coupon, index) => {
          const startDate = moment(coupon.start_date);
          const endDate = moment(coupon.end_date);
          let status;

          if (currentDate.isBefore(startDate)) {
            status = <Badge status="processing" text="Upcoming" />;
          } else if (currentDate.isAfter(endDate)) {
            status = <Badge status="default" text="Expired" />;
          } else {
            status = <Badge status="success" text="Active" />;
          }

          return {
            key: index + 1,
            checkbox: <Checkbox />,
            couponCode: coupon.code,
            startDate: startDate.format("YYYY-MM-DD"),
            endDate: endDate.format("YYYY-MM-DD"),
            status,
            usedTimes: coupon.usedTimes || "0", // Assuming there's a field for the number of uses
          };
        });

        setDataSource(couponsData);
      } catch (error) {
        message.error("Failed to fetch coupons");
      }
    };

    fetchCoupons();
  }, []);

  return (
    <div className="overflow-auto md:mb-[40px]">
      <div className="mx-[20px]">
        <div className="flex justify-between my-[20px]">
          <p className="text-[24px] font-semibold">Coupons</p>
          <button
            onClick={() => handleSidebarClickSecond("newCoupon")}
            className="border-2 px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
          >
            New Coupon
          </button>
        </div>
        <div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 10 }}
            className="overflow-auto bg-white shaow-custom rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

const columns = [
  {
    title: "Select",
    dataIndex: "checkbox",
  },
  {
    title: "Coupon Code",
    dataIndex: "couponCode",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Used Times",
    dataIndex: "usedTimes",
  },
];

export default Coupons;
