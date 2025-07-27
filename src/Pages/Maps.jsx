import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// GeoJSON/topoJSON for India. You can find India states topoJSONs online.
// Example: https://github.com/deldersveld/topojson/blob/master/countries/india/india-states.json
const maharashtraGeoUrl =
  "https://raw.githubusercontent.com/shuklaneerajdev/IndiaStateTopojsonFiles/master/Maharashtra.topojson";

// Sample schools with { name, coordinates: [longitude, latitude] }
const schools = [
  { name: "Karigar, Pune", coordinates: [73.8567, 18.5204] },
  { name: "Raigad", coordinates: [73.2717, 18.5237] },
  { name: "Palghar", coordinates: [72.8330, 19.6967] },
  { name: "Nagpur", coordinates: [79.0882, 21.1458] },
];

function MaharashtraSchoolsMap() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 3000,
        center: [75.7139, 19.7515], // Centered on Maharashtra
      }}
      width={500}
      height={550}
    >
    <Geographies geography={maharashtraGeoUrl}>
  {({ geographies }) =>
    geographies.map((geo) => (
      <Geography
        key={geo.rsmKey}
        geography={geo}
        style={{
          default: { fill: "#E1EDDE", stroke: "#191970", strokeWidth: 1 },
          hover: { fill: "#C2E8FF" },
          pressed: { fill: "#B1D2C4" },
        }}
      />
    ))
  }
</Geographies>
      {/* Plot school markers */}
      {schools.map((school, idx) => (
        <Marker key={idx} coordinates={school.coordinates}>
          <circle r={8} fill="#008ed6" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={-15}
            style={{ fontFamily: "Poppins", fill: "#333", fontWeight: "bold", fontSize: 14 }}
          >
            {school.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}

export default MaharashtraSchoolsMap;
