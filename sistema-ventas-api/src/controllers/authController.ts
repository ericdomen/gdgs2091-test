import { Request, Response } from "express";
import validator from 'validator';

class AuthController {

    public iniciarSesion(req: Request, res: Response) {
        try {

            // obtener los datos del body
            const { username, password, ...rest } = req.body;

            // Se verifica la estructura de la petición
            if (Object.keys(rest).length > 0) {
                return res.status(400).json({ message : "La estructura no es correcta"});
            }

            // Verificar que los datos "username" y "password" existan
            if (!username || !password) {
                return res.status(400).json({ message : "Todos los campos son requeridos" });
            }

            // verificar que los datos no esten vacios
            if (validator.isEmpty(username.trim())
                || validator.isEmpty(password.trim())) {
                    return res.status(400).json({ message : "Todos los campos son requeridos" });
            }

            return res.json({username, password});
            
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
    }

}
export const authController = new AuthController();