import { Notes } from "../models/notes.model.js";

// ➕ Add Note
export const addNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const newNote = await Notes.create({ title, description });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Failed to add note.", error: error.message });
  }
};

// 📄 Get All Notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes.", error: error.message });
  }
};

// 📌 Get Note by ID
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Notes.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found." });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch note.", error: error.message });
  }
};

// ✏️ Update Note
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNote = await Notes.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found for update." });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Failed to update note.", error: error.message });
  }
};

// ❌ Delete Note
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Notes.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found for deletion." });
    }

    res.status(200).json({ message: "Note deleted successfully.", deletedNote });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete note.", error: error.message });
  }
};
