import { Router } from 'express'
import { FindAllUsersOrderedByFirstNameController } from '../modules/users/useCases/findAllUsersOrderedByFirstName/FindAllUsersOrderedByFirstNameController'
import { FindUserByFullNameController } from '../modules/users/useCases/findUserByFullName/FindUserByFullNameController'
import { FindUserWithGamesByIdController } from '../modules/users/useCases/findUserWithGamesById/findUserWithGamesByIdController'

const usersRoutes = Router()

const findUserWithGamesByIdController = new FindUserWithGamesByIdController()
const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController()
const findUserByFullNameController = new FindUserByFullNameController()

usersRoutes.get('/userWGame/:id', findUserWithGamesByIdController.handle)
usersRoutes.get('/', findAllUsersOrderedByFirstNameController.handle)
usersRoutes.get('/userByFullName', findUserByFullNameController.handle)

export { usersRoutes }
