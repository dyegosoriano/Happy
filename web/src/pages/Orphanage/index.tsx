import React, { useEffect, useState } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { FiClock, FiInfo } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

import Sidebar from '../../components/Sidebar'
import mapIcon from '../../utils/mapIcon'

import api from '../../services/api'

import { Container } from './styles'

interface Orphanage {
  open_on_weekends: boolean
  opening_hours: string
  instructions: string
  longitude: number
  latitude: number
  about: string
  name: string
  images: Array<{
    id: string
    url: string
  }>
}

interface OrphanageParams {
  id: string
}

const Orphanage: React.FC = () => {
  const params = useParams() as OrphanageParams
  const [orphanage, setOrphanage] = useState<Orphanage>()

  useEffect(() => {
    async function getOrphanage() {
      try {
        const response = await api.get(`orphanages/${params.id}`)

        setOrphanage(response.data)
      } catch (error) {
        console.log(`error.message >>> ${error.message} <<<`)
      }
    }

    getOrphanage()
  }, [params.id])

  if (!orphanage) return <span>Carregando...</span>

  return (
    <Container>
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[0].url} alt={orphanage.name} />

          <div className="images">
            {orphanage.images.map(image => (
              <button key={image.id} className="active" type="button">
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                style={{ width: '100%', height: 280 }}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                zoomControl={false}
                touchZoom={false}
                dragging={false}
                zoom={16}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  position={[orphanage.latitude, orphanage.longitude]}
                  interactive={false}
                  icon={mapIcon}
                />
              </Map>

              <footer>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  rel="noopener noreferrer"
                  target="blank"
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>

              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </Container>
  )
}

export default Orphanage
