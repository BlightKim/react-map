import sensors from "./sensors.json";
import { TileLayer, MapContainer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

const center = { lat: 35.8562, lng: 129.2246 }; // 경주시의 위도와 경도

export default function Map() {
  function onEachFeature(feature: any, layer: L.Layer) {
    if (feature.properties) {
      const { popupContent } = feature.properties;
      layer.bindPopup(popupContent);
    }
  }

  return (
    <MapContainer
      style={{ height: "80vh", width: "100vw" }}
      center={center}
      zoom={14} // 지도 확대 수준을 조정할 수 있습니다.
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[129.2270222, 35.85316944]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <GeoJSON data={sensors} onEachFeature={onEachFeature} />
    </MapContainer>
  );
}
