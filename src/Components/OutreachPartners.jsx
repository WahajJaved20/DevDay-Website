import React from "react";
import HOC from "./HOC";
import {outreach, acmDsu, aicp, bahria, fastEvents, gdscIlma, habib, ieeeWie, iobm, karachiAI, kiet, mlsaKhi, pug, smiu, ssuet, szabist, tenPearls, uit, componentDivider} from "../assets"
const logoSources = {
    acmDsu: acmDsu,
    aicp: aicp,
    bahria: bahria,
    fastEvents: fastEvents,
    gdscIlma: gdscIlma,
    habib: habib,
    ieeeWie: ieeeWie,
    iobm: iobm,
    kiet: kiet,
    smiu: smiu,
    ssuet: ssuet,
    szabist: szabist,
    uit: uit
}

function OutreachPartnerLogos({ partners }) {
  return (
    <div className="sponsor-logos flex flex-wrap justify-center items-center">
      {Object.entries(partners).map(([partnerName, logoPath]) => (
        <img
          key={partnerName}
          src={logoPath}
          alt={`${partnerName} Logo`}
          className="sponsor-logo w-24 h-24 mx-2 my-2 object-contain md:w-32 md:h-32 lg:w-48 lg:h-48"
        />
      ))}
    </div>
  );
}

function OutreachPartners(){
    return (
        <>
            <div className='flex flex-row justify-between items-center mx-auto grid grid-cols-2'>
                <div classname="flex flex-col text-left ml-0 md:ml-8">
                    <h1 className="text-[30px] md:text-[50px] lg:text-[70px] font-Gotham  font-bold text-headerColorOne mt-8 lg:mt-0">OUTREACH </h1>
                    <h1 className="text-[30px] md:text-[50px] lg:text-[70px] font-Gotham font-bold text-headerColorTwo">PARTNERS</h1>
                </div>
                <img src={outreach} alt="outReach" className="lg:h-60 lg:w-86 text-right ml-[20%]"/>
            </div>
            <div>
                <img src={componentDivider} alt="componentDivider" className="h-2 w-full mt-8 mb-8 mr-4 ml-4"/>
                    <OutreachPartnerLogos partners={logoSources} />
                <img src={componentDivider} alt="componentDivider" className="w-full h-2 mt-8 mb-8 mr-4 ml-4"/>
            </div>
        </>
    )
}

const HOCPartners = HOC(OutreachPartners);
export default HOCPartners;