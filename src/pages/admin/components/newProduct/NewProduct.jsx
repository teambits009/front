import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input, Radio, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState, useEffect } from "react";
import UploadApp from "./UploadIMedia";
import MyButton from "../button/Button";
import { createProduct, editProduct, getProduct, getProducts } from "../../../../Api/api";
import { message } from 'antd';
// import { useEffect } from "react";

const NewProduct = ({ handleSidebarClickSecond, productId }) => {


  const [productData, setProductData] = useState({
    name: '',
    sku: '',
    price: '',
    description: '',
    visibility: 1,
    availability: 1,
    quantity: 0,
    image: null,
  });
  const [loading, setLoading] = useState(false);

  // ... useEffect to load product data if editing




  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const onVisibilityChange = (e) => {
    setProductData({ ...productData, visibility: e.target.value });
  };

  const onAvailabilityChange = (e) => {
    setProductData({ ...productData, availability: e.target.value });
  };

  const onImageChange = (file) => {
    setProductData({ ...productData, image: file });
  };


  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('sku', productData.sku);
      formData.append('Price', productData.price);
      formData.append('description', productData.description);
      formData.append('visibility', productData.visibility === 2);
      formData.append('availability', productData.availability === 2);
      formData.append('quantity', productData.quantity);
      if (productData.image) {
        formData.append('image', productData.image);
      }
  
      if (productId) {
        await editProduct(productId, formData);
        message.success('Product updated successfully');
      } else {
        await createProduct(formData);
        message.success('Product created successfully');
      }
  
      handleSidebarClickSecond("products");
    } catch (error) {
      message.error('An error occurred while saving the product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid overflow-auto ">
      <div className="mb-[30px] w-[95%] md:mx-[20px] mx-[auto]">
        <div className="flex my-[30px] gap-[20px]">
          <button onClick={() => handleSidebarClickSecond("products")}>
            <MyButton />
          </button>
          <p className="text-[24px] font-semibold">Create A New Product</p>
        </div>
        <div className="lg:flex gap-[30px]">
          <div className="grid gap-[20px] w-[100%]">
            <div className="mb-[10px] bg-white shadow-custom rounded-xl p-[10px] sm:p-[25px]">
              <p className="text-[20px] font-semibold">General</p>
              <form className="grid gap-[20px]">
                <div className="grid">
                  <label>Product Name</label>
                  <Input name="name" value={productData.name} onChange={onInputChange} type="text" placeholder="Name" required />
                </div>
                <div className="flex gap-[10px]">
                  <div className="grid w-[100%]">
                    <label>SKU</label>
                    <Input name="sku" value={productData.sku} onChange={onInputChange} type="text" placeholder="SKU" required />
                  </div>
                  <div className="grid w-[100%]">
                    <label>Price</label>
                    <Input name="price" value={productData.price} onChange={onInputChange} type="number" min="1" placeholder="Price" required />
                  </div>
                </div>
                <div className="grid">
                  <label>Description</label>
                  <TextArea name="description" value={productData.description} onChange={onInputChange} />
                </div>
              </form>
            </div>
            <div className="bg-white shadow-custom rounded-xl p-[20px] font-semibold h-max mb-[20px]">
              <p>Upload Product Image</p>
              <UploadApp onImageChange={onImageChange} />
            </div>
          </div>
          <div className="bg-white w-[100%] grid gap-[30px] shadow-custom rounded-xl p-[20px] h-max">
            <div className="text-[18px] font-semibold">
              <p>Visibility</p>
              <Radio.Group
                onChange={onVisibilityChange}
                value={productData.visibility}
                className="grid font-normal gap-[10px] pt-[10px]"
              >
                <Radio value={1}>Not Visible</Radio>
                <Radio value={2}>Visible</Radio>
              </Radio.Group>
            </div>
            <div className="text-[18px] font-semibold">
              <p>Stock Availability</p>
              <Radio.Group
                onChange={onAvailabilityChange}
                value={productData.availability}
                className="grid font-normal gap-[10px] pt-[10px]"
              >
                <Radio value={1}>No</Radio>
                <Radio value={2}>Yes</Radio>
              </Radio.Group>
            </div>
            <div>
              <label className="text-[18px] font-semibold">Quantity</label>
              <Input
                name="quantity"
                value={productData.quantity}
                onChange={onInputChange}
                className="mt-[10px]"
                placeholder="Quantity"
                type="number"
                min="1"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:mt-[0px] mt-[20px]">
          <button className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg" onClick={() => handleSidebarClickSecond("products")}>
            Cancel
          </button>
          <button
              className="border-2 font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;