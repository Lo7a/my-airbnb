/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Map, { Marker } from "react-map-gl";

function Nmap() {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      mapStyle="mapbox://styles/lahav/cl9wgo29j00gx14o24zpf472o"
      mapboxAccessToken={process.env.mapbox_key}
    >
      <Marker longitude={-100} latitude={40} anchor="bottom">
        <img src="./pin1.png" />
      </Marker>
    </Map>
  );
}
