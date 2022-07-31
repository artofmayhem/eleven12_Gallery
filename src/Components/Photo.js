import React from "react";
import { FAMILY_VERT_1 } from "../assets";
import { FAMILY_VERT_2 } from "../assets";
import { FAMILY_VERT_3 } from "../assets";

export default function Photo() {
  return (
    <React.Fragment>
      <div className="photo-block py-24 bg-slate-300 flex flex-row flex-wrap justify-evenly align-center">
        <img src={FAMILY_VERT_2} className="w-64 h-auto" alt="happy family" />
        <img src={FAMILY_VERT_1} className="w-64 h-auto" alt="happy family" />
        <img src={FAMILY_VERT_3} className="w-64 h-auto" alt="happy family" />
      </div>
    </React.Fragment>
  );
}
