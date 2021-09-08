import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HeaderTitle from "./components/Header";
import InputTracker from "./components/InputTracker";
import ResultTracker from "./components/ResultTracker";
import Map from "./components/Map";

const App = () => {
     const [ipUserLocation, setIpUserLocation] = useState([]);
     const [isp, setIsp] = useState("");
     const [lat, setLat] = useState("");
     const [lng, setLng] = useState("");
     const [searchIpFlag, setSearchIpFlag] = useState(false);
     const [ipAddress, setIpAdress] = useState("");
     const [ipAddressApi, setIpAddressApi] = useState("");

     useEffect(() => {
          const apiKey = `at_HG9XFoNYBeTecPKrS2fX9bQbEPEip`;
          axios.get(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
               .then((response) => {
                    setIpAdress(response.data.ip);
                    setLat(response.data.location.lat);
                    setLng(response.data.location.lng);
                    setIpUserLocation(response.data.location);
                    setIsp(response.data.isp);
               })

               .catch((err) => {
                    console.log(err);
               });
     }, []);

     useEffect(() => {
          const apiKey = `at_HG9XFoNYBeTecPKrS2fX9bQbEPEip`;
          axios.get(
               `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`
          )
               .then((response) => {
                    setIpAddressApi(response.data.ip);
                    setLat(response.data.location.lat);
                    setLng(response.data.location.lng);
                    setIpUserLocation(response.data.location);
                    setIsp(response.data.isp);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, [searchIpFlag]);

     const changeSearchFlag = () => {
          setSearchIpFlag(!searchIpFlag);
     };

     const projectAdress = `https://www.frontendmentor.io?ref=challenge`;
     const author = `https://github.com/MichalDziedzic`;

     return (
          <div>
               <header>
                    <HeaderTitle />
                    <InputTracker
                         ipAddress={ipAddress}
                         setIpAdress={setIpAdress}
                         searchIpFlag={searchIpFlag}
                         changeSearchFlag={changeSearchFlag}
                    />
                    <ResultTracker
                         ipAddressApi={ipAddressApi}
                         isp={isp}
                         ipUserLocation={ipUserLocation}
                    />
               </header>
               <section>
                    <Map lat={lat} lng={lng}></Map>
               </section>
               <footer>
                    <span>
                         Challenge by{" "}
                         <a href={projectAdress}> Frontend Mentor</a>.
                    </span>
                    <span>
                         Coded by <a href={author}>Michał Dziedzic</a>.
                    </span>
               </footer>
          </div>
     );
};

export default App;
