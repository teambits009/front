import { CaretDownOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import React from 'react';

const FilterPopOver = () => {
  const text = <span>All departments</span>;
  const content = (
    <div>
      <hr />
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Books
      </p>
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Dress
      </p>
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Household supplies
      </p>
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Kids
      </p>
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Food
      </p>
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Furniture
      </p>
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Men's shoes
      </p>
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Home & Kitchen
      </p>
      <p className="cursor-pointer hover:opacity-80 transition-all duration-150">
        Women's Fashion
      </p>
    </div>
  );
  return (
    <div>
      <Popover
        placement="bottomLeft"
        icon
        trigger="click"
        title={text}
        content={content}
      >
        <button className="flex absolute h-full px-2 font-normal text-sm gap-2 bg-gray-200 hover:bg-gray-100 transition-all duration-150  left-0 z-10 items-center justify-center">
          <p>All</p> <CaretDownOutlined />
        </button>
      </Popover>
    </div>
  );
};

export default FilterPopOver;
