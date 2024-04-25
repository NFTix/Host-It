
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { events } from '../../../components/CONSTANT';
import EventLayout from '../../../components/events/Layout/Layout';
import EachEventBanner from '../../../components/events/EachEventBanner';
import RegisterationCard from '../../../components/events/RegisterEvent';
import EventCard from '../../../components/events/EventCard';
import TagsButton from '../../../components/events/Buttons/TagsButton';


const AllEventDetail = () => {
  const similarEvents = events.slice(0, 4);
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);
  const param = useParams()
  const eventId= param.id
  const event = events.find((event) => event.id === eventId)
  const { description, edit, price, type, location } = event;


  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showPopup && ref.current && !ref.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showPopup]);
  return (
    <EventLayout>
      <EachEventBanner
        event={event}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        ref={ref}
      />
      <div className="w-screen flex justify-center items-center mdl:hidden">
        <RegisterationCard
          setShowPopup={setShowPopup}
          event={event}
          edit={edit}
          price={price}
          type={type}
          ref={ref}
        />
      </div>
      <div className="flex mdl:flex-row flex-col my-8 text-white">
        <div className="w-screen p-4 mdl:w-[58%] mdl:mx-[1%]">
          <div>
            <div className="mb-4">
              <h1 className="text-xl  font-bold mb-2">Description</h1>
              <p className=" text-base font-normal">{description}</p>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Hours</h1>
              <p className="text-xl font-normal mb-2">
                Saturday: <span>12:00pm - 3:00pm</span>
              </p>
            </div>
            <div className="mb-4">
              <h1 className="text-xl text-[#fff] font-bold mb-2">Tags</h1>
              <div className="text-[#fff] flex gap-4">
                <TagsButton title={"Music"} />
                <TagsButton title={"Family"} />
                <TagsButton title={"Free"} />
              </div>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Share with Friends</h1>
              <div className="flex gap-4">
                <img
                  src={"/icons/Facebook.svg"}
                  width={32}
                  height={32}
                  alt="facebook"
                />
                <img
                  src={"/icons/Instagram.svg"}
                  width={32}
                  height={32}
                  alt="instagram"
                />
                <img
                  src={"/icons/Twitter.svg"}
                  width={32}
                  height={32}
                  alt="twitter"
                />
                <img
                  src={"/icons/Copy.svg"}
                  width={20}
                  height={20}
                  alt="twitter"
                  className="w-[32px] h-[32px] bg-white rounded-full p-1"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-screen p-4 mdl:w-[38%] msl:mx-[1%]">
          <h1 className="text-xl font-medium mb-5">Event Location</h1>
          <img
            src={"/icons/Basemap-image.png"}
            alt=""
            width={440}
            height={270}
            className="mb-5"
          />
          <h1 className="text-xl font-normal mb-2">
            {location}
          </h1>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="font-extrabold text-2xl mb-4 mx-[2%] text-white">
          Similar Events
        </h1>
        <div className="flex ">
            <div className="flex">
          {similarEvents.map((event, index) => (
              <EventCard event={event} key={index} className/>
              ))}
            </div>
        </div>
      </div>
    </EventLayout>

  )
}

export default AllEventDetail