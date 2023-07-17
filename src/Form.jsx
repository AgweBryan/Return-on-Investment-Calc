import React, { useState } from "react";

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [dropdown, setDropdown] = useState(0);

  const [returnOnInvestment, setReturnOnInvestment] = useState(0);

  const options = [
    { value: 0, label: 0 },
    { value: 1000, label: 1000 },
    { value: 2000, label: 2000 },
    { value: 3000, label: 3000 },
    { value: 4000, label: 4000 },
    { value: 5000, label: 5000 },
    { value: 6000, label: 6000 },
    { value: 7000, label: 7000 },
    { value: 8000, label: 8000 },
    { value: 9000, label: 9000 },
    { value: 10000, label: 10000 },
    { value: 11000, label: 11000 },
    { value: 12000, label: 12000 },
    { value: 13000, label: 13000 },
  ];

  const calculateInvestment = () => {
    const amountInv = parseFloat(amount);
    const dropdownInv = parseFloat(dropdown);
    let roi;

    if (amountInv > dropdownInv) {
      roi = (amountInv * 50) / 100 + amountInv;
    } else {
      roi = (dropdownInv * 50) / 100 + dropdownInv;
    }
    if (amountInv === dropdownInv) {
      roi = 0;
    }

    setReturnOnInvestment(roi);
  };

  return (
    <div className='w-full'>
      <div className='w-full flex flex-col gap-4 justify-between'>
        <div>
          <h4 className='text-white'>Investment amount input</h4>
          <input
            type='number'
            placeholder='Investment amount'
            className='ring-0 outline-none p-2 rounded-sm w-full'
            value={amount}
            onChange={(e) => {
              setDropdown(0);
              setReturnOnInvestment(0);
              setAmount(e.target.value);
            }}
          />
        </div>
        <div>
          <h4 className='text-white'>Investment dropdown (Optional)</h4>

          <select
            itemType='number'
            className='w-full p-3'
            onChange={(e) => {
              setAmount(0);
              setReturnOnInvestment(0);

              setDropdown(e.target.value);
            }}
            value={dropdown}
            defaultValue={0}
          >
            {options.map((option) => (
              <option key={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div>
          <h4 className='text-white'>Return on investment</h4>
          <input
            type='number'
            placeholder='Return...'
            className='ring-0 outline-none p-2 rounded-sm w-full'
            value={returnOnInvestment}
            disabled
          />
        </div>
      </div>
      <div className='flex justify-center mt-8'>
        <button className='button-style' onClick={calculateInvestment}>
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Form;
