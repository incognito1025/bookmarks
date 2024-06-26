const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");


//Index Route
bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

//Key = params is a key
// SHOW
bookmarks.get("/:arrayIndex", (req, res) => {
  if (bookmarksArray[req.params.arrayIndex]) { 
    res.json(bookmarksArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// controllers/bookmarksController.js
// CREATE
bookmarks.post("/", (req, res) => {
  bookmarksArray.push(req.body);
  res.json(bookmarksArray[bookmarksArray.length - 1]);
});



module.exports = bookmarks;