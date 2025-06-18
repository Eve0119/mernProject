import Note from '../models/Note.js';

export async function getAllNotes (req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const createNote = (req, res) => {
    res.status(201).json({ message: "You created a note successfully" });
}

export const updateNote = (req, res) => {
    res.status(200).json({ message: "You updated a note successfully" });
}

export const deleteNote = (req, res) => {
    res.status(200).json({ message: "You deleted a note successfully" });
}