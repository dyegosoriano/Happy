import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;

    .orphanage-details {
      width: 700px;
      margin: 64px auto;

      background: #fff;
      border: 1px solid #d3e2e5;
      border-radius: 20px;

      overflow: hidden;

      > img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }

      .images {
        margin: 16px 40px 0;

        display: grid;
        grid-template-columns: repeat(6, 1fr);
        column-gap: 16px;

        button {
          height: 88px;
          background: none;
          border: 0;
          border-radius: 20px;
          overflow: hidden;
          outline: none;
          cursor: pointer;

          opacity: 0.6;

          .active {
            opacity: 1;
          }

          img {
            width: 100%;
            height: 88px;
            object-fit: cover;
          }
        }
      }

      .orphanage-details-content {
        padding: 80px;

        h1 {
          margin-bottom: 8px;
          line-height: 54px;
          font-size: 54px;
          color: #4d6f80;
        }

        h2 {
          line-height: 46px;
          font-size: 36px;
          color: #4d6f80;
        }

        hr {
          width: 100%;
          height: 1px;
          border: 0;
          background: #d3e2e6;
          margin: 64px 0;
        }

        p {
          margin-top: 24px;
          line-height: 28px;
          color: #5c8599;
        }

        .map-container {
          margin-top: 64px;
          background: #e6f7fb;
          border: 1px solid #b3dae2;
          border-radius: 20px;

          .leaflet-container {
            border-bottom: 1px solid #dde3f0;
            border-radius: 20px;
          }

          footer {
            padding: 20px 0;
            text-align: center;

            a {
              text-decoration: none;
              line-height: 24px;
              color: #0089a5;
            }
          }
        }

        .open-details {
          margin-top: 24px;

          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 20px;

          div {
            padding: 32px 24px;
            border-radius: 20px;
            line-height: 28px;

            svg {
              display: block;
              margin-bottom: 20px;
            }
          }

          div.hour {
            background: linear-gradient(149.97deg, #e6f7fb 8.13%, #fff 92.67%);
            border: 1px solid #b3dae2;
            color: #5c8599;
          }

          div.open-on-weekends {
            background: linear-gradient(154.16deg, #edfff6 7.85%, #fff 91.03%);
            border: 1px solid #a1e9c5;
            color: #37c77f;
          }

          div.dont-open {
            background: linear-gradient(154.16deg, #fdf 7.85%, #fff 91.03%);
            border: 1px solid #ffbcd4;
            color: #ff669d;
          }
        }

        button.contact-button {
          margin-top: 64px;
          width: 100%;
          height: 64px;
          border-radius: 20px;
          border: 0;
          background: #3cdc8c;
          color: #fff;
          font-weight: 800;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
          transition: background-color 0.2s;

          svg {
            margin-right: 16px;
          }

          :hover {
            background: #36cf82;
          }
        }
      }
    }
  }
`
