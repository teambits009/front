import { Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import logo from '../landing/assets/brand/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { createCustomer, createVendor } from '../../Api/api';
import 'react-toastify/dist/ReactToastify.css';
import { message } from "antd";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    user_type: 'customer',
    password1: '',
    password2: ''
  });

  const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let response = '';
      if (formData.user_type === 'customer') {
        response = await createCustomer(formData);
      } else {
        response = await createVendor(formData);
      }

      if (response.key) {
        await delay(600);
        message.success('Welcome to the BNPL family. Sign up successful');
        navigate('/login');
      } else {
        message.error('Sign up failed. Try again later');
      }
    } catch (error) {
      console.error('Error signing up:', error.response?.data);
      
      if (error.response?.data) {
        const errorFields = ['username', 'email', 'password1', 'password2', 'non_field_errors'];
        for (const field of errorFields) {
          if (error.response.data[field]) {
            message.error(`${field}: ${error.response.data[field]}`);
            return;
          }
        }
      }
      
      message.error('An unexpected error occurred. Please try again later.');
    }
  };

  const { Option } = Select;

  return (
    <div className="bg-img flex h-[100vh] items-center justify-center">
      <div className="grid glass gap-[10px] shadow-custom md:w-[450px] w-[95%] mx-auto p-[30px] bg-white bg-opacity-70 rounded-2xl">
        <img className="place-self-center cursor-pointer" src={logo} alt="" />
        <p className="font-bold text-[34px] text-center text-[#015FF1]">
          Sign Up
        </p>
        <Form
          className="grid gap-[15px]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            required
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <Input
            required
            type="email"
            placeholder="Email Address"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Select
            defaultValue="customer"
            className="w-full"
            onChange={(value) => setFormData({ ...formData, user_type: value })}
          >
            <Option value="vendor">Vendor</Option>
            <Option value="customer">Customer</Option>
          </Select>
          <Input
            required
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password1: e.target.value })
            }
          />
          <Input
            required
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>
              setFormData({ ...formData, password2: e.target.value })
            }
          />
          <button
            className="cursor-pointer bg-[#015FF1] text-white font-semibold uppercase py-[5px] rounded-full shadow-btn bg-opacity-90"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </Form>
        <p className="text-area">
          Already have an account?{' '}
          <Link
            to="/login"
            className="cursor-pointer transition-all duration-300 ease-in-out text-[#015FF1] hover:opacity-70 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;