import EventLayout from "../../../components/events/Layout/Layout";
import React from "react";

const CreateEvent = () => {
  return (
    <EventLayout>
      <div>
        <div className="bg-deepPurple rounded-xl w-3/5 p-6 mx-auto my-auto mt-16 border-grey-50">
          <h1 className="text-slate-50 text-2xl text-center">
            Create an Event
          </h1>

          <form>
            <label className="text-slate-50 block mt-5" for="eventName">
              Event name
            </label>
            <input
              className="pl-3 mt-3 h-12 rounded-full w-full"
              type="text"
              name="eventName"
              placeholder="E.g. Game"
              // value={}
            />

            <label className="text-slate-50 block mt-5" for="eventCategory">
              Event Category
            </label>
            <select
              className="pl-3 mt-3 h-12 rounded-full w-full"
              name="eventCategory"
              required
              aria-label="Select an option"
            >
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <label className="text-slate-50 block mt-5" for="textarea">
              Description
            </label>
            <textarea
              className="pl-3 text-slate-50 overflow-hidden mt-3 bg-deepBlue rounded-2xl w-full"
              name="textarea"
              rows={5}
              // value={""}
            ></textarea>

            <label className="text-slate-50 block mt-5" for="eventCategory">
              Event type
            </label>
            <select
              className="pl-3 mt-3 h-12 rounded-full w-full"
              name="eventCategory"
              required
              aria-label="Select an option"
            >
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <button className="text-slate-50 text-xl pl-3 my-10 h-12 border rounded-full w-full">
              Continue
            </button>
          </form>
        </div>
      </div>
    </EventLayout>
  );
};

export default CreateEvent;
