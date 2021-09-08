import React from "react";

const InputTracker = ({ ipAddress, setIpAdress, ChangeSearchFlag }) => {
     const changeIpAddress = (e) => {
          setIpAdress(e.target.value);
     };

     return (
          <div className="inputDiv">
               <input
                    type="text"
                    className="addressIp_input"
                    name="addressIp_input"
                    id="addressIp_input"
                    onChange={changeIpAddress}
                    value={ipAddress}
                    placeholder="Search for any IP adress or domain"
               />
               <button className="btn-dark" onClick={ChangeSearchFlag}>
                    CHECK
               </button>
          </div>
     );
};
export default InputTracker;
