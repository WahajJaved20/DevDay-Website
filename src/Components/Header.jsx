import React from "react"
import HOC from "./HOC"
import { buttonDivider, devday, dot, womanWorking, DDSponsorLogo } from "../assets";

function Header(){
    return (
        <div>
        <div className='flex flex-row mx-auto justify-center relative'>
            <img src={DDSponsorLogo} alt="devday" className="w-[1000px] h-[300px] " />
            <div classname="flex flex-col">
            {/* <h1 className="text-[30px] md:text-[50px] lg:text-[80px] font-Gotham  font-bold text-headerColorOne mt-8 lg:mt-0">DEVELOPER'S</h1>
            <h1 className="text-[30px] md:text-[50px] lg:text-[80px] font-Gotham font-bold text-headerColorTwo">DAY '24</h1>
            <div className="hidden lg:block md:block">
                <div className="flex flex-row ">
                    <h1 className="text-[15px] lg:text-[25px] font-circularStd font-bold text-headerColorTwo">DREAM</h1>
                    <img src={dot} alt="dot" className="h-2 w-2 lg:w-4 lg:h-4 mt-2 ml-2 mr-2"></img>
                    <h1 className="text-[15px] lg:text-[25px] font-circularStd font-bold text-headerColorTwo">DEVELOP</h1>
                    <img src={dot} alt="dot" className="h-2 w-2 lg:w-4 lg:h-4 mt-2 ml-2 mr-2 "></img>
                    <h1 className="text-[15px] lg:text-[25px] font-circularStd font-bold text-headerColorTwo">DELIVER</h1>
                </div>
            </div> */}
            </div>
            {/* <img src={womanWorking} alt="devday" className="hidden lg:block w-64 h-64 ml-[-30px]" /> */}
        </div>
        {/* <div className="md:hidden">
                <div className="flex flex-row ">
                    <h1 className="text-[15px] lg:text-[25px] font-circularStd font-bold text-headerColorTwo">DREAM</h1>
                    <img src={dot} alt="dot" className="h-2 w-2 lg:w-4 lg:h-4 mt-2 ml-2 mr-2"></img>
                    <h1 className="text-[15px] lg:text-[25px] font-circularStd font-bold text-headerColorTwo">DEVELOP</h1>
                    <img src={dot} alt="dot" className="h-2 w-2 lg:w-4 lg:h-4 mt-2 ml-2 mr-2 "></img>
                    <h1 className="text-[15px] lg:text-[25px] font-circularStd font-bold text-headerColorTwo">DELIVER</h1>
                </div>
            </div> */}
        <p className="text-md font-circularStd text-black text-left relative z-10 lg:ml-[25%] md:ml-[20%] lg:mr-[20%] md:mr-[15%]">
        E.ocean Developers' Day is a platform provided for innovative minds to come together 
        in pursuit of a more technological tomorrow. It provides you with the opportunity to work 
        your passion, expand your horizon of knowledge and skills and spread ideas for a new high.
         Not only does this boost your teamworking skills, but the sponsorship promoting DevDay also 
         brings the chance for you to expand your networks for a more guaranteed place in the industry.
          </p>
          <div className="flex mt-4 flex-col md:flex-row lg:ml-[25%] md:ml-[20%] lg:mr-[20%] md:mr-[15%]">
          <div
                onClick={() =>{
                    window.location.href = "/register"
                }}
                style={{cursor: "pointer"}}
                className={`bg-headerButtonOne mt-4 lg:mt-0 font-circularStd px-4 py-2 rounded-full font-black text-l lg:text-xl md:text-x md:text-xl text-center`}
            >
                Register Now
            </div>
          <img src={buttonDivider} alt="buttonDivider" className="hidden sm:flex h-8 mt-2 mr-8 ml-8"/>
          <div
                onClick={() =>{
                    window.location.href = "/ambassadors"
                }}
                style={{cursor: "pointer"}}
                className={`bg-headerButtonTwo mt-4 lg:mt-0 font-circularStd px-4 py-2 rounded-full font-black text-l lg:text-xl md:text-x md:text-xl text-center`}
            >
                Become An Ambassador
            </div>
            <img src={buttonDivider} alt="buttonDivider" className="hidden sm:flex h-8 mt-2 mr-8 ml-8"/>
            <a
                href="https://fypxtreme.acmdevday.com"
                className={`bg-headerButtonThree mt-4 lg:mt-0 font-circularStd px-4 py-2 rounded-full font-black text-l lg:text-xl md:text-xl text-center`}
            >
                FYP Xtreme
            </a>
        </div>
        </div>
      );
}

const HOCHeader = HOC(Header)
export default HOCHeader;