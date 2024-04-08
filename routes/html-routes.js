// Import required modules
const router = require("express").Router();
const path = require("path");

// GET route for the home page
router.get("/", (req, res) => {
    // Send the index.html file as response
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET route for the notes page
router.get("/notes", (req, res) => {
    // Send the notes.html file as response
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Export the router to be used by the application
module.exports = router;

