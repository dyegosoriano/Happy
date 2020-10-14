import styled from 'styled-components'

import landing from '../../images/landing.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  .content-wrapper {
    position: relative;

    width: 100%;
    height: 100%;
    max-width: 1100px;
    max-height: 680px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    background: url(${landing}) no-repeat 80% center;

    main {
      h1,
      p {
        max-width: 350px;
      }

      h1 {
        font-size: 76px;
        font-weight: 900;
        line-height: 70px;
      }

      p {
        line-height: 34px;
        margin-top: 40px;
        font-size: 24px;
      }
    }

    .location {
      position: absolute;
      right: 0;
      top: 0;

      font-size: 24px;
      line-height: 34px;
      text-align: right;

      display: flex;
      flex-direction: column;

      strong {
        font-weight: 800;
      }
    }

    a {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 80px;
      height: 80px;
      background: #ffd666;
      border-radius: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.2s;

      :hover {
        background: #96feff;
      }
    }
  }
`
