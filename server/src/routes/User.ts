import AuthServices from "../controller/user";
import express from "express";

const router = express.Router();

router.get("/", AuthServices.get);

router.delete("/:id", AuthServices.delete);

router.post("/", AuthServices.post);

router.put("/:id", AuthServices.put);

router.get("/:id", AuthServices.getById);

router.get("/cart/:id", AuthServices.getById);

export default router;
