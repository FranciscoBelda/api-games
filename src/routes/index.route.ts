import {Router} from "express";
import {indexController} from "../controllers/index.controller";

class IndexRoute{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config() {
        this.router.get('/', indexController.index);
    }
}
const indexRoute = new IndexRoute();
export default indexRoute.router;