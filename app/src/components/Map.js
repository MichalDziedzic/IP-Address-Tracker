import React from 'react';
import mapPin from '../images/mapPin.png';
import { MapContainer, TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet';
import L from "leaflet";

 const Map=({lat,lng})=> {

    const position=[lat,lng]

    const mapIcon = L.icon({
      iconUrl: `${mapPin}`,
      iconSize: [25, 41],
      popupAnchor: [0, -15],
    });
  
    const LocationMarker = () => {
      const map = useMapEvents({
        click() {
          map.locate();
        },
        locationfound() {
            
          map.flyTo(position, map.getZoom());
        },
      });
  
      return position === null ? null : (
        <Marker position={position} icon={mapIcon}>
          <Popup>This address is associated with this locate</Popup>
        </Marker>
      );
    };
    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
   <LocationMarker/>
 </MapContainer>
        </div>
    )
}

export default Map;