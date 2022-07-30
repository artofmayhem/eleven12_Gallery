import React from "react";
import {
  GALLERY_1,
  GALLERY_2,
  GALLERY_3,
  GALLERY_4,
  GALLERY_5,
  GALLERY_6,
  ARCHITECTURE_1,
} from "../assets";

export default function Gallery() {
  return (
    <React.Fragment>
      <div className="gallery-block flex flex-col justify-center align-center">
        {/* Slide Containers */}
        <div
          className={
            "flex flex-row flex-wrap justify-center text-white mx-auto mt-10 mb-10"
          }
          style={{ width: "40vw", minWidth: "375" }}
        >
          <ul className="slides">
            {/* Slides */}
            <input type="radio" name="radio-btn" id="img-1" defaultChecked />
            <li className="slide-container">
              <div className="slide">
                <p className={"text-2xl"}>
                  <img
                    src={GALLERY_1}
                    alt="Beautiful, symmetrical bedroom with beautiful bedding"
                  />
                </p>
              </div>
              <div className="nav">
                <label htmlFor="img-6" className="prev">
                  &#x2039;
                </label>
                <label htmlFor="img-2" className="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-2" />
            <li className="slide-container">
              <div className="slide">
                <p className={"text-2xl"}>
                  <img
                    src={GALLERY_5}
                    alt="Beautiful, symmetrical bedroom with beautiful bedding"
                  />
                </p>
              </div>
              <div className="nav">
                <label htmlFor="img-1" className="prev">
                  &#x2039;
                </label>
                <label htmlFor="img-3" className="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-3" />
            <li className="slide-container">
              <div className="slide">
                <p className={"text-2xl"}>
                  <img
                    src={GALLERY_3}
                    alt="Beautiful, symmetrical bedroom with beautiful bedding"
                  />
                </p>
              </div>
              <div className="nav">
                <label htmlFor="img-2" className="prev">
                  &#x2039;
                </label>
                <label htmlFor="img-4" className="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-4" />
            <li className="slide-container">
              <div className="slide">
                <p className={"text-2xl"}>
                  <img
                    src={GALLERY_4}
                    alt="Beautiful, symmetrical bedroom with beautiful bedding"
                  />
                </p>
              </div>
              <div className="nav">
                <label htmlFor="img-3" className="prev">
                  &#x2039;
                </label>
                <label htmlFor="img-5" className="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-5" />
            <li className="slide-container">
              <div className="slide">
                <p className={"text-2xl"}>
                  <img
                    src={GALLERY_2}
                    alt="Beautiful, symmetrical bedroom with beautiful bedding"
                  />
                </p>
              </div>
              <div className="nav">
                <label htmlFor="img-4" className="prev">
                  &#x2039;
                </label>
                <label htmlFor="img-6" className="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-6" />
            <li className="slide-container">
              <div className="slide">
                <p className={"text-2xl"}>
                  <img
                    src={GALLERY_6}
                    alt="Beautiful, symmetrical bedroom with beautiful bedding"
                  />
                </p>
              </div>
              <div className="nav">
                <label htmlFor="img-5" className="prev">
                  &#x2039;
                </label>
                <label htmlFor="img-1" className="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <li className="nav-dots">
              <label htmlFor="img-1" className="nav-dot" id="img-dot-1"></label>
              <label htmlFor="img-2" className="nav-dot" id="img-dot-2"></label>
              <label htmlFor="img-3" className="nav-dot" id="img-dot-3"></label>
              <label htmlFor="img-4" className="nav-dot" id="img-dot-4"></label>
              <label htmlFor="img-5" className="nav-dot" id="img-dot-5"></label>
              <label htmlFor="img-6" className="nav-dot" id="img-dot-6"></label>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="decorative-stripe-lt pl-48 h-64 px-16 mt-24 flex flex-col justify-center align-center">
        <h2>
          GREAT COMMUNITIES SHAPE HOW WE LIVE. THE SAME GOES FOR YOUR HOME.
        </h2>
      </div>{" "}
      <div className="flex flex-row flex-wrap align-center justify-evenly align-center self-center py-16 px-12 mr-24">
        <div>
          <div className="logo-dot-lg self-start">
            <div className="logo-dot-violet bg-violet-500 self-start" />
          </div>
          <h4 className="py-12 mt-32 text-right w-96 self-center">
            The architecture firm was chosen based on their sensitivity to the
            context and uniqueness of the location, artistic expression, and a
            proven track record for designing inspiring buildings. Solomon
            Cordwell Buenz, winners of the coveted American Architecture Award
            for Anaha in Ward Village, were the obvious choice.
          </h4>
        </div>
        <img
          src={ARCHITECTURE_1}
          className="pl-16 my-24 photo-sizer"
          alt="sketch of modern architecture"
        />
        <div className="decorative-stripe-rt pl-48 h-64 px-16 mt-24 flex flex-col justify-center align-center">
          <div className="logo-dot-lg self-end">
            <div className="logo-dot-violet bg-violet-500 self-end" />
          </div>
          <h2>
            Experience the difference of a modern home made for your contemporary lifestyle. 
          </h2>
        </div>{" "}
      </div>
    </React.Fragment>
  );
}
