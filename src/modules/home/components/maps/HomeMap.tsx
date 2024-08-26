import { MapContainer, Marker, Polygon, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
//import { statesData } from './data'

export const HomeMap = () => {

  const center  = {
    lat: -16.49566907988408,
    lng: -68.13395414034433
  }

  const zoom = 13
  //const url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  const url = "https://api.maptiler.com/maps/streets-v2-dark/256/{z}/{x}/{y}.png?key=iWkvsZBhRLHolBePP8yt"
  const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

  return (
    <div className="flex items-center justify-center rounded-xl">
      <MapContainer
        center={ center }
        zoom={ zoom }
        scrollWheelZoom={ false }
        style={{
          width: '400px',
          height: '50vh',
          borderRadius: '10px',
        }}
      >
        <TileLayer
          url={ url }
          attribution={ attribution }
        />
      </MapContainer>
    </div>
  )
}

