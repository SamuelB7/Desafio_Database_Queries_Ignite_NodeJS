import { Router } from 'express'
import { FindAllUsersOrderedByFirstNameController } from '../modules/users/useCases/findAllUsersOrderedByFirstName/FindAllUsersOrderedByFirstNameController'
import { FindUserWithGamesByIdController } from '../modules/users/useCases/findUserWithGamesById/findUserWithGamesByIdController'

const usersRoutes = Router()

const findUserWithGamesByIdController = new FindUserWithGamesByIdController()
const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController()


usersRoutes.get('/userWGame/:id', findUserWithGamesByIdController.handle)
usersRoutes.get('/', findAllUsersOrderedByFirstNameController.handle)

export { usersRoutes }
