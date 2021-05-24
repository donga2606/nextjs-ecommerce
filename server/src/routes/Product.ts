import Services from "../controller/product";
import express from "express";
const router = express.Router();

// Can receive req.query or req.params
router.get("/", Services.get);
router.delete("/:id", Services.delete);

// Can receive req.body req.query or req.params
router.post("/", Services.post);
router.put("/:id", Services.put);

// Get specific product by ID
router.get("/:id", Services.getById);

export default router;
