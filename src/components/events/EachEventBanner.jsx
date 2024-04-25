import React from "react";
import { EventAttendees } from "./EventAttendees";
import { Location, ProfileCircle } from "iconsax-react";
import RegisterationCard from "./RegisterEvent";
import SuccessfulBooking from "./EventModals/Successful-booking";
import Payment from "./EventModals/Payment";
import Request from "./EventModals/Request";

const EachEventBanner = ({ event, edit, setShowPopup, showPopup, ref }) => {
  const { attendees, location, type, price, title, host, timestamp, eventImage } = event;
  console.log(eventImage);

  return (
    <>
      <div className="relative w-screen mdl:w-[100%] h-[300px] mdl:h-[446px]">
        <img src={eventImage} alt="Event" className="absolute inset-0 w-full h-full object-cover" />
        <div className="flex pb-4 px-6 justify-between absolute inset-0">
          <div className="flex flex-col justify-end mdl:w-3/5">
            <div className="">
            <div className="flex gap-2 items-center mb-6">
              <EventAttendees attendees={attendees} />
              <p className="text-[#fff]">Attendees</p>
            </div>
            <h1 className="font-extrabold text-[#fff] w-full text-xl mdl:text-5xl mb-6">{title}</h1>
              <p className="text-[#fff] text-sm">Host by:</p>
              <div className="flex items-center">
                <div className="rounded-full">
                  <ProfileCircle  className="text-white w-[32px] mdl:w-[64px]" />
                </div>
                <h1 className="text-lg mdl:text-xl ml-2 mt-3 text-[#fff] mdl:font-bold">{host}</h1>
              </div>
            <div className="flex items-center">
              <Location className="text-white w-[32px] mdl:w-[64px]" />
              <div className="ml-2 mt-3 text-[#fff] mdl:font-bold text-lg mdl:text-xl">
                {location}
              </div>
            </div>
            </div>
          </div>
          <div className="hidden mdl:flex w-2/5 justify-center">
            <RegisterationCard setShowPopup={setShowPopup} price={price} type={type} edit={edit} timestamp={timestamp} className="mt-20 mdl:mt-10 hidden mdl:inline" />
          </div>
        </div>
      </div>
      {showPopup && (() => {
        // eslint-disable-next-line 
        switch (type) {
          case "free":
            return <SuccessfulBooking setShowPopup={setShowPopup} ref={ref} />;
          case "paid":
            return <Payment setShowPopup={setShowPopup} ref={ref} host={host} price={price} />;
          case "private":
            return <Request setShowPopup={setShowPopup} ref={ref} />;
        }
      })()}
    </>
  );
};

export default EachEventBanner;
