import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import meta from "../package.json" with { type: "json" };

const app: Express = express();

app.use(cors());

app.get("/health", (_req: Request, res: Response) => {
  res.send({
    status: "ok",
    service: "backend",
  });
});

app.get("/ready", (_req: Request, res: Response) => {
  res.send({
    status: "pong",
    service: "backend",
  });
});

app.get("/meta/version", (_req: Request, res: Response) => {
  res.send({
    version: meta.version,
    service: "backend",
  });
});

app.listen(3000);
