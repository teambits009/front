import React from 'react';
import { Table, Typography, Button, Space, Divider } from 'antd';
import bag from '../../Common/Assets/bag.jpg';
import shoe from '../../Common/Assets/shoe.jpg';

const { Title, Paragraph } = Typography;

const dataSource = [
  {
    key: '1',
    item: {
      name: 'Shoe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: shoe,
    },
    retailer: 'Retailer A',
    attributes: 'Size: M, Color: Blue',
    quantity: 2,
    shippingFee: 10.0,
    price: 50.0,
  },
  {
    key: '2',
    item: {
      name: 'Bag',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: bag,
    },
    retailer: 'Retailer B',
    attributes: 'Size: L, Color: Red',
    quantity: 1,
    shippingFee: 5.0,
    price: 35.0,
  },
];

const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
    render: (item) => (
      <Space>
        <img
          className="h-[60px] w-[60px] object-cover rounded-lg"
          src={item.image}
          alt={item.name}
        />
        <div className="w-max">
          <p className="font-medium text-lg">{item.name}</p>
          <p>{item.description}</p>
          <button className="text-primary" type="link">
            Remove
          </button>
        </div>
      </Space>
    ),
  },
  {
    title: 'Retailer',
    dataIndex: 'retailer',
    key: 'retailer',
  },
  {
    title: 'Attributes',
    dataIndex: 'attributes',
    key: 'attributes',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Shipping Fee',
    dataIndex: 'shippingFee',
    key: 'shippingFee',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (value) => `$${value.toFixed(2)}`,
  },
];

const ShippingSummaryTable = () => {
  const subtotal = dataSource.reduce((acc, item) => acc + item.price, 0);
  const totalShippingFee = dataSource.reduce(
    (acc, item) => acc + item.shippingFee,
    0
  );
  const totalCost = subtotal + totalShippingFee;

  return (
    <div className="grid">
      <Title level={4}>Order Details</Title>
      <Table
        className="overflow-auto bg-white rounded-xl shadow-custom"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      <div className="place-self-end mt-5 w-[250px]">
        <div className="flex justify-between">
          <p>Subtotal: </p>
          <p className="font-medium text-[18px]">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Total Shipping Fee: </p>
          <p className="font-medium text-[18px]">
            ${totalShippingFee.toFixed(2)}
          </p>
        </div>
        <Divider style={{ margin: '10px 0px', borderTopWidth: '2px' }} dashed />
        <div className="flex justify-between">
          <p className="font-medium">Total:</p>
          <p className="font-medium text-[18px]">${totalCost.toFixed(2)}</p>
        </div>
        <button className="bg-[#015FF1] w-full justify-self-center text-white px-[20px]  my-5 rounded font-semibold  h-[38px] shadow-btn transition-all duration-300 ease-in-out">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ShippingSummaryTable;
