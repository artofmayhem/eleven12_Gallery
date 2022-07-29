import { useState } from "react";

//State Value Imports
import initialSearchValue from "../State/initialSearchValue";

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttributionIcon from "@mui/icons-material/Attribution";
import { Switch } from "@mui/material";

function Nav() {
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const [isDarkMode, setIsDarkMode] = useState(false);

  //Handle Changes
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log("Search value: ", searchValue);
  };

  // Handle Dark Mode Switch
  const handleDarkModeSwitch = (event) => {
    setIsDarkMode(event.target.checked);
    console.log("Dark Mode: ", isDarkMode);
  }


  return (
    <div className="Nav-Wrapper bg-violet-800 animate-fade-in-down">
      <div className="Nav-Content flex justify-between px-10 my-4 flex-row align-center">
        <div>
          <SearchIcon className="text-white mr-2" />
          <input
            className="bg-violet-800 w-48 text-xl text-center"
            placeholder="Search"
            value={searchValue.value}
            onChange={handleSearchChange}
          />
        </div>
        <div>
        <div className="logo-dot-sm self-start" />
          <h1 className="text-3xl logo-name-location">ELEVN12</h1>
        </div>
        <div className="flex flex-col justify-end align-center ">
          <div>
            <button className="py-2 px-6 bg-gray-400 text-xl">
              Resident Portal
            </button>
            <LoginIcon className="text-white ml-6" />
          </div>
          <div className="flex self-end justify-center align-center">
            <p className='text-xs text-slate-300 mt-3'>Dark Mode</p>
           <Switch onChange={handleDarkModeSwitch}></Switch>
           </div>
        </div>
       
      </div>
      <div className="Nav-Content-Links flex flex-row justify-center align-center my-6">
        <ul className="flex flex-row justify-center align-center text-2xl">
          <a href="https://www.yahoo.com" className="px-4">
            <HomeIcon className="text-white mr-10 nav-hover" />
          </a>
          <a href="https://www.yahoo.com" className="px-4">
            <InfoIcon className="text-white mr-10 nav-hover" />
          </a>
          <a href="https://www.yahoo.com" className="px-4">
            <SupportAgentIcon className="text-white mr-10 nav-hover" />
          </a>{" "}
          <a href="https://www.yahoo.com" className="px-4">
            <AttributionIcon className="text-white mr-10 nav-hover" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
