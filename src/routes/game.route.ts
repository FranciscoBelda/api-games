import {Router} from "express";
import gameController from "../controllers/game.controller";

class GameRoute{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config() {
        this.router.get('/', gameController.getGames);
        this.router.get('/:id', gameController.getOneGame);
        this.router.post('/', gameController.postGame);
        this.router.patch('/:id', gameController.updateGame);
        this.router.delete('/:id', gameController.deleteGame);
    }
}
const gameRoute = new GameRoute();
export default gameRoute.router;