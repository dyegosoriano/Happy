import Image from '@models/Image'

export interface ImageView {
  id: string
  url: string
}

export default {
  render(image: Image): ImageView {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    }
  },

  renderMany(images: Image[]): ImageView[] {
    return images.map(image => this.render(image))
  },
}
