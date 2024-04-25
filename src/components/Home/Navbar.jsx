import React, { useState } from "react";
import { NavUtil } from "./NavUtil";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import ConnectButton from "../../hooks/useConnectionHook";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  function handleClicked() {
    setClicked(!clicked);
  }

  return (
    <nav className="container mx-auto flex justify-between py-5">
      {/* logo */}
      <a
        href="/"
        className="py-3 text-2xl tracking-widest font-semibold font-hanken text-neutral-200"
      >
        NFTix
      </a>
      {/* navs */}

      <ul
        className={`rounded-3xl bg-black py-2 px-4  gap-5 lg:text-lg text-neutral-200 lg:flex md:flex hidden`}
      >
        {NavUtil.map((link, index) => {
          return (
            <li key={index} className=" hover:bg-hero rounded-3xl py-1 px-5">
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
      {/* entry */}

      <ul
        className={`w-full h-screen fixed top-0 left-0 bg-black py-2 px-4  gap-5 lg:text-lg text-neutral-200 lg:hidden md:hidden flex transition-all duration-700 ${
          clicked ? "translate-x-0" : "translate-x-full"
        } flex-col z-10`}
      >
        <button
          className="md:hidden lg:hidden flex justify-end text-neutral-100 cursor-pointer text-[30px] z-500"
          onClick={handleClicked}
        >
          <FontAwesomeIcon id="bar" icon={faTimes} />
        </button>

        {NavUtil.map((link, index) => {
          return (
            <li key={index} className="hover:bg-hero rounded-3xl py-1 px-5">
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>

     <ConnectButton />

      <button
        className="lg:hidden md:hidden block text-neutral-100 cursor-pointer text-[30px] z-500"
        onClick={handleClicked}
      >
        <FontAwesomeIcon id="bar" icon={faBars} />
      </button>
    </nav>
  );
};

export default Navbar;
