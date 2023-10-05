import express from "express";
import errHandler from "./middleware/errHandler/errHandler";
import notFound from "./middleware/notFound";
import fileUploadRouter from "./routes/imgUpload";
const app = express();

app.use(fileUploadRouter);
app.use(notFound);
app.use(errHandler);

export default app;
