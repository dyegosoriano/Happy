import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import orphanageView from '../views/orphanages_view'
import Orphanage from '@models/Orphanage'

interface ValidationErrors {
  [key: string]: string[]
}
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
      const data = {
        open_on_weekends,
        opening_hours,
        instructions,
        longitude,
        latitude,
        images,
        about,
        name,
      }

      const schema = Yup.object().shape({
        open_on_weekends: Yup.boolean().required(),
        opening_hours: Yup.string().required(),
        instructions: Yup.string().required(),
        longitude: Yup.number().required(),
        latitude: Yup.number().required(),
        name: Yup.string().required(),
        about: Yup.string().required().max(300),
        images: Yup.array(
          Yup.object().shape({
            path: Yup.string().required(),
          }),
        ),
      })

      await schema.validate(data, { abortEarly: false })

      const repoOrphanage = getRepository(Orphanage)
      const orphanage = repoOrphanage.create(data)
      const orphanageCreated = await repoOrphanage.save(orphanage)

      return res.status(200).json(orphanageCreated)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors: ValidationErrors = {}

        error.inner.forEach(err => {
          errors[err.path] = err.errors
          console.log(err.errors)
        })

        return res.status(400).json({ message: `Validation fails`, errors })
      }

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

      return res.json(orphanageView.renderMany(orphanages))
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

      return res.json(orphanageView.render(orphanage))
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return res
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }
}

export default new OrphanageController()
