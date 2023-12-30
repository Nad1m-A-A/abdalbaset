'use client'
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibmFkMW0iLCJhIjoiY2xwNmIwY3RtMGVjMDJqbDY2cXZ2YTg0aCJ9.LKep9UO8ac3gaqS5ponDXg';

export default function MyMap({mapStyle}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(55.3277808);
  const [lat, setLat] = useState(25.2635473);
  const [zoom, setZoom] = useState(11.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="h-0 opacity-0">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container rounded-sm overflow-hidden h-96 cursor-grab"/>
    </div>
  );
}
