import React from "react";
import "../App.css";
import {
  heart,
  globe,
  logo,
  FN,
  FlightNest,
  user,
  hotel,
  car,
  swap,
} from "../assets/index.js";
import { Link, NavLink, useInRouterContext } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [departureCity, setdepartureCity] = useState("Ahmedabad");
  const [arrivalCity, setarrivalCity] = useState("Kolkata");
  const [Travellers, setTravellers] = useState(1);
  const [departureDate, setdepartureDate] = useState("");
  const [returnDate, setreturnDate] = useState("");
  return (
    <div
      className=" w-full text-white overflow-auto page "
      style={{ padding: "2rem", backgroundColor: "#05203c" }}
    >
      <header style={{ maxWidth: "75%", margin: "0 auto" }}>
        <div className="flex justify-between items-center space-x-2 mx-auto  ">
          <Link to="/" className=" flex items-center  text-2xl  ">
            <img src={FN} height="52" width="173" alt="Logo" />
          </Link>

          <div className="flex  justify-center items-center ">
            {/* Top Menu Bar */}
            <ul className="flex  font-medium  space-x-3">
              <li>
                <NavLink to="/" className={` hover:text-white`}>
                  <img src={globe} height="30" width="30" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={` hover:text-white`}>
                  <img src={heart} height="30" width="30" />
                </NavLink>
              </li>
              <li className=" ">
                <NavLink
                  to="/"
                  className={`flex justify-center items-center space-x-1  hover:text-white`}
                >
                  <img src={user} height="30" width="30" id="user-image" />
                  {/* <span className="px-2 text-xl">Log In</span> */}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Flight Hotels Car */}
          <ul
            style={{ maxWidth: "75%" }}
            className="flex flex-row text-white font-medium py-4 space-x-1"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex  px-3 py-1 ${
                    isActive ? "border-transparent  bg-blue-600" : "border"
                  }  border rounded-2xl`
                }
              >
                <button
                  style={{ display: "flex" }}
                  className="flex space-x-2 items-center justify-center"
                >
                  <img src={logo} height="20" width="20" />
                  <span className=" font-normal">Flights</span>
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hotels"
                className={({ isActive }) =>
                  `flex  px-3 py-1 ${
                    isActive ? "border-transparent bg-blue-600 " : "border"
                  }   rounded-2xl`
                }
              >
                <button className="flex space-x-2 items-center justify-center">
                  <img src={hotel} height="20" width="20" id="user-image" />
                  <span className=" font-normal">Hotels</span>
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/car"
                className={({ isActive }) =>
                  `flex  px-3 py-1 ${
                    isActive ? "border-transparent bg-blue-600 " : "border"
                  }   rounded-2xl`
                }
              >
                <button className="flex space-x-2 items-center justify-center">
                  <img src={car} height="20" width="20" id="user-image" />
                  <span className=" font-normal">Car Hire</span>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
        <h2
          className=" font-serif text-white  py-4 sm:hidden md:block "
          style={{
            fontSize: "2rem",
            maxWidth: "75%",
            fontWeight: "700",
            fontFamily:
              "RelativeSet, Skyscanner Relative, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
          }}
        >
          Millions of cheap flights. One simple search.
        </h2>
        <div className="serach-container " style={{ maxWidth: "75%" }}>
          {/* Search Bar */}
          <div className="flex flex-row gap-x-1 justify-between ">
            <div className=" ">
              <div className="upper-part">
                <label className="flex rounded-tl-xl rounded-bl-xl  bg-white flex-col">
                  <div className=" flex flex-col   rounded-bl-xl px-4 py-3">
                    <span className="flex  text-gray-600 items-start justify-start ">
                      From
                    </span>
                    <input
                      type="text"
                      placeholder="Country, City or Airport"
                      className=" text-black "
                      value={departureCity}
                      onChange={(e) => {
                        setdepartureCity(e.target.value);
                      }}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className=" w-full">
              <div className="upper-part">
                <div className=" z-1 absolute">
                  <button id="rotate-btn"></button>
                </div>
                <label className="flex   bg-white flex-col">
                  <div className=" flex flex-col  px-4 py-3">
                    <span className="flex  text-gray-600 items-start justify-start ">
                      To
                    </span>
                    <input
                      type="text"
                      className=" text-black "
                      placeholder="Country, City or Airport"
                      value={arrivalCity}
                      onChange={(e) => setarrivalCity(e.target.value)}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className=" w-full">
              <div className="upper-part">
                <label className="flex   bg-white flex-col">
                  <div className=" flex flex-col  px-4 py-2.5">
                    <span className="flex  text-gray-600 items-start justify-start ">
                      Depart
                    </span>

                    <label htmlFor="departureDate" />
                    <input
                      type="date"
                      id="departureDate"
                      className=" text-black "
                      name="departureDate"
                      value={departureDate}
                      onChange={async (event) => {
                        // Get the selected date as a string:
                        const selectedDate = event.target.value;
                        const formattedDate = new Date(selectedDate)
                          .toISOString()
                          .slice(0, 10);
                        console.log(formattedDate);
                        setdepartureDate(formattedDate);
                      }}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className=" w-full">
              <div className="upper-part">
                <label className="flex   bg-white flex-col">
                  <div className=" flex flex-col  px-4 py-2.5">
                    <span className="flex  text-gray-600 items-start justify-start ">
                      Return
                    </span>

                    <label htmlFor="returnDate" />
                    <input
                      type="date"
                      className=" text-black "
                      placeholder="Add Date"
                      id="returnDate"
                      name="returnDate"
                      value={returnDate}
                      onChange={(e) => {
                        // Get the selected date as a string:
                        const selectedDate = event.target.value;
                        const formattedDate = new Date(selectedDate)
                          .toISOString()
                          .slice(0, 10);
                        console.log(formattedDate);
                        setreturnDate(formattedDate);
                      }}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className=" w-full">
              <div className="upper-part">
                <label
                  htmlFor="Travellers"
                  className="flex rounded-tr-xl rounded-br-xl  bg-white flex-col"
                >
                  <div className=" flex flex-col   rounded-bl-xl px-4 py-3">
                    <span className="flex  text-gray-600 items-start justify-start ">
                      Travellers
                    </span>
                    <input
                      type="text"
                      className=" text-black "
                      name="Travellers"
                      value={Travellers}
                      autoComplete="off"
                      onChange={(e) => setTravellers(e.target.value)}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="flex px-2 items-center justify-center">
              <button className="bg-blue-600 font-medium text-white py-6 px-6 rounded-lg hover:bg-blue-800">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex  space-x-12">
          <label className="flex py-4 text-white items-center">
            <input
              type="checkbox"
              className=" h-4 w-4 mr-2"
              style={{ width: "1.25rem" }}
            />
            <span>Direct Flights</span>
          </label>
        </div>
      </header>
    </div>
  );
}
