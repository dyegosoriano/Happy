import React, { useState } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'
import { FiPlus } from 'react-icons/fi'

import Sidebar from '../../components/Sidebar'
import mapIcon from '../../utils/mapIcon'

import { Container } from './styles'

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              style={{ width: '100%', height: 280 }}
              center={[-27.2092052, -49.6401092]}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  position={[position.latitude, position.longitude]}
                  interactive={false}
                  icon={mapIcon}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>

              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>

                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </Container>
  )
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`

export default CreateOrphanage
