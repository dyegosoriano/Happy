import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Orphanages from '@models/Orphanages'

class OrphanageController {
  async store(req: Request, res: Response) {
    const {
      open_on_weekends,
      instructions,
      longitude,
      latitude,
      about,
      name,
    } = req.body

    try {
      const repoOrphanage = getRepository(Orphanages)

      const orphanage = repoOrphanage.create({
        open_on_weekends,
        instructions,
        longitude,
        latitude,
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
      const repoOrphanage = getRepository(Orphanages)

      const orphanages = await repoOrphanage.find()

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
      const repoOrphanage = getRepository(Orphanages)

      const orphanage = await repoOrphanage.findOneOrFail(id)

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
