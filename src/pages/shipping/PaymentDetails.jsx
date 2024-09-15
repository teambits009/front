import { Button, Divider, Form, Input, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const PaymentDetails = ({ handleStepClick }) => {
  return (
    <div>
      <Title level={3}>Payment Details</Title>
      <Divider />

      <div className="grid md:grid-cols-2 gap-5 mb-4">
        <div className="shadow-custom bg-white p-4 rounded-xl ">
          <Title level={5}>Credit Card Information</Title>
          <Form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label>Name on Card</label>
                <Input type="text" placeholder="Name on Card" required />
              </div>
              <div className="grid gap-2">
                <label>Credit Card Number</label>
                <Input
                  type="number"
                  placeholder="Credit card number"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2 md:col-span-2">
                  <label>Security Code</label>
                  <Input required placeholder="code" />
                </div>
                <div className="grid gap-2">
                  <label>Expiration date</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="MM" min={2} max={2} required />
                    <Input placeholder="YY" min={2} max={2} required />
                  </div>
                </div>
              </div>
              <button className="bg-[#015FF1] w-max text-white px-[20px] rounded mt-2 font-semibold  h-[40px] shadow-btn transition-all duration-300 ease-in-out">
                Submit Payment
              </button>
            </div>
          </Form>
        </div>
        <div className="shadow-custom bg-white p-4 rounded-xl ">
          <Title level={5}>Billing Information</Title>
          <Form className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-2">
              <div className="grid gap-2">
                <label>First Name</label>
                <Input placeholder="First name" type="text" required />
              </div>
              <div className="grid gap-2">
                <label>Last Name</label>
                <Input placeholder="Last name" type="text" required />
              </div>
            </div>
            <div className="grid gap-2">
              <label>Billing Address</label>
              <Input placeholder="Billing address" required />
            </div>
            <div className="grid gap-2">
              <label>City</label>
              <Input placeholder="city" type="text" required />
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="grid gap-2">
                <label>Zip Code</label>
                <Input placeholder="Zip code" required />
              </div>
              <div className="grid gap-2">
                <label>Country</label>
                <Input placeholder="Country" type="text" required />
              </div>
            </div>
            <button className="bg-[#015FF1] w-max text-white px-[20px] rounded mt-2 font-semibold  h-[40px] shadow-btn transition-all duration-300 ease-in-out">
              Submit Billing Address
            </button>
          </Form>
        </div>
      </div>

      <Button onClick={() => handleStepClick(0)}>Previous</Button>
      <Button
        type="primary"
        className="bg-primary ml-5 text-white"
        onClick={() => handleStepClick(2)}
      >
        Next
      </Button>
    </div>
  );
};

export default PaymentDetails;
