import React, { useState } from "react";
import { extractTimestampInfo } from "../../utils/helpers";
import { Clock, Heart, Location, TransmitSqaure2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { EventAttendees } from "./EventAttendees";

const EventCard = ({ event, edit }) => {
    const baseUrl = process.env.REACT_APP_baseURL
    const { timestamp, title, location, type, eventImage, id, attendees } = event;
    const { monthDay, monthName, time } = extractTimestampInfo(timestamp);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={!edit? `${baseUrl}all-events/${id}`:`${baseUrl}manage-events/${id}`}>
            <div className={`min-w-[340px] mb-4 w-full px-4 rounded-xl border-3 ${isHovered ? "transform scale-105" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="relative h-52">
                    <div className="flex justify-between mx-4 items-center absolute top-2 right-0 left-0 z-10">
                        <p className="flex justify-center items-center bg-[#fff] text-[#5D35FF]  rounded-md absolute top-0 left-0 w-[80px] pt-1 mt-1.5">
                            {type}
                        </p>
                        <div className="flex gap-2 absolute top-0 right-0">
                            <TransmitSqaure2 size="40" className="text- border-lightWhite bg-[#fff] p-2 rounded-full" />
                            <Heart size="40" className="text- border-lightWhite bg-[#fff] p-2 rounded-full" />
                        </div>
                    </div>
                    <img src={eventImage} alt="" className="rounded-t-xl h-52 w-full" />
                </div>

                <div className="flex h-auto gap-4 border-b bg-[#fff] border-solid border-lightWhite py-2 rounded-b-xl">
                    <div className="pl-3">
                        <p className="text-gradientColor text-sm font-normal leading-3 mt-2 mb-3"
                        >
                            {monthName}
                        </p>
                        <div className="text-gradientColor text-2xl font-normal leading-3">
                            {monthDay}
                        </div>
                    </div>

                    <div className="mr-4 grow">
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between" >

                                <p className="text-cardText text-base font-medium leading-tight line-clamp-1">
                                    {title}
                                     </p>
                            </div>
                            <div className="my-2 mdl:my-1">
                                <EventAttendees attendees={attendees} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex items-center">
                                    <Clock size="20" className="text- border-lightWhite" />
                                    <div className="ml-2 text-cardText text-sm font-normal leading-none">
                                        {time}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Location size="20" className="text- border-lightWhite" />
                                    <div className="ml-2 text-cardText text-sm font-normal leading-none">
                                        {location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default EventCard;
