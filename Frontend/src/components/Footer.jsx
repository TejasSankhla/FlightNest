import React from "react";

function Footer() {
  return (
    <div className="w-full  bg-blue-950 m-auto p-4">
      <div className=" grid grid-cols-4 my-12">
        <div className=" w-full">
          <button className=" rounded-lg text-center text-white w-full">
            <input
              className=" rounded-lg text-center bg-blue-900 p-2 text-white "
              type="text"
              placeholder="India.English(UK)"
            />
          </button>
        </div>
        <ul className=" flex flex-col space-y-4 text-white">
          <li>Help</li>
          <li>Privacy Settings</li>
          <li>Log In</li>
        </ul>
        <ul className=" flex flex-col space-y-4 text-white">
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service </li>
          <li>Company Details </li>
        </ul>
        <ul className=" flex flex-col space-y-4 text-white">
          <li>Explore</li>
          <li>Company</li>
          <li>Partners Trip</li>
          <li>International Sites</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
