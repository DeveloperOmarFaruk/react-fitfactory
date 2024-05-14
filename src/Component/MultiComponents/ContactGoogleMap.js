import React from "react";
import "./MultiComponents.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 23.8631857,
  lng: 90.3920653,
};

const ContactGoogleMap = () => {
  return (
    <>
      <div className="google-map-div">
        <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default ContactGoogleMap;
