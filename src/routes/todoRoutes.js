import express from "express";
import db from "../db.js";

const router = express.Router();

// GET ALL
router.get("/", (req, res) => {
  const getTodos = db.prepare(`SELECT * FROM todos WHERE user_id = ?`);
  const todos = getTodos.all(req.userId);
  res.json(todos);
});

// CREATE NEW
router.post("/", (req, res) => {});

// UPDATE
router.put("/:id", (req, res) => {});

// DELETE
router.delete("/:id", (req, res) => {});

export default router;
