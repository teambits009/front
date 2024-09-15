import React from 'react';
import { yourAccount, yourOrders } from '../data';

const SmAccount = () => {
  return (
    <div className="grid bg-[#f7f7f7] gap-3">
      <div className="bg-white space-y-2 p-2">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Profile</p>
          <button className="rounded border border-analogous_green text-analogous_green p-0.5">
            See All
          </button>
        </div>
        <p>Please pick a profile to start your personalized experience</p>
      </div>
      <div className="bg-white space-y-2 p-2">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Your Orders</p>
          <button className="rounded border border-analogous_green text-analogous_green p-0.5">
            See All
          </button>
        </div>
        <div className="grid gap-2">
          {yourOrders.map((order) => (
            <p key={order.key}>{order.text}</p>
          ))}
        </div>
      </div>
      <div className="bg-white space-y-2 p-2">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Your Account</p>
          <button className="rounded border border-analogous_green text-analogous_green p-0.5">
            See All
          </button>
        </div>
        <div className="grid gap-2">
          {yourAccount.map((acc) => (
            <p key={acc.key}>{acc.text}</p>
          ))}
        </div>
      </div>
      <div className='bg-white space-y-2 p-2'>
        <p className="font-semibold text-xl">Settings</p>
        <button>Sign Out</button>
      </div>
    </div>
  );
};

export default SmAccount;
