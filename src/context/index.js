import React, { createContext, useState } from 'react';
import { message } from 'antd';

// Create context
const CartContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loadingProductId, setLoadingProductId] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selected, setSelected] = React.useState('market');
  
  const handleSelected = (setting) => {
    setSelected(setting);
  };

  const loggedInUser = { firstName: 'Brandon', lastName: 'Opere' };

  const handleCheckboxChange = (productId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(productId)) {
        return prevSelectedItems.filter((id) => id !== productId);
      } else {
        return [...prevSelectedItems, productId];
      }
    });
  };

  const totalCartItemsSelected = selectedItems.length;

  const totalCostOfSelectedItems = selectedItems
    .reduce((total, productId) => {
      const item = cartItems.find(
        (item) => item?.product?.userId === productId
      );
      return item ? total + item.product.price * item.quantity : total;
    }, 0)
    .toFixed(2);


  const handleAddToCart = (product, quantity, size, color) => {
    setLoadingProductId(product.userId);
    setTimeout(() => {
      setCartItems((prevCartItems) => {
        const existingItem = prevCartItems.find(
          (item) => item.product.userId === product.userId
        );
        if (existingItem) {
          return prevCartItems.map((item) =>
            item.product.userId === product.userId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevCartItems, { product, quantity, size, color }];
        }
      });
      setLoadingProductId(null);
      message.success('Item added to cart');
    }, 1000);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const item = prevCartItems.find(
        (item) => item.product.userId === productId
      );
      if (item.quantity > 1) {
        return prevCartItems.map((item) =>
          item.product.userId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCartItems.filter(
          (item) => item.product.userId !== productId
        );
      }
    });
    message.info('Item removed from cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
    message.info('All items removed from cart');
  };

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loadingProductId,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        totalItemsInCart,
        loggedInUser,
        handleCheckboxChange,
        totalCartItemsSelected,
        totalCostOfSelectedItems,
        selectedItems,
        selected,
        handleSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, ContextProvider };
