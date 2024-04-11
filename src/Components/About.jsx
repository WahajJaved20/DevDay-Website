import React from "react";
import Navbar from "./Navbar";
import { aboutFive, aboutFour, aboutOne, aboutTwo, componentDivider, excomBackground } from "../assets";
import ExcomCard from "./ExcomCard";
import { excomData } from "../constants/excomData";
import { coreTeamData } from "../constants/coreData";
import { extendedTeamData } from "../constants/extended";
import CoreCard from "./CoreCard";
import HomeFooter from "./HomeFooter";
function About(){
    return (<>
        <Navbar />
        <div className="inline-block lg:flex lg:justify-between lg:items-center mt-12">
        <div className="w-100 ml-0 lg:w-1/2 lg:ml-20 ">
            <h1 className="font-Gotham text-headerColorOne font-extrabold text-5xl text-center lg:text-left lg:text-7xl ml-5">ABOUT US</h1>
            <h2 className="mainh2 text-blue-950 text-headerColorTwo font-bold text-4xl mt-4 text-center lg:text-left lg:text-5xl ml-5">WHAT IS ACM?</h2>
            <p className="text-black font-circularStd font-semibold text-md text-left ml-5 md:text-left lg:text-left lg:text-lg xl:text-lg pt-12">
            The ACM Student Chapter at FAST-NUCES Karachi Campus is dedicated to
            the promotion of computing education, research and development.
            <br />
            <br />
            At ACM-NUCES KHI Chapter, you join a team that aims to change the
            methodology with which students approach computing and technology. We
            do our utmost to deliver the latest, and most innovative educational
            and professional development resources that our members require to
            strengthen their skill sets and enrich their careers. Most
            importantly, we take your view into consideration.
            <br />
            <br />
            At ACM-NUCES KHI Chapter. It’s all about YOU! Join Us and enjoy the
            truly unique benefits.
            </p>
            </div>
            <div>
            <img src={aboutOne} alt="Image" className="mx-auto hidden lg:flex" />
            </div>
        </div>

        <div className="inline-block lg:flex lg:justify-evenly lg:align-center mt-28">
          <img src={aboutTwo} alt="" className="mx-auto lg:mx-0" />
          <div className="w-full lg:w-2/5">
                <h1 className="font-Gotham font-extrabold text-headerColorOne text-6xl mb-8 text-center lg:text-left mt-20 lg:mt-0 lg:text-7xl">EX-COM</h1>
                <p className="text-black font-circularStd mx-4 font-semibold text-lg text-left lg:text-lg xl:text-lg">Leadership is an action it's no position. Those in action lead the way towards success, having zestful and dynamic leaders who know how to accelerate their way up in their game; and not only this, they know how to trump together. Welcoming the quintessential Executive Committee of ACM NUCES for the tenure of 2023-2024. We hope they touch new horizons and leave the remarkable footprints for others to follow.</p>
            </div>
        </div>
        <div style={{
            backgroundImage: excomBackground,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",

            }}>
        <div className="m-4 flex flex-wrap gap-10 lg:gap-16 mx-auto justify-center bg-cover" 
        >
                {excomData.map((data) => {
            return (
              <ExcomCard imgUrl={data.imgUrl} title={data.title} name={data.name}/>
            )
          })}
          
        </div>
        </div>
        <img src={componentDivider} alt="componentDivider" className="h-2 w-[90%] mt-8 mb-8 mr-8 ml-8"/>
        <div className="inline-block lg:flex lg:justify-evenly lg:align-center mt-28">
          <img src={aboutFour} alt="" className="mx-auto lg:mx-0" />
          <div className="w-full lg:w-2/5">
                <h1 className="font-Gotham text-headerColorOne font-extrabold text-6xl text-600 mb-8 text-center lg:text-left mt-20 lg:mt-0 lg:text-7xl">CORE TEAM</h1>
                <p className="text-black font-circularStd font-semibold mx-4 text-lg lg:text-lg xl:text-lg">In the realm of ACM DevDay, leadership transcends titles to embody proactive commitment. The Core Team for 2024 exemplifies dynamic leadership and collaborative prowess. As architects of innovation, we anticipate their transformative impact, leaving an enduring legacy for future initiatives. Here's to a remarkable tenure, inspiring others to follow suit.</p>
            </div>
        </div>

        <div className="m-4 mt-20 flex flex-wrap gap-3 md:gap-10 mx-auto justify-center">
          {coreTeamData.map((data) => {
            return (
              <CoreCard imgUrl={data.imgUrl} title={data.title} name={data.name}/>
            )
          })}
        </div>

        <img src={componentDivider} alt="componentDivider" className="h-2 w-[90%] mt-8 mb-8 mr-8 ml-8"/>
        <div className="inline-block lg:flex lg:justify-evenly lg:align-center mt-28">
          <img src={aboutFive} alt="" className="mx-auto lg:mx-0" />
          <div className="w-full lg:w-2/5">
                <h1 className="font-Gotham text-headerColorOne font-extrabold text-6xl text-600 mb-8 text-center lg:text-left mt-20 lg:mt-0 lg:text-7xl">EXTENDED EXCOM</h1>
                <p className="text-black font-circularStd font-semibold mx-4 text-lg lg:text-lg xl:text-lg">In the dynamic world of ACM DevDay, the Extended Executive Committee (2023-2024) embodies proactive leadership and effective collaboration. As trailblazers in their fields, their transformative influence promises a lasting legacy, inspiring excellence in others. Cheers to an exceptional tenure!</p>
            </div>
        </div>

        <div className="mt-20 ml-8 flex flex-wrap ">
          {extendedTeamData.map((data) => {
            return (
              <div className="flex flex-col lg:flex-row md:flex-row lg:w-1/2 mb-8">
                <img src={data.circle} alt="circle" className="w-16 h-16 ml-8 my-2" />
                
                <div className="flex flex-col">
                <h1 className="ml-8 font-Gotham text-black text-2xl  lg:mt-0 ">{data.title}</h1>
                { data.members.map((member) => {
                    return (
                        <div className="flex flex-col ml-8">
                        
                        <h2 className="text-black text-black font-circularStd font-semibold text-lg ">{member.title}</h2>
                        <h2 className="text-black text-extendedNameColor font-circularStd font-semibold text-lg ">{member.name}</h2>
                        </div>
                    )
                })}
                </div>
              </div>
            )
          })}
        </div>
        <img src={componentDivider} alt="componentDivider" className="h-2 w-[90%] mt-8 mb-8 mr-8 ml-20"/>
        <HomeFooter />
    </>)
}
export default About;