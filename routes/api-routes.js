// This file contains the routes for the API.
const router = require("express").Router();
const uuidv1 = require("uuid/v1");
const fs = require("fs");

// Route to fetch notes from the database
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(dbJson);
});

// Route to add new notes to the database
router.post('/api/notes', async (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv1(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

// Route to delete notes from the database
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("db/db.json","utf8");
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
    res.json("Note deleted.");
});

module.exports = router;
