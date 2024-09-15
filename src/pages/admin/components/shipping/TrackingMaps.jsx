import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const kenya = { lat: -1.286389, lng: 36.817223 };
const tanzania = { lat: -6.369028, lng: 34.888822 };

const MyMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(googleMap) {
    // Example: Fit the map bounds to a predefined area
    const bounds = new window.google.maps.LatLngBounds(center);
    googleMap.fitBounds(bounds);
  
    // Set the Polyline path after the map is loaded
    const polyline = new window.google.maps.Polyline({
      path: [kenya, tanzania],
      strokeColor: "#FF0000",
      strokeOpacity: 1,
      strokeWeight: 2,
    });
  
    // Set the map on which to draw the Polyline
    polyline.setMap(googleMap);
  
    // Save the map instance to state
    setMap(googleMap);
  }, []);

  const onUnmount = useCallback(function callback() {
    // Clear the map instance from state
    setMap(null);
  }, []);
  

  // Render the Google Map component
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount} 
    >
      {map && (
        <Polyline
          path={[kenya, tanzania]}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
  
}

export default MyMapComponent;
