import React from "react";
import access from "../asset/access.svg";

const About = () => {
  return (
    <div className="flex flex-col gap-28">
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold font-hanken w-80 py-5 bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9] font-sans">
          About NFTix
        </h1>
        <p className="lg:text-xl text-white">
          NFTix is building towards becoming the first decentralized
          one-stop-shop for everything DeFi utilizing account abstraction to
          abstract gas fee and enhance one click interaction for all. With
          Spidex, User&apos;s will enjoy DeFi with the experience of a
          centralized finance and still have full custody of their asset.
        </p>
      </div>
      <div className="container mx-auto flex justify-between">
        <div className="w-[550px] flex flex-col gap-8">
          <h1 className="text-5xl font-hanken leading-tight text-neutral-100">
            Your ticket to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9] font-sans">
              events and parties
            </span>
          </h1>
          <p className="lg:text-lg text-neutral-100">
            Explore DeFi with CeFi experience. From getting early access to
            Events to creating events, we&apos;ve got you covered. The future of
            finance and innovation awaits!
          </p>
          <div className="flex gap-4">
            <div className="lg:w-3/4 md:w-3/4 1/2 bg-hero p-5 flex flex-col gap-2 rounded-md text-center">
              <p className="text-3xl font-semibold w-32 mx-auto bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                23,894
              </p>
              <p className="text-white">Total Events Created</p>
            </div>
            <div className="lg:w-3/4 md:w-3/4 1/2 bg-hero p-5 flex flex-col gap-2 rounded-md text-center">
              <p className="text-3xl font-semibold w-32 mx-auto bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                10,894
              </p>
              <p className="text-white">Total Successful Events</p>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <button className="px-8 py-2 rounded-xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1 text-neutral-100 font-semibold">
              Launch NFTix
            </button>
            <button className="p-[2px] rounded-xl bg-gradient-to-r from-spi-pink-2 via-spi-blue-2 to-spi-purple-2 text-neutral-100 font-semibold">
              <p className="bg-black rounded-xl w-full h-full px-8 py-2 hover:bg-neutral-800">
                Create Event
              </p>
            </button>
          </div>
        </div>
        <div className="-mt-24 lg:block md:block hidden">
          <img src={access} alt="access" height={750} />
        </div>
      </div>
    </div>
  );
};

export default About;
