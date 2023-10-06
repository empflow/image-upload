import express from "express";
import errHandler from "./middleware/errHandler/errHandler";
import notFound from "./middleware/notFound";
import uploadRouter from "./routes/upload";
import cors from "cors";
const app = express();

app.use(cors({ origin: "*" }));
app.use("/upload", uploadRouter);
app.use(notFound);
app.use(errHandler);

export default app;
