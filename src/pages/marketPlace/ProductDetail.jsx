import React, { useState } from 'react';
import CustomButton from '../../Common/Button';
import { formatToCurrency } from '../../Common/lib';
import { MapPin } from 'lucide-react';
import { Input, Spin } from 'antd';

const ProductDetail = ({
  handleBackToProducts,
  selectedProduct,
  handleAddToCart,
  loadingProductId, 
}) => {
  const [mainImage, setMainImage] = useState(selectedProduct.image[0]);
  const [quantityNumber, setQuantityNumber] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantityNumber(Number(e.target.value));
  };

  const shippingFees = parseFloat(selectedProduct.shippingFees) || 0;
  const importFees = parseFloat(selectedProduct.importFees) || 0;

  const totalFees = shippingFees + importFees;

  // Normal delivery days based on user's location
  const deliveryDate = <p className="font-semibold">Wednesday, August 21</p>;

  // Fastest delivery based on products being shipped to the location within 48 hrs
  const fastDeliveryDate = (
    <p className="inline">
      <span className="font-semibold">Monday, August 5</span> Order within{' '}
      <span className="text-primary font-medium">22 hrs 25 mins</span>
    </p>
  );

  const loggedInUser = [
    { firstName: 'Brandon', city: 'Nairobi', address: '10200' },
  ];

  const shippingInformation = [
    {
      text: 'Ships from',
      info: `${selectedProduct.vendorCountry} - ${selectedProduct.vendorCity}`,
    },
    {
      text: 'Sold by',
      info: selectedProduct.vendorsName,
    },
    {
      text: 'Returns',
      info: '30-day refund/replacement',
    },
    {
      text: 'Payment',
      info: 'Secure Transactions',
    },
    {
      text: 'Customer Service',
      info: 'Genesis 254',
    },
  ];

  return (
    <div className="md:p-4">
      <button
        className="mb-4 text-primary font-semibold"
        onClick={handleBackToProducts}
      >
        Back to Products
      </button>
      <div className="grid md:grid-cols-7 gap-4">
        <div className="col-span-3">
          <div className="flex gap-2">
            {/* Thumbnail Images */}
            <div className="grid gap-2">
              {selectedProduct.image.map((img, index) => (
                <img
                  key={index}
                  className="h-[80px] w-[60px] hover:border-4 border-primary rounded-md transition-all cursor-pointer object-cover"
                  src={img}
                  alt={`${selectedProduct.nameOfProduct}-thumbnail-${index}`}
                  onMouseEnter={() => setMainImage(img)} // Change main image on hover
                />
              ))}
            </div>

            {/* Main Image */}
            <img
              className="h-[344px] min-w-[275px] w-full md:w-[320px]"
              src={mainImage}
              alt={selectedProduct.nameOfProduct}
            />
          </div>
        </div>
        <div className="col-span-2">
          {/* Additional Product Details */}
          <p className="text-analogous_green cursor-pointer font-semibold hover:opacity-80 text-sm">
            Visit the {selectedProduct.vendorsName} store.
          </p>
          <p className="text-lg font-bold">{selectedProduct.nameOfProduct}</p>
          <p className="mt-2">{selectedProduct.shortDescription}</p>
          <p className="mt-2.5 text-2xl font-semibold">
            <span className="text-sm align-top">$</span>
            {selectedProduct.price}
          </p>
          <p className="mt-2 text-sm font-semibold hover:opacity-80 text-primary cursor-pointer">
            {selectedProduct.shipping}
          </p>
          <p className="mt-2 text-triadic_red font-semibold">
            Only {selectedProduct.numberInStock} left in stock - order soon.
          </p>
          <div className="mt-4">
            <p className="font-bold">Product Details</p>
            {selectedProduct.productDetails.map((detail, index) => (
              <div key={index} className="grid grid-cols-2">
                <p className="font-semibold text-sm">{detail.text}</p>
                <p className="text-sm">{detail.instructions}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 space-y-3 border px-2 rounded-xl">
          <p className="mt-2.5 text-2xl font-semibold">
            <span className="text-sm align-top">$</span>
            {selectedProduct.price}
          </p>
          <p>{formatToCurrency(totalFees)} Shipping and Import fees</p>
          <p className="text-sm">
            Delivery: <span>{deliveryDate}</span>
          </p>
          <p className="text-sm">
            Or fastest delivery: <span>{fastDeliveryDate}</span>
          </p>
          <div className="flex gap-1 cursor-pointer transition-all duration-200 hover:text-primary text-[12px] text-complementary_1">
            <MapPin className="size-4 mt-0.5" />
            {loggedInUser.map((user, index) => (
              <p key={index}>
                Deliver to {user.firstName} - {user.city} {user.address}
              </p>
            ))}
          </div>
          <p className="font-semibold text-xl text-analogous_green">In Stock</p>
          <div className="flex gap-2">
            <label>Quantity</label>{' '}
            <Input
              type="number"
              min="1"
              value={quantityNumber}
              onChange={handleQuantityChange}
              placeholder="Enter Quantity"
            />
          </div>

          <CustomButton
            onClick={() => handleAddToCart(selectedProduct, quantityNumber)}
            className="rounded-[20px] bg-complementary w-full"
            disabled={loadingProductId === selectedProduct.userId}
          >
            {loadingProductId === selectedProduct.userId ? <Spin /> : 'Add to cart'}
          </CustomButton>
          <CustomButton className="rounded-[20px] bg-complementary/80 w-full">
            Buy Now
          </CustomButton>
          <div className='py-4'>
            {shippingInformation.map((ship, index) => (
              <div key={index} className="grid grid-cols-3">
                <p className="font-semibold text-[10px]">{ship.text}</p>
                <p className="text-[12px] col-span-2 ml-2">{ship.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
