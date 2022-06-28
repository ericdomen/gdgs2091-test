import { Request, Response } from "express";

class UsuarioController {

    public listar(req: Request, res: Response) {
        res.json({ message : "Listar"});
    }

    public insertar(req: Request, res: Response) {
        res.json({ message : "Insertar"});
    }

    public actualizar(req: Request, res: Response) {
        res.json({ message : "Actualizar"});
    }

    public eliminar(req: Request, res: Response) {
        res.json({ message : "Eliminar"});
    }

}
export const usuarioController = new UsuarioController();