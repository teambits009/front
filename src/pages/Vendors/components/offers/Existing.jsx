import { Table } from "antd";
import React, { useState } from "react";

const Existing = () => {
  const [dataSource, setDataSource] = useState(initialDataSource);

  const handleEdit = (record) => {
    console.log("Edit clicked for:", record);
    // Implement edit logic here
  };

  const handleDeactivate = (record) => {
    console.log("Deactivate clicked for:", record);
    // Implement deactivate logic here
    const updatedDataSource = dataSource.map(item =>
      item.key === record.key ? { ...item, status: "Inactive" } : item
    );
    setDataSource(updatedDataSource);
  };

  const handleDelete = (record) => {
    console.log("Delete clicked for:", record);
    // Implement delete logic here
    const updatedDataSource = dataSource.filter(item => item.key !== record.key);
    setDataSource(updatedDataSource);
  };

  const columns = [
    {
      title: "Offer Name",
      dataIndex: "offerName",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span className={status === "Active" ? "text-green-600" : "text-red-600"}>
          {status}
        </span>
      ),
    },
    {
      title: "Validity Period",
      dataIndex: "validityPeriod",
    },
    {
      title: "Redemptions",
      dataIndex: "redemptions",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="flex gap-2">
          <Button btn_value="Edit" onClick={() => handleEdit(record)} />
          <Button btn_value="Deactivate" onClick={() => handleDeactivate(record)} status={record.status} isDeactivate />
          <Button btn_value="Delete" onClick={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  return (
    <div className="pl-[5px] my-[20px] mx-auto">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="overflow-auto bg-white rounded-xl shadow-custom"
        rowClassName={(record) =>
          record.status === "Active" ? "bg-white" : "bg-gray-100 text-gray-500"
        }
      />
    </div>
  );
};

export default Existing;

const initialDataSource = [
  {
    key: 1,
    offerName: "Summer Sale",
    type: "Discount",
    status: "Active",
    validityPeriod: "June 1, 2024 - June 30, 2024",
    redemptions: 150,
    actions: {
      edit: 'Edit',
      deactivate: 'Deactivate',
      delete: 'Delete',
    },
  },
  {
    key: 2,
    offerName: "Summer Sale",
    type: "Percentage",
    status: "Inactive",
    validityPeriod: "June 1, 2024 - June 30, 2024",
    redemptions: 150,
    actions: {
      edit: 'Edit',
      deactivate: 'Deactivate',
      delete: 'Delete',
    },
  },
];

const Button = ({ btn_value, onClick, status, isDeactivate }) => {
  const isActive = status === "Active";
  const buttonStyles = isDeactivate
    ? (!isActive ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 text-gray-600")
    : "bg-gray-200 hover:bg-gray-300 text-gray-600";

  return (
    <button
      onClick={onClick}
      className={`transition-all duration-300 rounded-md px-2 cursor-pointer border border-zinc-400 ${buttonStyles}`}
      disabled={isDeactivate && !isActive}
    >
      {btn_value}
    </button>
  );
};
