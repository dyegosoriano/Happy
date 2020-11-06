import imagesView, { ImageView } from './images_view'
import Orphanage from '@models/Orphanage'

interface Render {
  id: string
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: ImageView[]
}

export default {
  render(orphanage: Orphanage): Render {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    }
  },

  renderMany(orphanages: Orphanage[]): Render[] {
    return orphanages.map(orphanage => this.render(orphanage))
  },
}
