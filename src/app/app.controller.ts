import * as express from "express"
import AppService from './app.service';
import Controller from '../base/Controller';


class AppController extends Controller {
    public readonly path = "/health-check";
    public router = express.Router()
    public readonly appService = new AppService();

    constructor() {
        super()
        this.initializeRoutes()
    }

    public initializeRoutes() {
        this.router.get(`${this.path}`, this.checkHealth)
    }


    checkHealth(request: express.Request, response: express.Response) {
        return response.send(this.appService.checkHealth())
    }


}

export default AppController