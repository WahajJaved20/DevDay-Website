import React from "react";
import HOC from "./HOC";
import { careemLogo, ceeLogo, componentDivider, eoceanLogo, faaLogo, handsPinch } from "../assets";
const logoSources = {
    eocean: eoceanLogo,
    careem: careemLogo,
    cee: ceeLogo,
    faa: faaLogo,
}

function SponsorLogos({ sponsors }) {
  return (
    <div className="sponsor-logos flex flex-wrap justify-center items-center">
      {Object.entries(sponsors).map(([sponsorName, logoPath]) => (
        <img
          key={sponsorName}
          src={logoPath}
          alt={`${sponsorName} Logo`}
          className="sponsor-logo w-24 h-24 mx-2 object-contain md:w-32 md:h-32 lg:w-48 lg:h-48"
        />
      ))}
    </div>
  );
}

function Sponsors(){
    return (
        <>
            <div className='flex flex-row justify-between items-center mx-auto grid grid-cols-2'>
                <div classname="flex flex-col text-left">
                    <h1 className="text-[30px] md:text-[50px] lg:text-[70px] font-Gotham  font-bold text-headerColorOne mt-8 lg:mt-0">BROUGHT TO </h1>
                    <h1 className="text-[30px] md:text-[50px] lg:text-[70px] font-Gotham font-bold text-headerColorTwo">YOU BY</h1>
                </div>
                <img src={handsPinch} alt="hands pinch" className="lg:h-60 lg:w-86 text-right ml-[30%]"/>
            </div>
            <div>
                <img src={componentDivider} alt="componentDivider" className="h-2 w-full mt-8 mb-8 mr-4 ml-4"/>
                    <SponsorLogos sponsors={logoSources} />
                <img src={componentDivider} alt="componentDivider" className="w-full mt-8 mb-8 mr-4 ml-4"/>
            </div>
        </>
    )
}

const HOCSponsors = HOC(Sponsors);
export default HOCSponsors;