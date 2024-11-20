import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../common/header';

function HomeScreen() {
  const mapRef = useRef<L.Map | null>(null); // Ref to store the Leaflet map instance

  useEffect(() => {
    // Initialize the map if it's not already initialized
    if (!mapRef.current) {
      mapRef.current = L.map('osmMap').setView([23.614328, 58.545284], 5);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    // Cleanup the map instance on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // Removes the map instance
        mapRef.current = null; // Reset the ref
      }
    };
  }, []);

  return (
    <div className="w-3/4 h-full">
      <Header />
      <div id="osmMap" className="h-[1024px] w-full"></div>
    </div>
  );
}

export default HomeScreen;
