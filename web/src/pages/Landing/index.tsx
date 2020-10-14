import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

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

        <a href="">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </Container>
  )
}

export default Landing
