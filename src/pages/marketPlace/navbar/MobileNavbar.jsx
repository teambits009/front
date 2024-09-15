import React, { useContext } from 'react';
import {
  RightOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { CartContext } from '../../../context';
import MobileLeftDrawer from './MobileLeftDrawer';
import { Search } from 'lucide-react';
import AccountDrawer from '../account/AccountDrawer';

const MobileNavbar = () => {
  const { totalItemsInCart, handleSelected } = useContext(CartContext);

  return (
    <nav className="md:hidden space-y-2 text-white bg-black/70 p-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <MobileLeftDrawer />
          Genesis
        </div>
        <div className="flex gap-2">
          <AccountDrawer />
          <button
            onClick={() => handleSelected('cart')}
            className="flex justify-self-end relative justify-cente cursor-pointer items-center"
          >
            <p className="bg-red-500 text-white text-sm rounded-full flex justify-center items-center -right-1 top-0 h-5 w-5 absolute">
              {totalItemsInCart}
            </p>
            <ShoppingCartOutlined className="text-4xl" />
          </button>
        </div>
      </div>
      <div className="col-span-2 w-full mx-auto rounded-md flex relative">
        <input
          type="text"
          placeholder="Search Genesis Market Place"
          className="rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-white"
        />

        <div className="absolute right-0 cursor-pointer p-2 rounded-md h-full bg-primary/50 flex items-center justify-center">
          <Search className="size-6" />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
