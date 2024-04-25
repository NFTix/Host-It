import React from "react";
import hero from "../../asset/hero.svg";

export const HeroSection = () => {
  return (
    <section
      className="container mx-auto py-24 pl-8  rounded-3xl"
      style={{
        background:
          "radial-gradient(50% 150% at top left, #2c62917e, #030303, transparent), radial-gradient(50% 150% at bottom right, #9e428a7c, #030303, #030303)",
      }}
    >
      <div className="flex gap-10 2xl:w-[1280px] mx-auto">
        <div className="w-[580px] flex flex-col gap-4">
          <h1 className="font-hanken text-4xl font-light leading-snug text-neutral-100">
            Explore and interact in the most{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple font-sans">
              promising blockchain projects
            </span>{" "}
            and say{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple font-sans">
              goodbye to gas fees
            </span>{" "}
            slowing you down
          </h1>
          <div className="text-neutral-100 text-lg">
            NFTix is a one-stop-shop that covers every web3 defi explorations
            such as instant creation of custom tokens, IDO participation and
            gasless swap of tokens without any hassle!
          </div>
          <div className="flex gap-5 mt-5">
            <button className="lg:px-8 md:px-8 lg:py-2  px-2 rounded-xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1 text-neutral-100 font-semibold">
              Explore NFTix
            </button>
            <button className="p-[2px] rounded-xl bg-gradient-to-r from-spi-pink-2 via-spi-blue-2 to-spi-purple-2 text-neutral-100 font-semibold">
              <p className="bg-black rounded-xl w-full h-full px-8 py-2 hover:bg-neutral-800">
                Create Event
              </p>
            </button>
          </div>
        </div>
        <div className="lg:block md:block hidden relative w-1/2 2xl:h-[500px]">
          <img src={hero} alt="hero" className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
};
