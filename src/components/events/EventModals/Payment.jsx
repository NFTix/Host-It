import React from "react";

const Payment = ({ setShowPopup, host, price}) => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-modalBg z-50" onClick={() => setShowPopup((oldState) => !oldState)}>
      <div className="mx-6 bg-deepPurple text-white border border-white w-[350px] rounded-2xl p-6 flex flex-col items-center text-center z-50">
        <div className="w-full">
          <div className="flex w-full justify-between items-center mb-1">
            <p className="text-sm text-[#ffffff]/[.6]">Beneficiary</p>
            <h3 className="text-sm font-medium text-[#fff]">{host}</h3>
          </div>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-[#ffffff]/[.6] mb-1">Reason</p>
            <h3 className="text-sm font-medium text-[#fff]">Event Booking</h3>
          </div>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-[#ffffff]/[.6] mb-1">Amt. of Token</p>
            <h3 className="text-sm font-medium text-[#fff]">{price}</h3>
          </div>
        </div>
        <button className="bg-[#fff] flex gap-2 items-center justify-center mb-3 w-full py-2 rounded-full" >
            <img src="/icons/circle-dollar.png" alt="dollar" width={24} height={24}/>
            <p className="text-sm text-deepPurple">Make Payment</p>
        </button>
      </div>
    </div>
  );
};

export default Payment;
