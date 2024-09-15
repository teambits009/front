import React from 'react';

const CustomButton = ({ className, onClick, children, disabled }) => {
  return (
    <button
      className={`bg-[#015FF1] text-white px-[20px] rounded mt-2 font-semibold min-h-[35px] shadow-btn transition-all duration-300 ease-in-out ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
