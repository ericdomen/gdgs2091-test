import { Request, Response } from "express";
import validator from 'validator';
import criptjs from 'crypto-js';
import keySecret from "../config/keySecret";
import dao from "../dao/generalDAO";

class GeneralController {

    /**
     * @description Lista los roles disponibles
     * @param req 
     * @param res 
     * @returns Promise<Response<any, Record<string, any>> | undefined>
     */
    public async listarRoles(req: Request, res: Response) {
        try {

            const result = await dao.listarRoles();

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
    }

}
export const generalController = new GeneralController();