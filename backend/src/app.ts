import express, { type Express, type Request, type Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send({
    status: "ok",
    service: "backend",
  });
});

app.get("/ready", (req: Request, res: Response) => {
  res.send({
    status: "pong",
    service: "backend",
  });
});

app.listen(3000);
