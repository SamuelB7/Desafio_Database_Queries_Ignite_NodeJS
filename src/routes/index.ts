import { Router } from 'express'

import { usersRoutes } from './users.routes'

const router = Router()

router.use('/users', usersRoutes)
router.get('/', (request, response) => {
  return response.json({message: "Hello World"})
})

export { router }