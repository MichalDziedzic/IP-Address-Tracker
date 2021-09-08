import React from "react";

const ResultTracker = ({ ipAddressApi, isp, ipUserLocation }) => {
     const { city, timezone, postalCode } = ipUserLocation;

     return (
          <div className="ResultTracker">
               <div className="ResultItem">
                    <span>Ip address</span>
                    <p>{ipAddressApi}</p>
               </div>
               <div className="ResultItem">
                    <span>location</span>
                    <p>
                         {city},{postalCode}
                    </p>
               </div>
               <div className="ResultItem">
                    <span>timezone</span>
                    <p>{`UTC ${timezone}`},</p>
               </div>
               <div className="ResultItem">
                    <span>isp</span>
                    <p>{isp}</p>
               </div>
          </div>
     );
};
export default ResultTracker;
