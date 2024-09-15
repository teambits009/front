import React, { useContext, useState } from 'react';
import { CartContext } from '../../context';
import { departments, marketPlaceProducts, shoppingIdeas } from './data';
import ProductDetail from './ProductDetail';
import CustomButton from '../../Common/Button';
import { Spin } from 'antd';

const Market = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { loadingProductId, handleAddToCart } = useContext(CartContext);
  const handleClick = (value) => {
    console.log(value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="grid md:grid-cols-5">
      <div className="p-4 lg:block hidden">
        <p className="font-semibold text-xl">Shopping Ideas</p>
        {shoppingIdeas.map((shop) => (
          <button
            className="grid my-2 hover:text-primary transition-all duration-200"
            key={shop.value}
            onClick={() => handleClick(shop.value)}
          >
            {shop.text}
          </button>
        ))}
        <p className="font-semibold text-xl">Departments</p>
        {departments.map((department) => (
          <button
            className="grid my-2 hover:text-primary transition-all duration-200"
            key={department.value}
            onClick={() => handleClick(department.value)}
          >
            {department.text}
          </button>
        ))}
      </div>
      <div className="md:col-span-5 p-4 md:p-4 lg:col-span-4">
        {selectedProduct ? (
          <ProductDetail
            handleBackToProducts={handleBackToProducts}
            selectedProduct={selectedProduct}
            handleAddToCart={handleAddToCart}
            loadingProductId={loadingProductId}
          />
        ) : (
          <div>
            <p className="font-semibold text-xl py-3">
              Welcome to our Market Place
            </p>
            <div className="grid w-full gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {marketPlaceProducts.map((product) => (
                <div
                  className="grid h-max border border-zinc-300 rounded-md cursor-pointer"
                  key={product.userId}
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    className="h-[200px] w-full border rounded-t-md"
                    src={product.image[0]}
                    alt={product.nameOfProduct}
                  />
                  <p className="hover:text-primary leading-6 font-medium px-2 cursor-pointer transition-all duration-200">
                    {product.nameOfProduct} {product.shortDescription}
                  </p>
                  <p className="font-semibold text-black/90 flex text-2xl px-2">
                    <span className="text-[12px] align-top">$</span>
                    {product.price}
                  </p>
                  <p className="px-2 text-sm cursor-pointer hover:opacity-80">
                    {product.shipping}
                  </p>
                  <p className="text-triadic_red text-sm font-semibold px-2">
                    Only {product.numberInStock} left in stock - order soon.
                  </p>
                  <CustomButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product, 1, 'M', 'Red'); // Example size and color
                    }}
                    className="mx-2 my-4 rounded-[30px] bg-complementary"
                    disabled={loadingProductId === product.userId}
                  >
                    {loadingProductId === product.userId ? (
                      <Spin />
                    ) : (
                      'Add to cart'
                    )}
                  </CustomButton>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Market;
