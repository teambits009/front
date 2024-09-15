import { Table, Space, Image } from "antd";
import React from "react";
import Header from "../common/Header";
import shoe from "../../assets/shoe.jpeg";

const ServiceList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between ">
        <Header title={"Service Listings"} category={"Services"} />
        <button className="rounded border bg-[#dee5fb] text-[#015FF1] px-2 h-[40px] mt-2">
          Add Service
        </button>
      </div>

      <Table
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="overflow-auto bg-white md:w-[100%] w-[83vw] rounded-xl shadow-custom"
      />
    </div>
  );
};

const dataSource = [
  {
    key: "1",
    service: {
      serviceId: "S123XYZ",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Service Name",
      description: "Service Description",
      price: "$50.00",
    },
    stock: {
      text: "200",
    },
  },
  {
    key: "2",
    service: {
      serviceId: "S456ABC",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Another Service",
      description: "Description of Another Service",
      price: "$75.00",
    },
    stock: {
      text: "300",
    },
  },
  {
    key: "3",
    service: {
      serviceId: "S789DEF",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Service Three",
      description: "Description of Service Three",
      price: "$100.00",
    },
    stock: {
      text: "120",
    },
  },
];

const columns = [
  {
    title: "Service ID & Date",
    dataIndex: "service",
    render: (service) => (
      <div className="grid">
        <p>{service.serviceId}</p>
        <p>{service.date}</p>
      </div>
    ),
  },
  {
    title: "Details",
    dataIndex: "details",
    fixed: "left",
    render: (details) => (
      <div className="flex gap-[8px] items-center">
        <Image
          src={details.image}
          alt={details.name}
          preview={false}
          width={50}
        />
        <div>
          <p className="font-bold">{details.name}</p>
          {/* <p>{details.description}</p> */}
          <p>{details.price}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Stock",
    dataIndex: "stock",
    render: (text) => (
      <p className=" flex  py-[3px] justify-center  ">{text.text}</p>
    ),
  },

  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <Space size="middle">
        <button className="rounded border bg-[#dee5fb] text-[#015FF1] px-2">
          Edit
        </button>
        <button className="rounded border  text-[#C21E56] px-2">Delete</button>
      </Space>
    ),
  },
];

export default ServiceList;
