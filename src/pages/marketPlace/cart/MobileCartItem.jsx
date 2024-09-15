import { Checkbox } from 'antd';
import React from 'react';

const MobileCartItem = ({
  image,
  name,
  inStock,
  description,
  quantity,
  price,
  size,
  color,
  isChecked,
  handleCheckboxChange,
  handleRemoveFromCart,
}) => {
  return (
    <div className="flex md:hidden bg-[#f1f1f1] gap-2">
      <div className="relative">
        <Checkbox
          className="absolute"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="grid content-between h-full">
          <img className="h-[150px] w-[270px]" src={image} alt={name} />
          <button className="border h-max bg-gray-300 px-2 rounded py-0.5 font-medium">
            Qty: {quantity}
          </button>
        </div>
      </div>
      <div className="grid">
        <p className="font-medium">
          {name} | {description}
        </p>
        <span className="font-semibold text-black/90 flex text-2xl px-2">
          <span className="text-[12px] align-top">$</span>
          {price}
        </span>
        <p className="font-medium text-sm text-analogous_green">
          {inStock ? <span>In Stock</span> : <span>Not in stock</span>}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Size: </span>
          {size}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Color: </span>
          {color}
        </p>
        <div className="flex m-2 justify-between">
          <button
            onClick={handleRemoveFromCart}
            className="text-sm rounded-2xl p-1.5 border border-gray-400 font-medium"
          >
            Delete
          </button>
          <button className="text-sm rounded-2xl p-1.5 border border-gray-500 font-medium">
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCartItem;
