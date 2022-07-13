import { Router } from "express";
import { generalController } from "../controllers/generalController";
import { checkJwt } from "../middlewares/jwt";

class GeneralRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    private config() {
        // listado
        this.router.get('/roles', generalController.listarRoles);
    }
}
const generalRoutes = new GeneralRoutes();
export default generalRoutes.router;