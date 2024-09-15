import React, { useContext } from 'react';
import CustomButton from '../../../Common/Button';
import { CartContext } from '../../../context';
import { Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const MobileCart = () => {
  const { totalCartItemsSelected, totalCostOfSelectedItems, handleSelected } =
    useContext(CartContext);

  return (
    <div className="grid md:hidden">
      <div className="flex mb-4 justify-between">
        <div className="flex gap-2 items-center">
          <ArrowLeftOutlined
            className="text-2xl hover:opacity-70"
            onClick={() => handleSelected('market')}
          />
          <p className="text-2xl font-semibold">Shopping Cart</p>
        </div>
        <p className="font-medium text-xl">
          Subtotal({totalCartItemsSelected}):{' '}
          <span className="font-semibold">${totalCostOfSelectedItems}</span>
        </p>
      </div>
      <CustomButton className="rounded-[30px] bg-complementary">
        Proceed to Checkout({totalCartItemsSelected} items)
      </CustomButton>
      <Divider />
    </div>
  );
};

export default MobileCart;
