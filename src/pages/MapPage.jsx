import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import "./MapPage.css";

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDo_RGclqrLYasc0emSCPVquPmrLcUr4gk"
  });

  return (    
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%'
          }}
          center={{
            lat: -30.039101, 
            lng: -51.203219
          }}
          zoom={15} >
        </GoogleMap>
      ) : ( 
        <></>
      )}
    </div>
  )};

export default MapPage;
