import React from "react";
import FlightBook from "../assets/book-with-ease.jpg";
import { Home_1, dropdown } from "../assets";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className=" m-auto w-3/4 my-12 font-sans">
        <div className="flex space-x-5">
          <Link className=" w-1/3 text-xl  bg-blue-950 text-white text-center rounded-lg p-4 ">
            {" "}
            Explore Everywhere
          </Link>
          <Link className=" w-1/3 text-xl bg-blue-950 text-white text-center rounded-lg p-4 ">
            Hotels
          </Link>
          <Link className=" w-1/3 text-xl  bg-blue-950 text-white text-center rounded-lg p-4 ">
            Car Hire
          </Link>
        </div>
        <div className="m-auto my-12 relative ">
          <img
            src={Home_1}
            style={{ height: "460px" }}
            className=" relative image-container rounded-xl w-full  bg-gradient-to-r from-black to bg-gray-500"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent rounded-xl"></div>
          <div className=" absolute top-1/4 left-16  w-1/3 text-white ">
            <span className="text-5xl font-bold  ">
              Spend 48 hours in Spain
            </span>
            <div className="my-6">
              You’ve got markets to see, culture to explore, history to take in
              and a list of things to buy. Let us help make sure you fit it all
              in.
            </div>
            <div className="py-6">
              <Link className="relative  bg-white font-sans text-black text-lg rounded-lg  p-2 ">
                Explore Resorts
              </Link>
            </div>
          </div>
        </div>
        <div className=" font-bold text-2xl">
          Booking flights with Skyscanner
        </div>
        <div class=" ">
          {" "}
          <ul className="grid grid-cols-2  my-8">
            <li className="my-4 flex items-center relative mr-12  font-semibold ">
              <div className=" w-full">
                <div className="flex items-center">
                <span>How does FlightNest work?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  id="dropdown"
                  className=" absolute right-0"
                >
                  <path d="m14 20 10 10 10-10z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                </div>
                <div className=" w-full">
                  <hr class="w-full h-px bg-black mt-4" />
                </div>
              </div>
            </li>
          
            <li className="my-4 flex items-center relative mr-12  font-semibold ">
              <div className=" w-full">
                <div className="flex items-center">
                <span>How can I find the cheapest flight using FlightNest?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  id="dropdown"
                  className=" absolute right-0"
                >
                  <path d="m14 20 10 10 10-10z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                </div>
                <div className=" w-full">
                  <hr class="w-full h-px bg-black mt-4" />
                </div>
              </div>
            </li>
            <li className="my-4 flex items-center relative mr-12  font-semibold ">
              <div className=" w-full">
                <div className="flex items-center">
                <span>Does FlightNest do hotels too?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  id="dropdown"
                  className=" absolute right-0"
                >
                  <path d="m14 20 10 10 10-10z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                </div>
                <div className=" w-full">
                  <hr class="w-full h-px bg-black mt-4" />
                </div>
              </div>
            </li>
            <li className="my-4 flex items-center relative mr-12  font-semibold ">
              <div className=" w-full">
                <div className="flex items-center">
                <div>What happens after I booked a flight?</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  id="dropdown"
                  className=" absolute right-0"
                >
                  <path d="m14 20 10 10 10-10z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                </div>
                <div className=" w-full">
                  <hr class="w-full h-px bg-black mt-4" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
