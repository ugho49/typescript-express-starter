import express, { Application, Request, Response } from "express";
import routes from "routes";

export default function createServer(): Application {
    const app: Application = express();

    app.get("/", (req: Request, res: Response) => {
        res.send("Hello world!");
    });

    app.use(routes);

    return app;
}
