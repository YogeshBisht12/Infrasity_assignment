// routes/note.routes.js
import { Router } from "express";
import Note from "../models/Note.js";
import protect from "../middleware/auth.js";

const router = Router();

// Apply auth middleware to all routes
router.use(protect);

/**
 * @route   POST /api/notes
 * @desc    Create a new note
 * @access  Private
 */
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const note = await Note.create({
      user: req.user._id,
      title,
      content,
    });

    res.status(201).json(note);
  } catch (error) {
    console.error("Create note error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   GET /api/notes
 * @desc    Get all notes for logged-in user
 * @access  Private
 */
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }).sort("-createdAt");
    res.json(notes);
  } catch (error) {
    console.error("Get notes error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   GET /api/notes/:id
 * @desc    Get single note by id (only if owner)
 * @access  Private
 */
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    console.error("Get note error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   PUT /api/notes/:id
 * @desc    Update note
 * @access  Private
 */
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title, content },
      { new: true, runValidators: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found or not yours" });
    }

    res.json(note);
  } catch (error) {
    console.error("Update note error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   DELETE /api/notes/:id
 * @desc    Delete note
 * @access  Private
 */
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found or not yours" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Delete note error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
