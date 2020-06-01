var note = require("../db/db");
var fs = require("fs");


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        console.log("Got notes!");
        return res.json(note);
        
    });

    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        // Unique ID for new note
        if (note === "") {
            newNote.id = 0;

        } else {
            newNote.id = note.length;
        }
        note.push(newNote);
        var noteString = JSON.stringify(note);
        fs.writeFile("db/db.json", noteString, function (err) {
          if (err) throw err;
          console.log("Note Sent!");
          res.send();
            
        });
    });
    // req.params.id
    app.delete("/api/notes/:id", function(req, res){
        var deleteNote = req.params.id;
        // delete from array
        // note.(method to delete from array)
        // writeFile/stringify
        console.log(deleteNote);
    })

    // rearrange the notes, slack
};

// npm uuid, version 1 or version 4, require uuid, import, call that function thatll create a string, as a dependency