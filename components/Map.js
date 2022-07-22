import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import MapStyles from './MapStyles';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 1.28692,
  lng: 103.85457,
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      mapContainerClassName='map-container'
      center={center}
      zoom={15}
      options={options}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
}

export default React.memo(MapComponent);
