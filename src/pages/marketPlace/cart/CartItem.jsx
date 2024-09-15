import { Checkbox, Divider } from 'antd';
import React from 'react';

const CartItem = ({
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
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <img className="h-30 w-20" src={image} alt={name} />
        <div className="grid">
          <p className="font-semibold">
            {name} | {description}
          </p>
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
          <div className="flex items-center">
            <button className="border h-max bg-gray-300 px-2 rounded py-0.5 font-medium">
              Qty: {quantity}
            </button>
            <Divider className="h-4 border-primary" type="vertical" />
            <button
              onClick={handleRemoveFromCart}
              className="text-sm text-analogous_teal font-medium"
            >
              Delete
            </button>
            <Divider className="h-4 border-primary" type="vertical" />
            <button className="text-sm text-analogous_teal font-medium">
              Save for later
            </button>
            <Divider className="h-4 border-primary" type="vertical" />
            <button className="text-sm text-analogous_teal font-medium">
              Share
            </button>
          </div>
        </div>
      </div>

      <p className="font-bold text-xl">${price}</p>
    </div>
  );
};

export default CartItem;
