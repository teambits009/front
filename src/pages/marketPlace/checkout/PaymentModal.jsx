import React, { useState } from 'react';
import { Input, Modal } from 'antd';
import { Plus } from 'lucide-react';
import debitCard from '../assets/basicCreditCard.png';
import { PaymentIcon } from 'react-svg-credit-card-payment-icons';
import CustomButton from '../../../Common/Button';

const PaymentModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={showModal} className="flex gap-2 items-center">
        <Plus className="text-gray-300 size-5" />
        <img className="w-[40px] h-[25px]" src={debitCard} alt="debit card" />
        <p className="ml-2 text-analogous_green hover:underline hover:text-triadic_red">
          Add a credit or debit card
        </p>
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        width={700}
      >
        <p className="font-semibold text-xl">Add a credit or debit card</p>
        <hr className="my-1.5 border-t border-gray-300" />
        <form>
          <div className="grid grid-cols-5 gap-2">
            <div className="grid gap-2 col-span-3">
              <div className="grid grid-cols-3">
                <label className="font-semibold">Card number</label>
                <input
                  className="border col-span-2 w-full p-1.5 rounded-md focus:outline-none focus:border focus:border-primary"
                  required
                  placeholder="Enter card number"
                />
              </div>
              <div className="grid grid-cols-3">
                <label className="font-semibold w-max text-sm">
                  Name on card
                </label>
                <input
                  className="border col-span-2 w-full p-1.5 rounded-md focus:outline-none focus:border focus:border-primary"
                  required
                  placeholder="Enter name"
                />
              </div>
              <div className="grid grid-cols-3">
                <p className="font-semibold w-full">Expiration date</p>
                <div className="flex col-span-2 gap-2">
                  <input
                    className="border w-full p-1.5 rounded-md focus:outline-none focus:border focus:border-primary"
                    required
                    placeholder="Enter date"
                  />
                  <input
                    className="border w-full p-1.5 rounded-md focus:outline-none focus:border focus:border-primary"
                    required
                    placeholder="Enter year"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="grid font-semibold">
                  <p className="w-full">Security Code</p>
                  <label className="text-center">(CVV/CVC)</label>
                </div>
                <div className="flex gap-2 col-span-2 items-center">
                  <input
                    className="border col-span-2 w-full p-1.5 rounded-md focus:outline-none focus:border focus:border-primary"
                    required
                    placeholder="Enter CVV/CVC code"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <p>Genesis Accepts all major credit and debit cards</p>
              <div className="mx-5 flex gap-3 flex-wrap">
                <PaymentIcon type="visa" format="flatRounded" width={40} />
                <PaymentIcon type="discover" format="flatRounded" width={40} />
                <PaymentIcon type="maestro" format="flatRounded" width={40} />
                <PaymentIcon
                  type="mastercard"
                  format="flatRounded"
                  width={40}
                />
                <PaymentIcon type="mir" format="flatRounded" width={40} />
                <PaymentIcon type="jcb" format="flatRounded" width={40} />
                <PaymentIcon type="unionpay" format="flatRounded" width={40} />
                <PaymentIcon type="diners" format="flatRounded" width={40} />
                <PaymentIcon type="generic" format="flatRounded" width={40} />
                <PaymentIcon type="code" format="flatRounded" width={40} />
              </div>
            </div>
          </div>
          <hr className="my-1.5 border-t border-gray-300" />
          <CustomButton
            type="submit"
            className="rounded-[30px] bg-complementary"
          >
            Add your card
          </CustomButton>
        </form>
      </Modal>
    </>
  );
};
export default PaymentModal;
