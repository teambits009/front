import React, { useState } from 'react';

export default function CurrencyPage() {


    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const handleValueChange = (event) => {
        let inputValue = event.target.value;
        if (!isNaN(inputValue)) {
            inputValue = parseFloat(inputValue);
            setValue(inputValue);
        }
    };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5">
    <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Currency Options
        </label>
        <select
            name="currencyOptions"
            value={selectedCurrency}
            onChange={handleChange}
            className="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600"
        >
            <option value="USD">USD</option>
            <option value="KES">KES</option>
            <option value="INR">INR</option>
        </select>
    </div>
    <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Enter Value
        </label>
        <input
            type="number"
            min="0"
            step="0.01"
            value={value}
            onChange={handleValueChange}
            className="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600"
            placeholder="Enter value"
        />
    </div>
</div>
  )
}
