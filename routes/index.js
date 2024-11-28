import express from "express";
import indexController from "../controllers/index.js";

const router = express.Router();

router.get("/", indexController.getIndex);

router.get("/add-message", indexController.getAddMessage);

router.post("/add-message", indexController.postAddMessage);

router.get("/message/:id", indexController.getMessageDetails);

export default router;
