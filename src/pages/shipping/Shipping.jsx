import React, { useState } from 'react';
import { Steps } from 'antd';
import logo from '../../Common/Assets/gennesiisn.jpg';
import { Link } from 'react-router-dom';
import ShippingInfo from './ShippingInfo';
import PaymentDetails from './PaymentDetails';
import Confirmation from './Confirmation';

const { Step } = Steps;

const ShippingService = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="mx-auto md:p-8 p-4">
      <div className="flex gap-3 justify-center items-center">
        <Link to={'/'}>
          <img className="cursor-pointer rounded-full h-20 w-20"  src={logo} alt="Logo" />
        </Link>
        <p className="text-center font-bold text-3xl">Shipping Services</p>
      </div>

      <div className="bg-white/50 md:p-6 p-2 rounded-xl mt-2">
        <Steps
          current={currentStep}
          onChange={handleStepClick}
          className="mb-6"
        >
          <Step title="Shipping" />
          <Step title="Payment" />
          <Step title="Confirmation" />
        </Steps>

        {currentStep === 0 && (
          <ShippingInfo handleStepClick={handleStepClick} />
        )}
        {currentStep === 1 && (
          <PaymentDetails handleStepClick={handleStepClick} />
        )}
        {currentStep === 2 && (
          <Confirmation handleStepClick={handleStepClick} />
        )}
      </div>
    </div>
  );
};

export default ShippingService;
