import React, { useState } from "react";
import {
  GoogleMap,
  MarkerF,
  LoadScript,
  StandaloneSearchBox } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_API_KEY } from "../App";

import "./MapPage.css";

const MapPage = () => {
  const [map, setMap] = useState();
  const [searchBox, setSearchBox] = useState();
  const [markers, setMarkers] = useState([]);

  const position = {
    lat: -30.039101,
    lng: -51.203219,
  };

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onLoad = (ref) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    
    setMarkers([...markers, location]);
    map?.panTo(location);
  };

  return (
    <div className="map">
      <LoadScript
        googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]} >

        <GoogleMap
          onLoad={ onMapLoad }
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={position}
          zoom={15} >

          <StandaloneSearchBox
            onLoad={ onLoad }
            onPlacesChanged={ onPlacesChanged } >
            <input
              className="addressField"
              placeholder="Digite o endereço" />
          </StandaloneSearchBox>

          <MarkerF position={position} />

        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
