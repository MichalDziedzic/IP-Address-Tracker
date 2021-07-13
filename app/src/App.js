import React from "react";
import './App.css';

//import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
 import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet'

import HeaderTitle from'./components/Header';
import InputTracker from'./components/InputTracker';
import ResultTracker from'./components/ResultTracker';
// import Map from './components/Map';

 const App=()=> {
  const projectAdress = `https://www.frontendmentor.io?ref=challenge`;
   const author= `Michał Dziedzic`;
  const position = [51.505, -0.09]
   return(
  <div>
   <header>
    <HeaderTitle/>
    <InputTracker/>
    <ResultTracker/>
  </header>
  <section> 
      {/* <Map></Map> */}
     {/* <p>place for a display address location on map view</p>  */}
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
   <TileLayer
   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
     <Popup>
       A pretty CSS3 popup. <br /> Easily customizable.
   </Popup>
   </Marker>
 </MapContainer>
  </section> 
  <footer>
    Challenge by <a href={projectAdress} >Frontend Mentor</a>. 
    Coded by <a href={author}>{author}</a>.
  </footer> 
    
  </div> 
  );
}

export default App;
