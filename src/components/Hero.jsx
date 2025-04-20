import React, { useState } from "react";
import bannerImg from "../assets/banner.png";

const Hero = ({ handelSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="py-12 px-4">
      <div className="flex items-center justify-center">
        <img
          className="w-[300px] md:w-[500px]"
          src={bannerImg}
          alt="Smartphones"
        />
      </div>
      <h2 className="text-center text-4xl md:text-7xl">
        Browse, Search, View, Buy
      </h2>
      <p className="text-center py-3">
        Best place to browse, search, view details and purchase of top flagship
        phones
        <br /> of the current time - FlagshipFaceOff
      </p>
      <form
        onSubmit={(e) => {
            handelSearch(e, search),
            setSearch("")
        }}
        className="md:flex items-center justify-center gap-2 max-w-2xl mx-auto"
      >
        <div className="flex items-center shadow-md border border-gray-300 w-full rounded-lg">
          <svg
            className="h-5 w-5 ml-3 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search phones..."
            className="w-full py-3 px-3 focus:outline-none rounded-lg"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="relative  inline-block text-sm md:text-lg group mt-3 md:mt-0 w-1/3 md:w-auto"
          >
            <span className="relative z-10 block px-5 py-2 md:px-8 md:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-10 md:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
