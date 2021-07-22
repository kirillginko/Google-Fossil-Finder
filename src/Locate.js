import React from "react";
import "./Locate.css";

function Locate({ panTo }) {
  return (
    <div className="locate">
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <img src="/compass.png" alt="compass" />
      </button>
    </div>
  );
}

export default Locate;
