import React from "react";
import bgImage from "../assets/ambassadorPageBackground.jpg"
import Navbar from "./Navbar";
function AmbassadorsPage(){
    return(
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen w-full"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <h1 className="text-[15px] md:text-[40px] lg:text-[60px] font-Gotham  font-bold text-headerColorTwo mt-2">AMBASSADOR REGISTRATIONS</h1>
            <h1 className="text-[15px] md:text-[40px] lg:text-[60px] font-Gotham font-bold text-headerColorTwo">ARE NOW COMPLETE!</h1>
            <h1 className="text-[15px] lg:text-[25px] font-circularStd font-bold text-headerColorTwo">THANK YOU FOR JOINING US!</h1>
        </div>
        </>
    )
}
export default AmbassadorsPage;