import { Checkbox, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { getOrders } from "../../../../Api/api";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

const Orders = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        const ordersData = response.map((order, index) => ({
          key: index + 1,
          checkbox: <Checkbox />,
          orderNumber: order.id,
          date: new Date(order.date),
          email: order.customer.email,
          shipmentStatus: order.order_status,
          paymentStatus: {
            icon: order.payment_status === 'paid' ? <CheckCircleOutlined style={{ color: 'green' }} /> : <ClockCircleOutlined style={{ color: 'orange' }} />,
            text: order.payment_status,
          },
          total: order.total,
        }));
        setDataSource(ordersData);
      } catch (error) {
        message.error('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="pl-[5px] my-[20px] w-[95%] mx-auto">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="overflow-auto bg-white rounded-xl shadow-custom"
      />
    </div>
  );
};

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

export default Orders;
