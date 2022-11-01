import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResult }) {
  const [selctedLocation, setSelctedLocation] = useState({});
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
    cursor: "grab",
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/lahav/cl9wgo29j00gx14o24zpf472o"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          {selctedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelctedLocation({})}
              closeOnClick={true}
              longitude={result.long}
              latitude={result.lat}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

/*<Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelctedLocation(result)}
              className="h-auto w-auto cursor-pointer text-2xl animate-bounce "
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          */
