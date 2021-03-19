import express, {Application, NextFunction, Request, Response} from "express";
import routes from "routes";

export default function createServer(): Application {
  const app: Application = express();

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello world!");
  });

  app.use(routes);

  return app;
}
