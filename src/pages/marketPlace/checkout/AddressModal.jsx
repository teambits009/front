import React, { useEffect, useState } from 'react';
import { Input, Modal, message } from 'antd';
import CustomButton from '../../../Common/Button';

const AddressModal = ({ onSaveAddress, existingAddress }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState({
    country: '',
    fullName: '',
    phone: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (existingAddress) {
      setAddress(existingAddress);
      showModal();
    }
  }, [existingAddress]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onSaveAddress(address);
      setIsModalOpen(false);
      message.success('Address saved successfully');
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!address.country) newErrors.country = 'Country/Region is required';
    if (!address.fullName) newErrors.fullName = 'Full name is required';
    if (!address.phone) newErrors.phone = 'Phone number is required';
    if (!address.streetAddress) newErrors.streetAddress = 'Address is required';
    if (!address.city) newErrors.city = 'City is required';
    if (!address.state) newErrors.state = 'State/Province/Region is required';
    if (!address.zipCode) newErrors.zipCode = 'Zip Code is required';
    return newErrors;
  };

  return (
    <>
      <button
        onClick={showModal}
        className="text-analogous_green hover:underline hover:text-triadic_red"
      >
        Add a new address
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <p className="font-semibold text-xl">Enter a new shipping address</p>
        <hr className="my-1.5 border-t border-gray-300" />
        <p className="text-2xl font-bold">
          {existingAddress ? 'Edit your address' : 'Add a new address'}
        </p>
        <p className="font-sm text-gray-600">
          Fields with asterisk * are required
        </p>
        <form className="grid gap-4">
          <div>
            <label className="font-semibold">Country/Region*</label>
            <Input
              name="country"
              type="text"
              placeholder="Enter your country"
              value={address.country}
              onChange={handleChange}
              required
            />
            {errors.country && <p className="text-red-600">{errors.country}</p>}
          </div>
          <div>
            <label className="font-semibold">
              Full name (First and Last name)*
            </label>
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your name"
              value={address.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && (
              <p className="text-red-600">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="font-semibold">Phone number *</label>
            <Input
              name="phone"
              type="number"
              min={6}
              placeholder="Enter your phone number"
              value={address.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="text-red-600">{errors.phone}</p>}
            <p className="text-sm text-gray-600">
              May be used to assist delivery
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Address *</label>
            <Input
              name="streetAddress"
              type="text"
              placeholder="Street address or P.O. Box"
              value={address.streetAddress}
              onChange={handleChange}
              required
            />
            {errors.streetAddress && (
              <p className="text-red-600">{errors.streetAddress}</p>
            )}
            <Input
              name="apartment"
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
              value={address.apartment}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-semibold">City *</label>
            <Input
              name="city"
              type="text"
              placeholder="Enter your city"
              value={address.city}
              onChange={handleChange}
              required
            />
            {errors.city && <p className="text-red-600">{errors.city}</p>}
          </div>
          <div>
            <label className="font-semibold">State/ Province/ Region *</label>
            <Input
              name="state"
              type="text"
              placeholder="Enter your state"
              value={address.state}
              onChange={handleChange}
              required
            />
            {errors.state && <p className="text-red-600">{errors.state}</p>}
          </div>
          <div>
            <label className="font-semibold">ZIP *</label>
            <Input
              name="zipCode"
              type="text"
              placeholder="Enter your zip code"
              value={address.zipCode}
              onChange={handleChange}
              required
            />
            {errors.zipCode && <p className="text-red-600">{errors.zipCode}</p>}
          </div>
          <CustomButton
            onClick={handleOk}
            className="rounded-[30px] bg-complementary mt-4"
          >
            Use this address
          </CustomButton>
        </form>
      </Modal>
    </>
  );
};

export default AddressModal;
