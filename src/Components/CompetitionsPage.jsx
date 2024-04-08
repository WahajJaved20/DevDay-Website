import React from "react";
import HOC from "./HOC";
import { competitionsLady, componentDivider, csCornerDesign, downloadButton, roboticsImageDesign } from "../assets";
import { CScompetitionData, GeneralCompetitionData, RoboticsCompetitionData } from "../constants/competitionLinks";
function Competitions(){
    return (
        <div>
            <div className='flex flex-col lg:flex-row mx-auto justify-center relative mt-16'>
                <img src={competitionsLady} alt="competitionsLady" className="w-36 h-36 lg:w-64 lg:h-64 ml-8 lg:ml-0" />
                <h1 className="text-[30px] md:text-[50px] lg:text-[70px] font-Gotham  font-bold text-headerColorOne mt-16">COMPETITIONS</h1>
            </div>
            <img src={componentDivider} alt="componentDivider" className="h-2 w-full mt-8 mb-8 mr-4 ml-4"/>
            <h1 className="text-[25px] md:text-[40px] lg:text-[60px] font-Gotham  font-bold text-competitionHeader mt-16">COMPUTER SCIENCE</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CScompetitionData.map((competition, index) => (
                    competition.title === "Image Dikhao waaj" ? (
                        <img src={csCornerDesign} alt="csCornerDesign"/>
                    ) : 
                    competition.title === "Khaali Div" ? <div className="hidden lg:block"></div> : 
                    <div key={index} className="relative p-4 bg-headerButtonOne m-8" style={{
                        boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
                    }}>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold mb-2 font-Gotham">{competition.title}</h2>
                        <p className="text-gray-700 mb-2 font-circularStd">{competition.description}</p>
                    </div>
                    <div className="flex justify-end">
                        <button
                        className=" font-bold"
                        title="Download"
                        
                        >
                        <img src={downloadButton} alt="downloadButton" className="h-12 w-12"
                        onClick={()=>{
                            window.open(competition.link, "_blank")
                        
                        }}
                        />
                        </button>
                    </div>
                    </div>
                ))}
            </div>
            <img src={componentDivider} alt="componentDivider" className="h-2 w-full mt-8 mb-8 mr-4 ml-4"/>
            <h1 className="text-[25px] md:text-[40px] lg:text-[60px] font-Gotham  font-bold text-competitionHeader mt-16">GENERAL COMPETITIONS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {GeneralCompetitionData.map((competition, index) => (
                    <div key={index} className="relative p-4 bg-generalCompetitionColor m-8" style={{
                        boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
                    }}>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold mb-2 font-Gotham">{competition.title}</h2>
                        <p className="text-gray-700 mb-2 font-circularStd">{competition.description}</p>
                    </div>
                    <div className="flex justify-end">
                        <button
                        className=" font-bold"
                        title="Download"
                        onClick={()=>{
                            window.open(competition.link, "_blank")
                        
                        }}
                        >
                        <img src={downloadButton} alt="downloadButton" className="h-12 w-12"/>
                        </button>
                    </div>
                    </div>
                ))}
            </div>
    
            <img src={componentDivider} alt="componentDivider" className="h-2 w-full mt-8 mb-8 mr-4 ml-4"/>
            <h1 className="text-[25px] md:text-[40px] lg:text-[60px] font-Gotham  font-bold text-competitionHeader mt-16">ROBOTICS COMPETITIONS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {RoboticsCompetitionData.map((competition, index) => (
                    competition.title === "Image Dikhao waaj" ? <img src={roboticsImageDesign} alt="roboticsImageDesign"/> : 
                    <div key={index} className="relative p-4 bg-roboticsCompetitionColor m-8" style={{
                        boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
                    }}>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-2 font-Gotham">{competition.title}</h2>
                        <p className="text-gray-700 mb-2 font-circularStd">{competition.description}</p>
                    </div>
                    <div className="flex justify-end">
                        <button
                        className=" font-bold"
                        title="Download"
                        onClick={()=>{
                            window.open(competition.link, "_blank")
                        
                        }}
                        >
                        <img src={downloadButton} alt="downloadButton" className="h-12 w-12"/>
                        </button>
                    </div>
                    </div>
                ))}
            </div>
            <img src={componentDivider} alt="componentDivider" className="h-2 w-full mt-8 mb-8 mr-4 ml-4"/>
        </div>
    )
}

const HOCCompetitions = HOC(Competitions)
export default HOCCompetitions;