import React from 'react';

 const ResultTracker=({ipAddressApi,isp,ipUserLocation})=> {
     const {city,timezone,postalCode}=ipUserLocation
    
     
    return (
        <div className="ResultTracker">
            <div className="ResultItem"><span>Ip address</span>{ipAddressApi}</div>
            <div className="ResultItem"><span>location</span>{city},{postalCode}</div>
            <div className="ResultItem"><span>timezone</span>{`UTC ${timezone}`}</div>
            <div className="ResultItem"><span>isp</span>{isp}</div>
        </div>
    )
}
export default ResultTracker;

