import { Router } from 'express'

import { usersRoutes } from './users.routes'
import { gamesRoutes } from './games.routes'

const router = Router()

router.use('/users', usersRoutes)
router.use('/games', gamesRoutes)
router.get('/', (request, response) => {
  return response.json({message: "Hello World"})
})

export { router }