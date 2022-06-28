import { Request, Response } from "express";
import pool from '../database/database';

class IndexController {

    public async listar(req: Request, res: Response) {
        try {

            const result = await pool.then(async (connection) => {
                return await connection.query("SHOW SCHEMAS");
            });

            console.log(result);

             return res.json({message : "respuesta desde otro metodo"});
        } catch (error: any) {
            return res.status(500).json({error: error.message});
        }
    }

    public create(req: Request, res: Response): void { }

    public update(req: Request, res: Response): void { }

    public delete(req: Request, res: Response): void { }

}
export const indexController = new IndexController();