import { Checkbox, Input, Radio, DatePicker, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState, useEffect } from "react";
import MyButton from "../button/Button";
import { createCoupon, editCoupon, getCoupon } from "../../../../Api/api";
import moment from 'moment';

const NewCoupon = ({ handleSidebarClickSecond, couponId }) => {
  const [discountType, setDiscountType] = useState('Fixed discount to entire order');
  const [couponData, setCouponData] = useState({
    code: '',
    description: '',
    discount: 0,
    free_shipping: false,
    dateRange: [],
    start_date: '',
    end_date: '',
    discount_type: discountType,
    maximum_purchase_amount: 0,
    minimun_purchase_quantity: 0,
  });

  useEffect(() => {
    if (couponId) {
      getCoupon(couponId).then(response => {
        const data = response.data;
        setCouponData({
          code: data.code,
          description: data.description,
          discount: data.discount,
          free_shipping: data.free_shipping,
          dateRange: [moment(data.start_date), moment(data.end_date)],
          start_date: data.start_date,
          end_date: data.end_date,
          maximum_purchase_amount: data.maximum_purchase_amount,
          minimun_purchase_quantity: data.minimun_purchase_quantity,
        });
        setDiscountType(data.discount_type);
      }).catch(error => {
        message.error('Failed to fetch coupon data');
      });
    }
  }, [couponId]);

  const onDiscountTypeChange = (e) => {
    setDiscountType(e.target.value);
    setCouponData({ ...couponData, discount_type: e.target.value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCouponData({
      ...couponData,
      [name]: value,
    });
  };

  const handleDateChange = (dates, dateStrings) => {
    setCouponData({
      ...couponData,
      dateRange: dates,
      start_date: dateStrings[0],
      end_date: dateStrings[1],
    });
  };

  const handleCheckboxChange = (e) => {
    setCouponData({
      ...couponData,
      free_shipping: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const couponPayload = {
        ...couponData,
        discount: parseInt(couponData.discount, 10),
        maximum_purchase_amount: parseInt(couponData.maximum_purchase_amount, 10),
        minimun_purchase_quantity: parseInt(couponData.minimun_purchase_quantity, 10),
        start_date: couponData.start_date,
        end_date: couponData.end_date,
        discount_type: discountType,
      };
      
      if (couponId) {
        await editCoupon(couponId, couponPayload);
        message.success('Coupon updated successfully');
      } else {
        await createCoupon(couponPayload);
        message.success('Coupon created successfully');
      }
      handleSidebarClickSecond("coupons");
    } catch (error) {
      message.error('An error occurred while saving the coupon');
    }
  };

  return (
    <div className="overflow-auto">
      <div className="md:mx-[20px] w-[95%] mx-[auto] grid gap-[20px]">
        <div className="flex mt-[30px] my-[10px] gap-[20px]">
          <button onClick={() => handleSidebarClickSecond("coupons")}>
            <MyButton />
          </button>
          <p className="text-[24px] font-semibold">Create A New Coupon</p>
        </div>
        <form className="grid gap-[20px]" onSubmit={handleSubmit}>
          <div className="shadow-custom bg-white p-[25px] rounded-xl">
            <p className="text-[20px] font-semibold">General</p>
            <div className="grid gap-[15px]">
              <div className="grid gap-[5px]">
                <label>Coupon code</label>
                <Input
                  name="code"
                  placeholder="Enter coupon code"
                  value={couponData.code}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid">
                <label>Description</label>
                <TextArea
                  name="description"
                  placeholder="Enter description"
                  value={couponData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="md:flex gap-[10px] justify-between">
                <div className="grid">
                  <label>Discount amount</label>
                  <Input
                    name="discount"
                    type="number"
                    placeholder="Discount amount"
                    value={couponData.discount}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid w-[100%]">
                  <Space direction="vertical" size={12}>
                    <p>Pick start and end date</p>
                    <DatePicker.RangePicker
                      format="YYYY-MM-DD"
                      onChange={handleDateChange}
                      value={couponData.dateRange}
                    />
                  </Space>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <Checkbox
                  checked={couponData.free_shipping}
                  onChange={handleCheckboxChange}
                />
                <p>Free shipping?</p>
              </div>
            </div>
          </div>
          <div className="shadow-custom bg-white rounded-xl p-[25px]">
            <p className="text-[20px] font-semibold mb-[10px]">Discount type</p>
            <Radio.Group
              onChange={onDiscountTypeChange}
              className="grid gap-[10px]"
              value={discountType}
            >
              <Radio value="Fixed discount to entire order">Fixed discount to entire order</Radio>
              <Radio value="Percentage discount to entire order">Percentage discount to entire order</Radio>
              <Radio value="Fixed discount to specific products">Fixed discount to specific products</Radio>
              <Radio value="Percentage discount to specific products">Percentage discount to specific products</Radio>
              <Radio value="Buy X get Y">Buy X get Y</Radio>
            </Radio.Group>
          </div>
          <div className="shadow-custom bg-white rounded-xl p-[25px]">
            <p className="text-[20px] font-semibold mb-[15px]">
              Order Conditions
            </p>
            <label>Minimum purchase amount</label>
            <Input
              name="maximum_purchase_amount"
              className="my-[10px]"
              type="number"
              min="1"
              placeholder="Enter minimum purchase amount"
              value={couponData.maximum_purchase_amount}
              onChange={handleInputChange}
              required
            />
            <label>Minimum purchase quantity</label>
            <Input
              name="minimun_purchase_quantity"
              className="my-[10px]"
              type="number"
              min="1"
              placeholder="Enter minimum purchase quantity"
              value={couponData.minimun_purchase_quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between md:mb-[50px]">
            <button
              type="button"
              className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg"
              onClick={() => handleSidebarClickSecond("coupons")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border-2 font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCoupon;
