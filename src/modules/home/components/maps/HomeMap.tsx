import { MapContainer, Polygon, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import laPazGeoJson from './la-paz-geojson.json'

export const HomeMap = () => {

  const center  = {
    lat: -16.49566907988408,
    lng: -68.13395414034433
  }

  const zoom = 11
  //const url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  const url = "https://api.maptiler.com/maps/streets-v2-dark/256/{z}/{x}/{y}.png?key=iWkvsZBhRLHolBePP8yt"
  const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

  const coordinates = laPazGeoJson.features[0].geometry.coordinates;

  return (
    <div className="relative flex items-center justify-center rounded-xl z-0">
      <MapContainer
        center={ center }
        zoom={ zoom }
        scrollWheelZoom={ false }
        style={{
          width: '450px',
          height: '50vh',
          borderRadius: '10px',
        }}
      >
        <TileLayer
          url={ url }
          attribution={ attribution }
        />
        {
          coordinates.map( ( polygon, index ) => (
            <Polygon
              key={ index }
              pathOptions={{ color: '#fef3c7' }}
              positions={ polygon.map( ( point: any ) => [ point[1], point[0] ] ) }
            />
          ) )
        }
      </MapContainer>
    </div>
  )
}

