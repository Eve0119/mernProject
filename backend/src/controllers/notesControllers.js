export const getAllNotes = (req, res) => {
    res.status(200).json({ message: "You got the notes" });
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