import {Request, Response} from 'express';
import pool from "../database";
class GameController {
    public async getGames(req: Request, res: Response) {
        try{
            const data = await pool.then((res: any) =>
            res.query('SELECT * FROM game'));
            res.status(200).json({
                status: true,
                data: data
            });
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message,
            })
        }
    }
    public async getOneGame(req: Request, res: Response) {
        try{
            const {id} = req.params;
            const data = await pool.then((res: any) =>
            res.query('SELECT * FROM game WHERE id = ?',[id]));
            if (data.length > 0) {
                return res.status(200).json({
                    status: true,
                    data: data[0]
                });
            }
            res.status(404).json({
                status: false,
                message: 'Game Not Found'
            })
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message,
            })
        }
    }
    public async postGame(req: Request, res: Response) {
        try{
            const data = await pool.then((res: any) =>
            res.query('INSERT INTO game SET ?',[req.body]));
                return res.status(201).json({
                    status: true,
                    message: 'Game Created Successfully'
                });
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message,
            })
        }
    }


    public async updateGame(req: Request, res: Response) {
        try{
            const {id} = req.params;
            const data = await pool.then((res: any) =>
                res.query('UPDATE game SET ? WHERE id = ?',[req.body,id]));
            if (data.affectedRows > 0) {
                return res.status(200).json({
                    status: true,
                    message: 'Game Updated Successfully'
                });
            }
            res.status(404).json({
                status: false,
                message: 'Game Not Found'
            })
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message,
            })
        }
    }


    public async deleteGame(req: Request, res: Response) {
        try{
            const {id} = req.params;
            const data = await pool.then((res: any) =>
                res.query('DELETE FROM game WHERE id = ?',[id]));
            if (data.affectedRows > 0) {
                return res.status(200).json({
                    status: true,
                    message: 'Game Deleted Successfully'
                });
            }
            res.status(404).json({
                status: false,
                message: 'Game Not Found'
            })
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message,
            })
        }
    }
}
const gameController = new GameController();
export default gameController;
