import { Popover } from 'antd';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context';
import CustomButton from '../../../Common/Button';
import { Link } from 'react-router-dom';

const PopoverReturnToCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalCartItemsSelected } = useContext(CartContext);

  return (
    <Popover
      open={isOpen}
      placement="bottom"
      content={
        <div>
          <p>Are you sure you want to return to your Shopping Cart?</p>
          <div className="flex justify-between">
            <CustomButton
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-[30px]"
            >
              Stay in checkout
            </CustomButton>
            <Link to={'/market-place'}>
              <CustomButton className="bg-complementary rounded-[30px]">
                Return to Marketplace
              </CustomButton>
            </Link>
          </div>
        </div>
      }
    >
      <div onClick={() =>setIsOpen(!isOpen)} className="font-semibold cursor-pointer text-analogous_green">
        {totalCartItemsSelected} items
      </div>
    </Popover>
  );
};

export default PopoverReturnToCart;
