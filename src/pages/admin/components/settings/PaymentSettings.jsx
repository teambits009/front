import { Input, Radio, Switch } from "antd";
import React, { useState } from "react";

const PaymentSettings = () => {
  const [enviroment, setEnviroment] = useState(1);

  const onEnviromentChange = (e) => {
    setEnviroment(e.target.value);
  };

  return (
    <div className="grid gap-[20px]">
      <div className="bg-white p-[25px] grid gap-[10px] shadow-custom rounded-xl">
        <p className="uppercase text-[24=0px] font-semibold">Stripe Payment</p>
        <div className="flex justify-between">
          <p>Enable?</p>
          <Switch className="shadow-custom" size="small" defaultChecked />
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <p>Display Name</p>
          <Input
            className="col-span-2  h-max"
            type="text"
            placeholder="Display Name"
            required
          />
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <p>Puplishable Key</p>
          <Input
            className="col-span-2  h-max"
            type="text"
            placeholder="Puplishable Key"
            required
          />
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <p>Secret key</p>
          <Input
            className="col-span-2  h-max"
            type="text"
            placeholder="Secret Key"
            required
          />
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <p>Webhook Secret key</p>
          <Input
            className="col-span-2  h-max"
            type="text"
            placeholder="Secret Key"
            required
          />
        </div>
      </div>
      <div className="grid gap-[10px] bg-white p-[25px] shadow-custom rounded-xl">
        <p className="uppercase text-[24=0px] font-semibold">Paypal Payment</p>
        <div className="flex justify-between">
          <p>Enable?</p>
          <Switch className="shadow-custom" size="small" defaultChecked />
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <p>Display Name</p>
          <Input
            className="col-span-2  h-max"
            type="text"
            placeholder="Display Name"
            required
          />
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <p>Client ID</p>
          <Input
            className="col-span-2  h-max"
            type="text"
            placeholder="Secret Key"
            required
          />
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <p>Client Secret key</p>
          <Input
            className="col-span-2  h-max"
            type="text"
            placeholder="Secret Key"
            required
          />
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <p>Enviroment</p>
          <Radio.Group
            onChange={onEnviromentChange}
            value={enviroment}
            className="grid font-normal gap-[10px] pt-[10px]"
          >
            <Radio value={1}>Sandbox</Radio>
            <Radio value={2}>Live</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="mb-[50px] flex justify-between">
        <button className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg">
          Cancel
        </button>
        <button className="border-2 font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default PaymentSettings;
