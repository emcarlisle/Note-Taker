var note = require("../db/db");
var fs = require("fs");


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(note);
        console.log("Got notes!");
    });

    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        // Unique ID for new note
        if (!note === undefined || !note.length === 0) {
            newNote.id = note.length;

        } else {
            newNote.id = 0;
        }
    });
    var noteString = JSON.stringify(newNote);
    fs.writeFile("db/db.json", noteString, function(err) {
        if (err) throw err;
        console.log("Note Sent!");
    });

};
