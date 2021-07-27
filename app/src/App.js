import React, {useState,useEffect} from "react";
import axios from 'axios';
import './App.css';
import HeaderTitle from'./components/Header';
import InputTracker from'./components/InputTracker';
import ResultTracker from'./components/ResultTracker';
 import Map from './components/Map';

 const App=()=> {
      const [ipUserLocation ,setIpUserLocation]=useState([]);
      const [isp,setIsp]=useState('');
    const [lat,setLat]=useState('');
    const [lng,setLng]=useState('');
    const [SearchIpFlag,setSearchIpFlag]=useState(false);
     const [ipAddress,setIpAdress]=useState('');
    
   

  useEffect(()=>{
     const apiKey=`at_ZWirdu7GQBgYHHcfroKKUmHvLAbRN`;
    axios.get(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
    .then((response)=>{
      setIpAdress(response.data.ip)
      setLat(response.data.location.lat);
      setLng(response.data.location.lng);
       setIpUserLocation(response.data.location);
       setIsp(response.data.isp);
    })
    .catch(err => { console.log(err)})

  },[])

  useEffect(()=>{
    const apiKey=`at_ZWirdu7GQBgYHHcfroKKUmHvLAbRN`;
   axios.get(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`)
   .then((response)=>{
     setLat(response.data.location.lat);
     setLng(response.data.location.lng);
      setIpUserLocation(response.data.location);
      setIsp(response.data.isp);
   })
   .catch(err => { console.log(err)})

 },[SearchIpFlag]);


 const ChangeSearchFlag=()=>
 {
  setSearchIpFlag(!SearchIpFlag);
 }

  
  const projectAdress = `https://www.frontendmentor.io?ref=challenge`;
   const author= `Michał Dziedzic`;
 
   return(
  <div>
   <header>
    <HeaderTitle/>
    <InputTracker 
    ipAddress={ipAddress} 
    setIpAdress={setIpAdress}
    SearchIpFlag={SearchIpFlag}
    ChangeSearchFlag={ChangeSearchFlag}
    />
    <ResultTracker
      ipAddress={ipAddress}
      isp={isp}
      ipUserLocation={ipUserLocation}
    />
  </header>
  <section> 
       <Map lat={lat} lng={lng} ></Map> 
  </section> 
  <footer>
    Challenge by <a href={projectAdress} >Frontend Mentor</a>. 
    Coded by <a href={author}>{author}</a>.
  </footer> 
    
  </div> 
  );
}


export default App;
