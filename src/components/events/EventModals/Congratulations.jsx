import React from "react";

const Congratulations = ({ setShowPopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-modalBg z-50" onClick={() => setShowPopup((oldState) => !oldState)}>
      <div className="mx-6 bg-deepPurple text-white border border-white w-[500px] rounded-2xl p-6 flex flex-col justify-center items-center z-50">
        <img src="/icons/Ellipse-55.png" alt="Congrats Image" width={98} height={98} />
        <h1 className="font-medium text-2xl text-white text-center my-1">
          Congratulations!!
        </h1>
        <p className="text-base font-light text-white text-center mb-6">
          Your event has been created. You can now share event tickets with friends and colleagues.
        </p>
        <div className="flex gap-2 mb-4">
          <img src="/icons/link-alt-1.svg" alt="Link Image" width={24} height={24} />
          <a href="#" className="underline underline-offset-4">www.host-it.com/events</a>
        </div>
        <div className="mb-4">
          <div className="flex gap-4">
            <img src="/icons/Facebook.svg" width={32} height={32} alt="facebook" />
            <img src="/icons/Instagram.svg" width={32} height={32} alt="instagram" />
            <img src="/icons/Twitter.svg" width={32} height={32} alt="twitter" />
            <img src="/icons/Copy.svg" width={20} height={20} alt="twitter" className="w-[32px] h-[32px] bg-white rounded-full p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
