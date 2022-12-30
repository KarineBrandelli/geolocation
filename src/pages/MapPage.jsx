import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import "./MapPage.css";

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDo_RGclqrLYasc0emSCPVquPmrLcUr4gk"
  });

  const position = {
    lat: -30.039101, 
    lng: -51.203219
  }

  return (    
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%'
          }}
          center={position}
          zoom={15} >
          <Marker 
            position={position}
            options={{
              label: {
                text: 'Posição teste',
                className: 'map-marker'
              }
            }}
          />
        </GoogleMap>
      ) : ( 
        <></>
      )}
    </div>
  )};

export default MapPage;
