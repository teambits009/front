import { LockIcon, Plus } from 'lucide-react';
import React, { useContext, useState } from 'react';
import PopoverReturnToCart from './PopoverReturnToCart';
import AddressModal from './AddressModal';
import { Radio } from 'antd';
import PaymentModal from './PaymentModal';
import genesis from '../../../Common/Assets/gennesiisn.jpg';
import { CartContext } from '../../../context';

const Checkout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPaymentCollapsed, setIsPaymentCollapsed] = useState(false);
  const [isOfferCollapsed, setIsOfferCollapsed] = useState(false);
  const [isItemscollapsed, setIsItemscollapsed] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { totalCartItemsSelected, totalCostOfSelectedItems } =
    useContext(CartContext);

  const handleSaveAddress = (address) => {
    setShippingAddress(address);
    setIsCollapsed(false);
    setIsEditing(false);
  };

  const handleEditAddress = () => {
    setIsEditing(true);
    setIsCollapsed(true);
  };

  return (
    <div className="">
      <div className=" bg-gradient-to-t from-[#f1f1f1] to-gray-200 border-b-2 border-gray-300">
        <nav className="flex p-3 w-[80%] mx-auto justify-between">
          <img className="h-[45px] w-[45px]" src={genesis} alt="genesis logo" />
          <div className="flex gap-1">
            <p>Checkout</p>
            (<PopoverReturnToCart />)
          </div>
          <LockIcon />
        </nav>
      </div>
      <div className="w-[80%] grid grid-cols-4 gap-5 mt-3 mx-auto">
        <div className="col-span-3">
          <div className="flex gap-5 p-2">
            <p
              className={`font-semibold text-xl ${
                isCollapsed ? 'text-primary' : ''
              }`}
            >
              1
            </p>
            <div className="grid w-full gap-4">
              <div className="flex justify-between">
                <p
                  className={`font-semibold text-xl ${
                    isCollapsed ? 'text-primary' : ''
                  }`}
                >
                  Choose a shipping address
                </p>
                {shippingAddress ? (
                  <div className={` ${isCollapsed ? 'hidden' : 'grid'}`}>
                    <p>{shippingAddress.fullName}</p>
                    <p>{shippingAddress.city}</p>
                    <p>{shippingAddress.zipCode}</p>
                  </div>
                ) : (
                  <p>No shipping address added</p>
                )}
                <div>
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-analogous_green font-semibold hover:underline hover:text-triadic_red"
                  >
                    {isCollapsed ? 'Close' : 'Change'}
                  </button>
                </div>
              </div>
              {isCollapsed && (
                <div className="border border-gray-300 rounded-xl p-4">
                  <p className="font-semibold text-xl">Your addresses</p>
                  <hr className="my-1.5 border-t border-gray-300" />
                  {shippingAddress && (
                    <div className="flex gap-1">
                      <Radio checked />
                      <p className="font-semibold">
                        {shippingAddress.fullName},
                      </p>
                      <p>{shippingAddress.city},</p>
                      <p>{shippingAddress.zipCode}</p>
                      <button
                        onClick={handleEditAddress}
                        className="text-analogous_green hover:underline hover:text-triadic_red"
                      >
                        Edit address
                      </button>
                    </div>
                  )}
                  <div className="flex gap-1 items-center">
                    <Plus className="text-gray-300 size-5" />
                    <AddressModal
                      onSaveAddress={handleSaveAddress}
                      existingAddress={isEditing ? shippingAddress : null}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr className="my-1.5 border-t border-gray-300" />
          <div className="flex gap-5 p-2">
            <p
              className={`font-semibold text-xl ${
                isPaymentCollapsed ? 'text-primary' : ''
              }`}
            >
              2
            </p>
            <div className="grid w-full gap-4">
              <div className="flex justify-between">
                <p
                  className={`font-semibold text-xl ${
                    isPaymentCollapsed ? 'text-primary' : ''
                  }`}
                >
                  Choose a payment method
                </p>
                <button
                  onClick={() => setIsPaymentCollapsed(!isPaymentCollapsed)}
                  className="text-analogous_green font-semibold hover:underline hover:text-triadic_red"
                >
                  {isPaymentCollapsed ? 'Close' : 'Change'}
                </button>
              </div>
              {isPaymentCollapsed && (
                <div className="rounded-xl grid gap-3 border p-4 border-gray-300">
                  <p className="font-semibold text-xl">
                    Your credit and debit cards
                  </p>
                  <hr className="mb-1.5 border-t border-gray-300" />
                  <PaymentModal />
                  <p className="font-semibold text-xl">Payment plans</p>
                  <hr className="mb-1.5 border-t border-gray-300" />
                  <p>Buy now Pay later services coming soon</p>
                </div>
              )}
            </div>
          </div>
          <hr className="my-1.5 border-t border-gray-300" />
          <div className="flex gap-5 p-2">
            <p
              className={`font-semibold text-xl ${
                isOfferCollapsed ? 'text-primary' : ''
              }`}
            >
              3
            </p>
            <div className="grid w-full gap-4">
              <div className="flex justify-between">
                <p
                  className={`font-semibold text-xl ${
                    isOfferCollapsed ? 'text-primary' : ''
                  }`}
                >
                  Offers
                </p>
                <button
                  onClick={() => setIsOfferCollapsed(!isOfferCollapsed)}
                  className="text-analogous_green font-semibold hover:underline hover:text-triadic_red"
                >
                  {isOfferCollapsed ? 'Close' : 'Change'}
                </button>
              </div>
              {isOfferCollapsed && (
                <div className="border p-4 rounded-xl">
                  <p>Offers coming soon</p>
                </div>
              )}
            </div>
          </div>
          <hr className="my-1.5 border-t border-gray-300" />
          <div className="flex gap-5 p-2">
            <p
              className={`font-semibold text-xl ${
                isItemscollapsed ? 'text-primary' : ''
              }`}
            >
              4
            </p>
            <div className="grid w-full gap-4">
              <div className="flex justify-between">
                <p
                  className={`font-semibold text-xl ${
                    isItemscollapsed ? 'text-primary' : ''
                  }`}
                >
                  Items and shipping
                </p>
                <button
                  onClick={() => setIsItemscollapsed(!isItemscollapsed)}
                  className="text-analogous_green font-semibold hover:underline hover:text-triadic_red"
                >
                  {isItemscollapsed ? 'Close' : 'Change'}
                </button>
              </div>
            </div>
          </div>
          <hr className="my-1.5 border-t border-gray-300" />
        </div>
        <div className="grid h-max gap-3 rounded-xl shadow-custom p-4">
          <p className="text-center text-sm">
            Choose a payment method to continue checking out. You'll still have
            a chance to review and edit your order before it's final.
          </p>
          <hr className="my-1.5 border-t border-gray-300" />
          <p className="font-semibold my-1.5 text-xl">Order Summary</p>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <p>Items</p>
                <p>({totalCartItemsSelected}):</p>
              </div>
              <p>${totalCostOfSelectedItems}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping & handling</p>
              <p>--</p>
            </div>
            <div className="flex justify-between">
              <p>Total before tax</p>
              <p>--</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated tax to be collected</p>
              <p>--</p>
            </div>
          </div>
          <hr className="my-1.5 border-t border-gray-300" />
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-triadic_red">Order total:</p>
            <p>--</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
