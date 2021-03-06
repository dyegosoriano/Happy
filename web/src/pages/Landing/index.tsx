import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import LogoImg from '../../images/logo.svg'

import { Container } from './styles'

const Landing: React.FC = () => {
  return (
    <Container>
      <div className="content-wrapper">
        <img src={LogoImg} alt="Happy" />

        <main>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Salvador</strong>
          <span>Bahia</span>
        </div>

        <Link to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </Container>
  )
}

export default Landing
