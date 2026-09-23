import express, {} from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/health", (req, res) => {
    res.send({
        status: "ok",
        service: "backend",
    });
});
app.get("/ready", (req, res) => {
    res.send({
        status: "pong",
        service: "backend",
    });
});
app.listen(3000);
//# sourceMappingURL=app.js.map