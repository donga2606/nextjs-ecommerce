import Services from "../controller/user";
import express from "express";
import authenticateToken from "../common/authenticateToken";
const router = express.Router();

// Can receive req.query or req.params
router.get("/", Services.get);
router.delete("/:id", Services.delete);

// Can receive req.body req.query or req.params
router.post("/", Services.post);
router.put("/:id", Services.put);

// Get specific product by ID
router.get("/:id", Services.getById);
router.get("/cart/:id", Services.getById);

export default router;
