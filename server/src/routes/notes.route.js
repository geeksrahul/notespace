import express from "express";

import {
  addNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/add", addNote);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);

export default router;
