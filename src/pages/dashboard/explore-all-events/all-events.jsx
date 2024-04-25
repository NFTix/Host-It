import EventLayout from '../../../components/events/Layout/Layout'
import React from 'react'
import { FilterSearch, SearchNormal } from 'iconsax-react'
import EventCard from '../../../components/events/EventCard'
import { events } from '../../../components/CONSTANT'
import MainButton from '../../../components/events/Buttons/MainButton'

const AllEvents = () => {
  return (
    <EventLayout>
        <div className="flex flex-col mdl:flex-row justify-between mx-3 my-3">
        <h1 className="font-bold text-2xl mdl:text-4xl text-[#fff]">
          Find your next event
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center bg-lightBlack mdl:ml-5 rounded-full w-66 mdl:w-80">
            <input
              type="text"
              style={{ backgroundColor: "transparent" }}
              className="flex items-center bg-transparent text-white rounded-full py-4 px-12 text-opacity-60 text-base font-normal leading-none font-mono"
              placeholder="Search for Events"
            />
            <div className="absolute inset-y-0 left-2 flex items-center pl-3 ">
            <SearchNormal size="24" className='text-white'/>
            </div>
          </div>
          <div className="ml-2 rounded-full p-3 bg-lightBlack hover:bg-lightWhite ">
          <FilterSearch size="24" className='text-white'/>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mb-2 px-3 overflow-x-scroll w-screen mdl:w-full ">
        <MainButton
          title={"All Events"}
          link={"/"}
          active={true}
          
        />
        <MainButton title={"Today"} link={"/"}  />
        <MainButton title={"Free"} link={"/"}  />
        <MainButton title={"Paid"} link={"/"}  />
        <MainButton title={"Private"} link={"/"}  />
       
      </div>

      <div className="overflow-y-scroll mb-5 flex flex-col items-center justify-center mdl:flex-row  mdl:flex-wrap gap-3 mdl:ml-3 -ml-3">
        {events.map((event, index) => (
          <div key={index} className="w-[80%] mdl:w-[420px]">
            <EventCard key={index} event={event}  />
          </div>
        ))}
      </div>
    </EventLayout>

  )
}

export default AllEvents