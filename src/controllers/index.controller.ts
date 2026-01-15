import { Request, Response } from 'express';
class IndexController{
    public async index(req: Request, res: Response){
        res.status(404).json({
            status: false,
            message: 'API is in /api/v1/games'
        })
    }
}
export const indexController = new IndexController();