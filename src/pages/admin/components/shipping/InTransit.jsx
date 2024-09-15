import { CheckCircleOutlined } from "@ant-design/icons";
import { Checkbox, Table } from "antd";
import React from "react";
import MyButton from "../button/Button";

const InTransit = ({ handleSidebarClickSecond }) => {
  return (
    <div className="mx-[20px] my-[20px]">
        <div className="flex my-[30px] gap-[20px]">
            <button onClick={() => handleSidebarClickSecond("shipping") }>
              <MyButton />
            </button>
          <p className="text-[24px] font-semibold">In Transit Orders</p>
        </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="overflow-auto bg-white shadow-custom rounded-xl"
      />
    </div>
  );
};

export default InTransit;

const dataSource = [
  {
    key: "1",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "2",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "3",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "4",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "5",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "6",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "7",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "8",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "9",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "10",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "11",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "12",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "13",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "14",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "15",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "16",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "17",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "18",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "19",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "20",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "21",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "In Transit",
    paymentStatus: {
      icon: <CheckCircleOutlined style={{ color: "blue" }} />,
      text: "Paid",
    },
    total: "$400",
  },
];

const columns = [
  {
    title: "Select",
    dataIndex: "checkbox",
  },
  {
    title: "Order Number",
    dataIndex: "orderNumber",
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (date) => date.toLocaleDateString(),
  },
  {
    title: "Customer Email",
    dataIndex: "email",
  },
  {
    title: "Shipment Status",
    dataIndex: "shipmentStatus",
  },
  {
    title: "Payment Status",
    dataIndex: "paymentStatus",
    render: (paymentStatus) => (
      <>
        {paymentStatus.icon} {paymentStatus.text}
      </>
    ),
  },
  {
    title: "Total",
    dataIndex: "total",
  },
];
