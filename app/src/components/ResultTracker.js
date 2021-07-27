import React from 'react';

 const ResultTracker=({ipAddress,isp,ipUserLocation})=> {
     console.log(isp)
    return (
        <div className="ResultTracker">
            <div className="ResultItem">{ipAddress}</div>
            <div className="ResultItem">2</div>
            <div className="ResultItem">xdsss</div>
            <div className="ResultItem">{isp}</div>
        </div>
    )
}
export default ResultTracker;

