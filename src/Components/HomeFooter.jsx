import React from "react";
import { acmLogo, componentDivider } from "../assets";
import HOC from "./HOC";


const Footer = () => {
  return (
    <>
      <div className="">

        <footer className="">
          <div className="mx-auto w-full  p-4 py-6 lg:py-8 ">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 ml-9">
              <a href="https://www.acmdevday.com" className="flex items-center md:flex md:justify-center">
                <img className="mx-auto md:mx-0" src={acmLogo} width={"250vw"} alt="Logo" />
              </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-9 ">
                <div>
                  <h2 className="mb-6 text-lg font-bold text-black uppercase font-Gotham">
                    Our Events
                  </h2>
                  <ul className="font-medium text-lg text-black font-circularStd">
                    <li className="mb-4 ">
                      <a href="https://www.acmcoderscup.online/" className="hover:underline">
                        Coders Cup
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className=" text-sm font-bold text-black uppercase text-lg ml-6 font-Gotham">
                    Connect with Us
                  </h2>

                  <div className="flex flex-wrap m-4">
                    
                  </div>
                </div>
              </div>
            </div>
            <img src={componentDivider} alt="componentDivider" className="h-2 w-full mt-8 mb-8 mr-4 ml-4"/>


              <h2 className="text-sm text-black text-center mx-auto text-black">
                © 2024{" "}
                <a href="https://devday23.tech/index.html" className="hover:underline">
                  ACM NUCES™
                </a>
                . All Rights Reserved.
              </h2>
          </div>
        </footer>
      </div>
    </>
  );
};
const HOCFooter = HOC(Footer)
export default HOCFooter;