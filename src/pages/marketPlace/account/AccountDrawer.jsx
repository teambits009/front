import React, { useState, useContext } from 'react';
import { Drawer, Button } from 'antd';
import { RightOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import { CartContext } from '../../../context';
import { yourAccount, yourOrders } from '../data';
import SmAccount from './SmAccount'; // Ensure the path is correct

const AccountDrawer = () => {
  const { loggedInUser } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex items-center cursor-pointer" onClick={showDrawer}>
        <p className="font-semibold">{loggedInUser.firstName}</p>
        <RightOutlined className="ml-2" />
        <div className="ml-2">
          <UserOutlined className="text-2xl font-bold" />
        </div>
      </div>
      <Drawer
        placement="right"
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
        <div className="bg-black/70 p-4 text-white w-full flex justify-between items-center">
          <div>
            <p className="font-bold text-xl">Hello, {loggedInUser.firstName}</p>
            <p className="text-2xl font-semibold">Your Account</p>
          </div>
          <Button type="text" onClick={onClose} icon={<CloseOutlined />} className="text-white" />
        </div>
        <SmAccount />
      </Drawer>
    </div>
  );
};

export default AccountDrawer;
