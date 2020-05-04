import * as express from 'express';
import * as bodyParse from 'body-parser';
import * as Helmet from "helmet";
import * as cors from 'cors';

import { UserRouter } from './routers/user.router'

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routesApp();
    }

    private middleware(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(bodyParse.urlencoded({ extended: false }));
        this.app.use(Helmet());
    }

    private routesApp(): void {
        new UserRouter().router(this.app);
    }
}

export default new App().app;