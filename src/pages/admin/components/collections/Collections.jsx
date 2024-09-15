import { Checkbox, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { getCollections } from "../../../../Api/api";

const Collections = ({ handleSidebarClickSecond }) => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await getCollections();
        const collectionsData = response.map((collection, index) => ({
          key: index + 1,
          checkbox: <Checkbox />,
          id: collection.id,
          collectionName: collection.name,
          code: collection.code,
        }));
        setDataSource(collectionsData);
      } catch (error) {
        console.log(error);
        message.error('Failed to fetch collections');
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="overflow-auto w-[95%] mx-[auto]">
      <div className=" md:mx-[70px]">
        <div className="flex justify-between my-[30px]">
          <p className="text-[24px] font-semibold">Collections</p>
          <button onClick={() => handleSidebarClickSecond("newCollection")} className="border-2 px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
            New Collection
          </button>
        </div>
        <div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 10 }}
            className="overflow-auto bg-white shadow-custom rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

const columns = [
  {
    title: "Select",
    dataIndex: "checkbox",
  },
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Collection Name",
    dataIndex: "collectionName",
  },
  {
    title: "Code",
    dataIndex: "code",
  },
];

export default Collections;
