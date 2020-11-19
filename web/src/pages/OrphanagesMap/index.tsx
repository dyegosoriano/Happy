import React, { useEffect, useState } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import mapMarkerImg from '../../images/map-marker.svg'
import mapIcon from '../../utils/mapIcon'

import { Container } from './styles'

interface Orphanage {
  longitude: number
  latitude: number
  name: string
  id: string
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  async function getOrphanages() {
    try {
      const response = await api.get('orphanages')

      setOrphanages(response.data)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  useEffect(() => {
    getOrphanages()
  }, [])

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

        {orphanages.map(orphanage => {
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
              icon={mapIcon}
            >
              <Popup
                className="map-popup"
                closeButton={false}
                minWidth={240}
                maxWidth={240}
              >
                {orphanage.name}
                <a href={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="fff" />
                </a>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
