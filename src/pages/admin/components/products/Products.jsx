import React, { useState, useEffect } from 'react';
import { Table, Badge, Checkbox, message } from 'antd';
import { getProducts } from '../../../../Api/api';
import { columns } from './data';

const Products = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const products = data.map((product, index) => ({
          key: index + 1,
          checkbox: <Checkbox />,
          productName: product.name,
          price: `$${(product.Price / 100).toFixed(2)}`, // Assuming price is in cents
          sku: product.sku,
          quantity: product.quantity,
          status: (
            <Badge
              status={product.stock_availability ? 'success' : 'error'}
              text={product.stock_availability ? 'Available' : 'Out of Stock'}
            />
          ),
        }));
        setDataSource(products);
      } catch (error) {
        message.error('Failed to fetch products');
      }
    };

    fetchProducts();
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

export default Products;
