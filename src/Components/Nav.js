import { useState } from "react";

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";

const initialSearchValue = {
    value: "",
};

function Nav() {
  const [searchValue, setSearchValue] = useState(initialSearchValue);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log("Search value: ", searchValue);
  };

  return (
    <div className="Nav-Wrapper bg-violet-800 py-4 ">
      <div className="Nav-Content flex justify-between px-10 my-4 flex-row align-center">
        <div>
          <SearchIcon className="text-white mr-2" />
          <input
            className="bg-violet-800 border-2 border-white w-48 text-xl"
            value={searchValue.value}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <h1 className="text-5xl">ELEVN12</h1>
        </div>
        <div>
          <button className="py-2 px-6 bg-gray-400 text-xl">Sign Up Now</button>
          <LoginIcon className="text-white ml-6" />
        </div>
      </div>
      <div className="Nav-Content-Links flex flex-row justify-center align-center my-6">
        <ul className="flex flex-row justify-center align-center text-xl">
          <a href="https://www.yahoo.com" className="px-4">
            Home
          </a>
          <a href="https://www.yahoo.com" className="px-4">
            About
          </a>
          <a href="https://www.yahoo.com" className="px-4">
            Contact
          </a>
          <a href="https://www.yahoo.com" className="px-4">
            Login
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
