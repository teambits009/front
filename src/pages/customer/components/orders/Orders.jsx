import { Table } from "antd";
import shoe from "../../assets/shoe.jpeg";
import React from "react";
import Header from "../common/Header";
import { getOrders } from "../../../../Api/api";
import { useEffect } from "react";

const Orders = () => {
  useEffect(() => {
    const getUserOrder= async () => {
    const order= await getOrders();
      console.log("Order:", order);
    };

    getUserOrder();
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div>
      <Header title={"My Orders"} category={"Orders"} />
      <div className="w-[95%] mx-auto">
        <Table
          bordered={true}
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 10 }}
          className="overflow-auto bg-white md:w-[100%] w-[83vw] rounded-xl shadow-custom"
        />
      </div>
    </div>
  );
};

const dataSource = [
  {
    key: "1",
    order: {
      orderId: "O46BHVGYTGYT",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Name of the Product",
      brand: "Brand: ",
      qty: "Quantity:",
      orderNo: "Part of order NO: ",
    },
    amount: "$270.00",
    status: {
      text: "Cancelled",
    },
  },
  {
    key: "2",
    order: {
      orderId: "O46BHVGYTGYT",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Name of the Product",
      brand: "Brand: ",
      qty: "Quantity:",
      orderNo: "Part of order NO: ",
    },
    amount: "$270.00",
    status: {
      text: "Cancelled",
    },
  },
  {
    key: "3",
    order: {
      orderId: "O46BHVGYTGYT",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Name of the Product",
      brand: "Brand: ",
      qty: "Quantity:",
      orderNo: "Part of order NO: ",
    },
    amount: "$270.00",
    status: {
      text: "Cancelled",
    },
  },
];

const columns = [
  {
    title: "Order ID & Date",
    dataIndex: "order",
    render: (date) => (
      <div className="grid w-max">
        <p>{date.orderId}</p>
        <p>{date.date}</p>
      </div>
    ),
  },
  {
    title: "Details",
    dataIndex: "details",
    render: (details) => (
      <div className="flex gap-[8px] w-max">
        <img className="h-[50px] w-[50px]" src={shoe} alt="" />
        <div>
          <p>{details.name}</p>
          <p>{details.brand}</p>
          <p>{details.qty}</p>
          <p>{details.orderNo}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => (
      <p className="bg-[#dee5fb] px-[10px] flex rounded py-[3px] justify-center text-[#015FF1] ">
        {text.text}
      </p>
    ),
  },
];

export default Orders;
