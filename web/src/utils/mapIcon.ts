import Leaflet from 'leaflet'

import mapMarkerImg from '../images/map-marker.svg'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  popupAnchor: [170, 2],
  iconAnchor: [29, 68],
  iconSize: [58, 68]
})

export default mapIcon
