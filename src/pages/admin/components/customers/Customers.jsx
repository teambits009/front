import React, { useState, useEffect } from "react";
import { Table, Checkbox, message } from "antd";
import { getUserList } from "../../../../Api/api";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

const Customers = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await getUserList();
        // Ensure response contains data as expected
        if (response && Array.isArray(response)) {
          const customersData = response
            .filter(user => user.user_type === "customer")
            .map((user, index) => ({
              key: index + 1,
              checkbox: <Checkbox />,
              name: user.first_name || user.last_name ? `${user.first_name} ${user.last_name}` : user.username,
              email: user.email,
              status: user.email_verified ? (
                <CheckCircleOutlined style={{ color: 'blue' }} />
              ) : (
                <ClockCircleOutlined style={{ color: 'orange' }} />
              ),
              createdAt: new Date(user.date_joined),
            }));
          setDataSource(customersData);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        message.error("Failed to fetch customers: " + error.message);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="pl-[5px] w-[95%] mx-auto my-[20px]">
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
    width: 50,
  },
  {
    title: "Full Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Verification Status",
    dataIndex: "status",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    render: (date) => date.toLocaleDateString(),
  },
];

export default Customers;
