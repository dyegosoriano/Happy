import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { useHistory } from 'react-router-dom'
import { LeafletMouseEvent } from 'leaflet'
import { FiPlus } from 'react-icons/fi'

import api from '../../services/api'

import Sidebar from '../../components/Sidebar'
import mapIcon from '../../utils/mapIcon'

import { Container } from './styles'

const CreateOrphanage: React.FC = () => {
  const history = useHistory()

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [opening_hours, setOpeningHours] = useState('')
  const [instructions, setInstructions] = useState('')
  const [images, setImages] = useState<File[]>([])
  const [about, setAbout] = useState('')
  const [name, setName] = useState('')

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    event.stopPropagation()

    const { latitude, longitude } = position

    const data = new FormData()

    data.append('open_on_weekends', String(open_on_weekends))
    data.append('opening_hours', opening_hours)
    data.append('instructions', instructions)
    data.append('longitude', String(longitude))
    data.append('latitude', String(latitude))
    data.append('about', about)
    data.append('name', name)

    images.map(image => data.append('images', image))

    try {
      await api.post('orphanages', data)

      alert('Cadastro realizado com sucesso!')

      history.push('/app')
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
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
              <input
                onChange={event => setName(event.target.value)}
                value={name}
                id="name"
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>

              <textarea
                onChange={event => setAbout(event.target.value)}
                maxLength={300}
                value={about}
                id="name"
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => {
                  return <img key={image} src={image} alt={name} />
                })}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                onChange={handleSelectImages}
                id="image[]"
                type="file"
                multiple
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                onChange={event => setInstructions(event.target.value)}
                value={instructions}
                id="instructions"
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                onChange={event => setOpeningHours(event.target.value)}
                value={opening_hours}
                id="opening_hours"
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                  type="button"
                >
                  Sim
                </button>

                <button
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                  type="button"
                >
                  Não
                </button>
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
