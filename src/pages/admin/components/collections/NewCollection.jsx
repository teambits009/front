import { Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import MyButton from "../button/Button";
import { createCollection } from "../../../../Api/api";

const NewCollection = ({ handleSidebarClickSecond }) => {
  const [collectionData, setCollectionData] = useState({
    name: '',
    code: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollectionData({
      ...collectionData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await createCollection(collectionData);
      message.success('Collection created successfully');
      handleSidebarClickSecond("collections");
    } catch (error) {
      message.error('Failed to create collection');
    }
  };

  return (
    <div className="md:w-[600px] w-[95%] mx-[auto]">
      <div className="flex my-[30px] gap-[20px]">
        <button onClick={() => handleSidebarClickSecond("collections")}>
          <MyButton />
        </button>
        <p className="text-[24px] font-semibold">Create A New Collection</p>
      </div>
      <div className="bg-white shadow-custom rounded-xl p-[25px] grid gap-[10px]">
        <p className="text-[20px] font-semibold">General</p>
        <label>Name</label>
        <Input
          name="name"
          placeholder="Featured Vendors"
          type="text"
          value={collectionData.name}
          onChange={handleInputChange}
          required
        />
        <label>Unique ID</label>
        <Input
          name="code"
          placeholder="featuredVendors"
          type="text"
          value={collectionData.code}
          onChange={handleInputChange}
          required
        />
        <label>Description</label>
        <TextArea
          name="description"
          value={collectionData.description}
          onChange={handleInputChange}
        />
      </div>
      <hr />
      <div className="flex justify-between my-[20px]">
        <button className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg">
          Cancel
        </button>
        <button
          className="border-2 px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewCollection;
