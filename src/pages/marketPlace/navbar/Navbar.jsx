import React, { useContext } from 'react';
import FilterPopOver from '../FilterPopOver';
import { Input } from 'antd';
import { Search } from 'lucide-react';
import CustomerAccount from '../account/CustomerAccount';
import LanguageSwitcher from '../../../translations/LanguageSwitcher';
import { ShoppingCartOutlined } from '@ant-design/icons';
import LeftDrawer from '../LeftDrawer';
import { CartContext } from '../../../context';

const Navbar = () => {
  const { totalItemsInCart, handleSelected } = useContext(CartContext);
  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <div className="hidden md:block">
      <nav className="grid md:grid-cols-5 h-20 bg-white p-4">
        <p className="font-bold text-2xl col-span-2 md:col-span-1 text-center md:text-left text-primary">
          Genesis Market Place
        </p>
        <div className="col-span-2 w-full mx-auto border-2 h-12 rounded-md border-gray-300 flex relative">
          <FilterPopOver />
          <Input
            placeholder="Search Genesis Market Place"
            className="pl-[70px] bordr-2 border-primary rounded-md bg-white"
          />
          <div className="absolute right-0 cursor-pointer p-2 rounded-md h-full bg-primary/30 hover:bg-primary/50 flex items-center justify-center">
            <Search className="size-6" />
          </div>
        </div>
        <div className="md:flex md:ml-3 items-center col-span-2 justify-between hidden w-full">
          <CustomerAccount />
          <div className="grid text-sm cursor-pointer hover:outline outline-analogous_teal p-2">
            <p>Returns</p>
            <p className="font-semibold">& Orders</p>
          </div>
          <LanguageSwitcher />
          <button
            onClick={() => handleSelected('cart')}
            className="flex justify-self-end relative justify-center hover:outline outline-analogous_teal p-2 cursor-pointer items-center"
          >
            <p className="bg-red-500 text-white text-sm rounded-full flex justify-center items-center -right-1 top-0 h-5 w-5 absolute">
              {totalItemsInCart}
            </p>
            <ShoppingCartOutlined className="text-4xl" />
          </button>
        </div>
      </nav>
      <div className="md:flex px-4 h-10 items-center hidden gap-4 w-full bg-gray-200">
        <LeftDrawer handleClick={handleClick} />
        <p className="p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          Today's Deals
        </p>
        <p className="p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          Customer Service
        </p>
        <p className="p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          Gift Cards
        </p>
        <p className="p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          Sell
        </p>
      </div>
    </div>
  );
};

export default Navbar;
