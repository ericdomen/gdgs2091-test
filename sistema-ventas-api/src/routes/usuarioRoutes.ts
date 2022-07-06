import { Router } from "express";
import { usuarioController } from "../controllers/usuarioController";
import { checkJwt } from "../middlewares/jwt";

class UsuarioRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    private config() {
        // listado
        this.router.get('/', usuarioController.listar);
        // insercion
        this.router.post('/', usuarioController.insertar);
        // actualizar
        this.router.put('/', [checkJwt], usuarioController.actualizar);
        // eliminar
        this.router.delete('/', [checkJwt], usuarioController.eliminar);
    }
}
const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;