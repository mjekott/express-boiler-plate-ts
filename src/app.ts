import express from "express"
import errorMiddleware from './middleware/error.middleware';
import cors from "cors"
import cookieParser from "cookie-parser";
import helmet from "helmet"
import Controller from './base/Controller';

export default class App {
    public app: express.Application

    constructor(controllers: Controller[]) {
        this.app = express()
        this.connectToTheDatabase()
        this.initializeMiddlewares()
        this.initializeControllers(controllers);
        this.initializeErrorHandling()



    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

    public getHttpServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json({}));
        this.app.use(cors())
        this.app.use(cookieParser())
        this.app.use(helmet())
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private initializeControllers(controllers: Controller[]) {

        for (let controller of controllers) {
            this.app.use('/', controller.router.bind(controller))
        }


    }


    private connectToTheDatabase() {
        console.log("Databse connection method")
    }
}