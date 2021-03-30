import { Router } from "express";
import { CountAllGamesController } from "../modules/games/useCases/CountAllGames/CountAllGamesController";
import { FindByTitleContainingController } from "../modules/games/useCases/FindByTitleContaining/FindByTitleContainingController";
import { FindUsersByGameIdController } from "../modules/games/useCases/FindUsersByGameId/FindUsersByGameIdController";


const gamesRoutes = Router()

const findByTitleContainingController = new FindByTitleContainingController()
const countAllGamesController = new CountAllGamesController()
const findUsersByGameIdController = new FindUsersByGameIdController()

gamesRoutes.get('/findByTitle', findByTitleContainingController.handle)
gamesRoutes.get('/countGames', countAllGamesController.handle)
gamesRoutes.get('/findUsersByGameId/:id', findUsersByGameIdController.handle)

export { gamesRoutes }