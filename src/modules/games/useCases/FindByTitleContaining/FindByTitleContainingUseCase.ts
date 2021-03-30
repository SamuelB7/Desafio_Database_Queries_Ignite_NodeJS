import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";


@injectable()
class FindByTitleContainingUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(param: string): Promise<Game[]> {
    const games = await this.gamesRepository.findByTitleContaining(param)

    return games
  }
}

export { FindByTitleContainingUseCase }