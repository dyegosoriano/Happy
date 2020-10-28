import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import mapMarkerImg from '../../images/map-marker.svg'

import { Container } from './styles'

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

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
