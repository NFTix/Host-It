import React from "react";

const SuccessfulBooking = ({ setShowPopup }) => {
  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-modalBg z-50"
      onClick={() => setShowPopup((oldState) => !oldState)}
    >
      <div className="bg-deepPurple text-white border h-14 border-white rounded-full p-3 gap-2 flex justify-center items-center z-50">
        <img src={"/icons/successful-event.gif"} alt="success" width={32} height={32} />
        <h1 className="">Event is Successfully Booked</h1>
      </div>
    </div>
  );
};

export default SuccessfulBooking;
