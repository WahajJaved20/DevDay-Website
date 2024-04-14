import React from "react";
import HOC from "./HOC";
import {community, karachiAI, mlsaKhi, pug, tenPearls, componentDivider, aws} from "../assets"
const logoSources = {
    aws: aws,
    karachiAI: karachiAI,
    mlsaKhi: mlsaKhi,
    pug: pug,
    tenPearls: tenPearls,
}

function CommunityPartnerLogos({ communities }) {
  return (
    <div className="sponsor-logos flex flex-wrap justify-center items-center">
      {Object.entries(communities).map(([communityName, logoPath]) => (
        <img
          key={communityName}
          src={logoPath}
          alt={`${communityName} Logo`}
          className="sponsor-logo w-24 h-24 mx-2 my-2 object-contain md:w-32 md:h-32 lg:w-48 lg:h-48"
        />
      ))}
    </div>
  );
}

function CommunityPartners(){
    return (
        <>
            <div className='flex flex-row justify-between items-center mx-auto grid grid-cols-2'>
                <div classname="flex flex-col text-left ml-0 md:ml-8">
                    <h1 className="text-[30px] md:text-[50px] lg:text-[70px] font-Gotham  font-bold text-headerColorOne mt-8 lg:mt-0">COMMUNITY </h1>
                    <h1 className="text-[30px] md:text-[50px] lg:text-[70px] font-Gotham font-bold text-headerColorTwo">PARTNERS</h1>
                </div>
                <img src={community} alt="outReach" className="lg:h-60 lg:w-86 text-right ml-[20%]"/>
            </div>
            <div>
                <img src={componentDivider} alt="componentDivider" className="h-2 w-full mt-8 mb-8 mr-4 ml-4"/>
                    <CommunityPartnerLogos communities={logoSources} />
                <img src={componentDivider} alt="componentDivider" className="w-full h-2 mt-8 mb-8 mr-4 ml-4"/>
            </div>
        </>
    )
}

const HOCCommunities = HOC(CommunityPartners);
export default HOCCommunities;