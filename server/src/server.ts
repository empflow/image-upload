import "tsconfig-paths";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import app from "./app";
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
