import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_API_KEY } from "../App";

import "./MapPage.css";

const MapPage = () => {
  const position = {
    lat: -30.039101,
    lng: -51.203219,
  };

  return (
    <div className="map">
      <LoadScript
        googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]} >

        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={position}
          zoom={15} >
          <Marker
            position={position}
            options={{
              label: {
                text: "Posição teste",
                className: "map-marker",
              },
            }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
