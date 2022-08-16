import React from "react";

// Material UI Library Imports
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttributionIcon from "@mui/icons-material/Attribution";
// import { style } from "@mui/system";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footer-block flex flex-col justify-center align-center">
        <div className="footer-block-content-left">
          <div className="logo-dot self-start" />
          <h1 className="text-sizer self-start">ELEVN12</h1>
          <h2 className="self-end">
            Experience the future of contemporary living today
          </h2>
        </div>
        <div className="footer-block-content-right">
          <ul className="flex flex-row justify-center align-center">
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
    </React.Fragment>
  );
}
