import React from 'react';
import { Form, Input, Checkbox, Radio, Select, message } from 'antd';
import logo from '../landing/assets/brand/logo.svg';
import { Link } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;

const Printing = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Thank you for your request. We will get back to you shortly.');
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="md:w-[87%] w-[95%] mb-3 mx-auto p-6 shadow-lg rounded-lg bg-white mt-10">
      <Link to={"/"} className="flex mx-auto justify-center items-center gap-[5px] cursor-pointer">
        <img className="h-[60px] w-[60px]" src={logo} alt="logo" />
        <p className="font-bold text-[35px] text-[#015FF1]">BNPL</p>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Request Printing Services</h1>
      <p className="mb-6">
        Expand your reach with our print-on-demand services for books, documents, and more.
      </p>
      <Form
        form={form}
        name="printing-service-request"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[{ required: true, message: 'Please input your email address!', type: 'email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Service Type"
          name="serviceType"
          rules={[{ required: true, message: 'Please select at least one service type!' }]}
        >
          <Checkbox.Group>
            <Checkbox value="Print-on-Demand Books">Print-on-Demand Books</Checkbox>
            <Checkbox value="School Documents">School Documents</Checkbox>
            <Checkbox value="Company Documents">Company Documents</Checkbox>
            <Checkbox value="Other">Other</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label="Title of Document/Book"
          name="documentTitle"
          rules={[{ required: true, message: 'Please input the title of the document/book!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Number of Pages"
          name="numberOfPages"
          rules={[{ required: true, message: 'Please input the number of pages!' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Quantity Required"
          name="quantity"
          rules={[{ required: true, message: 'Please input the quantity required!' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Additional Services"
          name="additionalServices"
        >
          <Checkbox.Group>
            <Checkbox value="Paperback">Paperback</Checkbox>
            <Checkbox value="Hardcopy">Hardcopy</Checkbox>
            <Checkbox value="Other">Other</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label="Target Audience"
          name="targetAudience"
          rules={[{ required: true, message: 'Please select the target audience!' }]}
        >
          <Checkbox.Group>
            <Checkbox value="School">For School</Checkbox>
            <Checkbox value="Company">For Company</Checkbox>
            <Checkbox value="Public">For General Public</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label="Select Your Region"
          name="region"
          rules={[{ required: true, message: 'Please select your region!' }]}
        >
          <Select>
            <Option value="North America">North America</Option>
            <Option value="Europe">Europe</Option>
            <Option value="Asia">Asia</Option>
            <Option value="Africa">Africa</Option>
            <Option value="South America">South America</Option>
            <Option value="Australia">Australia</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Delivery Address"
          name="address"
          rules={[{ required: true, message: 'Please input your delivery address!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Are you a book writer?"
          name="bookWriter"
          rules={[{ required: true, message: 'Please select if you are a book writer!' }]}
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="If Yes, Please Provide Brief Description of Your Work"
          name="writerDescription"
        >
          <TextArea />
        </Form.Item>

        <Form.Item>
          <button className='uppercase md:mt-[15px] w-[145px] text-white bg-[#015FF1] rounded-[8px] h-[40px] shadow-btn transition-all duration-300 ease-in-out' htmlType="submit">
            Submit Request
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Printing;
