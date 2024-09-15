import React, { useContext, useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { AlignJustify } from 'lucide-react';
import { departments, shoppingIdeas } from '../data';
import { CartContext } from '../../../context';

const MobileLeftDrawer = ({ handleClick }) => {
  const [open, setOpen] = useState(false);

  const { loggedInUser } = useContext(CartContext);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <div onClick={showDrawer} className="flex gap-1  cursor-pointer">
          <AlignJustify />
        </div>
      </Space>
      <Drawer
        title={
          <div className="bg-black/70 text-white p-2 flex justify-between items-start">
            <p className="font-semibold text-xl">Browse Genesis</p>
            <Button
              type="text"
              onClick={onClose}
              icon={<CloseOutlined />}
              className="text-white"
            />
          </div>
        }
        placement="left"
        width={300}
        onClose={onClose}
        open={open}
        closeIcon={false}
        styles={{
          header: {
            padding: 0,
          },
          body: {
            padding: 0,
          },
        }}
      >
        <div className="p-4">
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
          <p className="font-semibold text-xl">Departments </p>
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
      </Drawer>
    </>
  );
};

export default MobileLeftDrawer;
