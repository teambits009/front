import { Button, Divider, Typography } from 'antd';
import visa from '../../Common/Assets/visa.svg'
import ShippingSummaryTable from './ShippingSummaryTable';


const { Title } = Typography;

const Confirmation = ({ handleStepClick }) => {
  return (
    <div>
      <Title level={3}>Order Confirmation</Title>
      <div className='shadow-custom grid gap-10 bg-white md:p-8 p-4 rounded-xl mb-3'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <div className='flex justify-between'>
              <Title level={5}>Your Information</Title>
              <button className='font-medium text-primary'>Edit</button>
            </div>
            <Divider style={{ margin: '10px 0px', borderTopWidth: '2px' }} dashed/>
            <p>Brandon Opere</p>
            <p className='opacity-90 text-sm'>opere@gmail.com</p>
          </div>
          <div>
            <div className='flex justify-between'>
              <Title level={5}>Shipping Address</Title>
              <button className='font-medium text-primary'>Edit</button>
            </div>
            <Divider style={{ margin: '10px 0px', borderTopWidth: '2px' }} dashed/>
            <p>Brandon Opere</p>
            <p className='opacity-90 text-sm'>710 Mariners Island Blvd,</p>
            <p className='opacity-90 text-sm'>Apt 210</p>
            <p className='opacity-90 text-sm'>San Mateo, CA 94404</p>
            <p className='opacity-90 text-sm'>United States</p>
            <p className='opacity-90 text-sm'>(315) 396-7661</p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <div className='flex justify-between'>
              <Title level={5}>Payment</Title>
              <button className='font-medium text-primary'>Edit</button>
            </div>
            <Divider style={{ margin: '10px 0px', borderTopWidth: '2px' }} dashed/>
            <img className='h-10 w-10' src={visa} alt='visa'/>
            <p className='opacity-90 text-sm'>Visa card ending in 1234</p>
          </div>
          <div>
            <div className='flex justify-between'>
              <Title level={5}>Billing Address</Title>
              <button className='font-medium text-primary'>Edit</button>
            </div>
            <Divider style={{ margin: '10px 0px', borderTopWidth: '2px' }} dashed/>
            <p>Brandon Opere</p>
            <p className='opacity-90 text-sm'>710 Mariners Island Blvd,</p>
            <p className='opacity-90 text-sm'>Apt 210</p>
            <p className='opacity-90 text-sm'>San Mateo, CA 94404</p>
            <p className='opacity-90 text-sm'>United States</p>
            <p className='opacity-90 text-sm'>(315) 396-7661</p>
          </div>
        </div>
      </div>
      <ShippingSummaryTable />
      <Button onClick={() => handleStepClick(1)}>Previous</Button>
      <Button type="primary" className="bg-primary ml-5 text-white">
        Confirm Order
      </Button>
    </div>
  );
};

export default Confirmation;
