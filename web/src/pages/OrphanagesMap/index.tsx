import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../../images/map-marker.svg'

import { Container } from './styles'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  popupAnchor: [170, 2],
  iconAnchor: [29, 68],
  iconSize: [58, 68]
})

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha umm orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Salvado</strong>
          <span>Bahia</span>
        </footer>
      </aside>

      <Map
        center={[-12.996906, -38.5107194]}
        zoom={16}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker position={[-12.99691, -38.51071]} icon={mapIcon}>
          <Popup
            className="map-popup"
            closeButton={false}
            minWidth={240}
            maxWidth={240}
          >
            Lar das meninas
            <a href="">
              <FiArrowRight size={20} color="fff" />
            </a>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
