import { CaretDownOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Avatar } from 'antd';
import React from 'react';

const CustomerAccount = () => {
  const menu = (
    <div className="w-[500px] mt-2">
      <Menu>
        <Menu.Item key="profile">
          <div className="flex items-center p-2 justify-between">
            <div className="flex items-center justify-center gap-2">
              <Avatar size="large" icon={<UserOutlined />} />
              <div className="grid">
                <p className="font-medium text-lg">Brandon Opere</p>
                <p className="text-sm -mt-1 font-medium opacity-70">
                  Account holder
                </p>
              </div>
            </div>
            <p className="hover:underline cursor-pointer hover:text-analogous_green">
              Manage Profiles <RightOutlined />
            </p>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="lists">
          <div className="grid grid-cols-2 gap-4 px-2">
            <div className='space-y-2'>
              <p className="font-semibold">Your Lists</p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Create a List
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Find a List or Registry
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Your Saved Books
              </p>
            </div>
            <div className='space-y-2 border-l px-2'>
              <p className="font-semibold">Your Account</p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Account
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Orders
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Recommendations
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Watchlist
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Video Purchases & Rentals
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Memberships & Subscriptions
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Music Library
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Switch Accounts
              </p>
              <p className="hover:underline cursor-pointer hover:text-analogous_green">
                Sign Out
              </p>
            </div>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );

  return (
    <div>
      <Dropdown overlay={menu} placement="bottomRight" arrow overlayClassName="custom-dropdown">
        <button className="grid text-sm hover:outline outline-analogous_teal p-2 justify-self-end">
          <p>Hello, Brandon</p>
          <p className="font-semibold flex items-center">
            Account & Lists <CaretDownOutlined className="ml-1" />
          </p>
        </button>
      </Dropdown>
    </div>
  );
};

export default CustomerAccount;
