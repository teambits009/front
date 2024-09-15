import React, { useContext } from 'react';
import Navbar from './navbar/Navbar';
import MobileNavbar from './navbar/MobileNavbar';
import Market from './Market';
import Cart from './cart/Cart';
import { CartContext } from '../../context';

const MarketPlace = () => {
  const {  selected } =
    useContext(CartContext);

  return (
    <div className="min-h-[100vh] bg-white">
      <Navbar />
      <MobileNavbar />
      {selected === 'market' && <Market />}
      {selected === 'cart' && <Cart  />}
    </div>
  );
};

export default MarketPlace;
