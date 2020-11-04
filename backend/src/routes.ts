import OrphanageController from '@controllers/OrphanageController'
import { Router } from 'express'

const routes = Router()

routes.post('/orphanages', OrphanageController.store)
routes.get('/orphanages', OrphanageController.index)
routes.get('/orphanages/:id', OrphanageController.show)

export default routes
