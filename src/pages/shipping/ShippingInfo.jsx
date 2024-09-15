import { currencies, EastAfricaZones, UsaZones } from './data';
import { Option } from 'antd/es/mentions';
import {
  Button,
  Form,
  Select,
  Input,
  Radio,
  Row,
  Col,
  Typography,
  Divider,
} from 'antd';
import { useState } from 'react';

const { Title } = Typography;

const ShippingInfo = ({ handleStepClick }) => {
  const [courier, setCourier] = useState(null);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleCourierChange = (e) => {
    setCourier(e.target.value);
  };

  return (
    <div>
      <Title level={3}>Shipping Information</Title>
      <Divider/>
      <Form className="grid md:grid-cols-2 gap-5 rounded-xl mb-3">
        <div className="grid gap-3 shadow-custom bg-white p-4 rounded-xl">
          <div className="grid lg:grid-cols-2 w-full gap-3">
            <div className="grid gap-2">
              <p>Shipping from:</p>
              <Select
                placeholder="Choose location to ship from"
                onChange={handleChange}
                options={[
                  {
                    label: <span>East Africa</span>,
                    title: 'East Africa',
                    options: EastAfricaZones,
                  },
                  {
                    label: <span>Places in Usa</span>,
                    title: 'Places in Usa',
                    options: UsaZones,
                  },
                ]}
              />
            </div>
            <div className="grid gap-2">
              <p>Shipping to:</p>
              <Select
                placeholder="Choose location to ship to"
                onChange={handleChange}
                options={[
                  {
                    label: <span>East Africa</span>,
                    title: 'East Africa',
                    options: EastAfricaZones,
                  },
                  {
                    label: <span>Places in Usa</span>,
                    title: 'Places in Usa',
                    options: UsaZones,
                  },
                ]}
              />
            </div>
          </div>
          <p>Item's retail price:</p>
          <div className="grid lg:grid-cols-2 w-full gap-3">
            <Input placeholder="Price" type="number" min={0} required />
            <Select placeholder="Select a currency">
              {currencies.map((currency) => (
                <Option key={currency.value} value={currency.value}>
                  {currency.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="grid gap-2">
            <label>Package Dimensions (cm)</label>
            <div className="flex gap-2">
              <Input placeholder="Length (cm)" />
              <Input placeholder="Width (cm)" />
              <Input placeholder="Height (cm)" />
            </div>
          </div>
          <div className="grid gap-2">
            <label>Package Weight (kg)</label>
            <Input placeholder="Weight (kg)" type="number" min={0} required />
          </div>
          <div className="grid gap-2">
            <label>Choose Courier</label>
            <Radio.Group onChange={handleCourierChange} value={courier}>
              <Radio value="Courier1">Courier 1</Radio>
              <Radio value="Courier2">Courier 2</Radio>
              <Radio value="Courier3">Courier 3</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="shadow-custom bg-white p-4 rounded-xl">
          <Title className="font-bold" level={4}>
            Summary
          </Title>
          <p className="opacity-80">
            The total cost consist of the tax, insurance and the shipping charge
          </p>
          <Divider />
          <div className="grid gap-3 font-medium">
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>$100.50</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>$30.50</p>
            </div>
            <div className="flex justify-between">
              <p>Insurance</p>
              <p>$100.50</p>
            </div>
          </div>
          <Divider />
          <div className="flex justify-between font-medium">
            <p>Total Cost of Shipping</p>
            <p className="font-semibold text-xl text-primary">$230.50</p>
          </div>

          <div className="grid gap-2 mt-2">
            <label>Redeem Discount or Promo Code</label>
            <div className="flex gap-2">
              <Input placeholder="Enter code" />
              <button className="bg-[#015FF1] justify-self-center text-white px-[20px] rounded w-max font-semibold  h-[40px] shadow-btn transition-all duration-300 ease-in-out">
                Redeem
              </button>
            </div>
          </div>
        </div>
      </Form>
      <Button
        type="primary"
        className="bg-primary text-white"
        onClick={() => handleStepClick(1)}
      >
        Next
      </Button>
    </div>
  );
};

export default ShippingInfo;
