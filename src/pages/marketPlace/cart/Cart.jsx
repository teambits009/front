import { Divider } from 'antd';
import React, { useContext } from 'react';
import CartItem from './CartItem';
import CustomButton from '../../../Common/Button';
import { CartContext } from '../../../context';
import MobileCartItem from './MobileCartItem';
import MobileCart from './MobileCart';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    handleRemoveFromCart,
    handleClearCart,
    handleCheckboxChange,
    totalCartItemsSelected,
    totalCostOfSelectedItems,
    selectedItems,
    handleSelected,
  } = useContext(CartContext);

  return (
    <div className="md:p-4 grid md:grid-cols-4 gap-2 bg-[#f7f7f7]">
      <div className="grid bg-white p-2 rounded-xl md:col-span-3">
        <div className="md:flex hidden justify-between items-center">
          <div className="flex gap-2 items-center">
            <ArrowLeftOutlined
              className="text-2xl hover:opacity-70"
              onClick={() => handleSelected('market')}
            />
            <p className="text-2xl font-semibold">Shopping Cart</p>
          </div>

          <button
            onClick={handleClearCart}
            className="text-primary font-medium"
          >
            Deselect all items
          </button>
        </div>
        <p className="text-right hidden md:block opacity-80">Price</p>
        <Divider className="md:block hidden" />
        <MobileCart />
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item?.product?.userId || Math.random()} // Provide a fallback key in case item.product.userId is undefined
              className="border border-gray-300 md:p-2 rounded grid gap-2 mb-3"
            >
              <div className="md:block hidden">
                <CartItem
                  key={item?.product?.userId || Math.random()}
                  image={item?.product?.image?.[0]}
                  name={item?.product?.nameOfProduct}
                  inStock={item?.product?.numberInStock > 0}
                  description={item?.product?.shortDescription}
                  quantity={item?.quantity}
                  price={item?.product?.price}
                  size={item?.size}
                  color={item?.color}
                  isChecked={selectedItems.includes(item?.product?.userId)}
                  handleCheckboxChange={() =>
                    handleCheckboxChange(item?.product?.userId)
                  }
                  handleRemoveFromCart={() =>
                    handleRemoveFromCart(item?.product?.userId)
                  }
                />
              </div>
              <div className="md:hidden">
                <MobileCartItem
                  key={item?.product?.userId || Math.random()}
                  image={item?.product?.image?.[0]}
                  name={item?.product?.nameOfProduct}
                  inStock={item?.product?.numberInStock > 0}
                  description={item?.product?.shortDescription}
                  quantity={item?.quantity}
                  price={item?.product?.price}
                  size={item?.size}
                  color={item?.color}
                  isChecked={selectedItems.includes(item?.product?.userId)}
                  handleCheckboxChange={() =>
                    handleCheckboxChange(item?.product?.userId)
                  }
                  handleRemoveFromCart={() =>
                    handleRemoveFromCart(item?.product?.userId)
                  }
                />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="gap-4 hidden md:flex flex-col ">
        <div className="border h-max bg-white rounded-xl p-2 grid gap-2">
          <p className="text-xl">
            Subtotal({totalCartItemsSelected}):{' '}
            <span className="font-medium">${totalCostOfSelectedItems}</span>
          </p>
          <Link to={'/checkout'}>
            <CustomButton className="rounded-[30px] bg-complementary">
              Proceed to Checkout
            </CustomButton>
          </Link>
        </div>
        <div className="flex h-max gap-2 bg-white p-2 rounded-xl border">
          <img src="" alt="" />
          <div className="grid">
            <p className="font-semibold text-sm">
              Genesis offers deliveries around the world. Click the button below
              to explore our shipping services.
            </p>
            <CustomButton className="rounded-[30px] bg-complementary">
              Genesis Shipping Services
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
