import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Orphanage from '@models/Orphanage'

class OrphanageController {
  async store(req: Request, res: Response) {
    const {
      open_on_weekends,
      opening_hours,
      instructions,
      longitude,
      latitude,
      about,
      name,
    } = req.body

    const requestImages = req.files as Express.Multer.File[]
    const images = requestImages.map(img => ({ path: img.filename }))

    try {
      const repoOrphanage = getRepository(Orphanage)

      const orphanage = repoOrphanage.create({
        open_on_weekends,
        opening_hours,
        instructions,
        longitude,
        latitude,
        images,
        about,
        name,
      })

      const orphanageCreated = await repoOrphanage.save(orphanage)

      return res.status(200).json(orphanageCreated)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return res
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }

  async index(req: Request, res: Response) {
    try {
      const repoOrphanage = getRepository(Orphanage)

      const orphanages = await repoOrphanage.find({ relations: ['images'] })

      return res.json(orphanages)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return res
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    try {
      const repoOrphanage = getRepository(Orphanage)

      const orphanage = await repoOrphanage.findOneOrFail(id, {
        relations: ['images'],
      })

      return res.json(orphanage)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return res
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }
}

export default new OrphanageController()
