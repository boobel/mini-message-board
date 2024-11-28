import express from "express";
import path from "node:path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";
import errorController from "./controllers/error.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);

app.use(errorController);

app.listen("3000", () => {
  console.log(`My first Express app - listening on port`);
});
