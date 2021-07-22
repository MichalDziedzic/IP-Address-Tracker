import React from 'react'

const InputTracker=({ipAddress,setIpAdress})=> {
    
   const ChangeIpAddress=(e)=>
   {
        setIpAdress(e.target.value)
   }
    return (
        <div className="inputDiv">
        <input type="text" className="addressIp_input" name="addressIp_input" id="addressIp_input" onChange={ChangeIpAddress} value={ipAddress} />
        <button className="btn-dark">CHECK</button>
    </div>
    )
}
export default InputTracker;