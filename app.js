// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();


const bookmarksController = require("./controllers/bookmarksController.js");

app.use("/bookmarks", bookmarksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});


// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;

/*
module.exports:
exports the files, functions and logic from one file to another. Without it, you cannot import the data into another file.

Thought question: What does module.exports do? What happens if we forget to add it? What kind of error will we get?

export files and it's function contents onto other files. We get an error. Empty object {}

What are controllers?
The controllers "control" how the view (clients app) interacts and models (data) interact.

Controllers are parts of a web application that manage the flow of data and handle user interactions. They take care of the logic that determines what happens when a use makes a request to the server. 

In the context of an express.js app, controllers are typically defined as modules that handle the specific set of routes and functionality. 

MVC is module view controller
How should you organize controllers if you are following an MVC pattern?
naming convention


For bookmarks - bookmarksController.js         Models - bookmark.js
For cats - catsController.js                   Models - cat.js
For weirdSharks - weirdSharksController.js      Models - weirdShark.js
For rocks - rocksController.js                  Models - rocks.js



Ray's Notes:
## Q. Thought question: What does module.exports do?

### A1. Allows for the export of the files, function and logic from one file to another.  Without it, you import the data into another file.

## Q. What happens if we forget to add it? What kind of error will we get?

### A1. Empty object


## Q. What are controllers?

### A1. The controllers "control" how the views (client app) and models (data) interact. Manages the flow of data and control user interaction.

### A2. Controllers handle the logic for the application and are the go-between from the client to the database. Takes care of the logic and determines what happens when a user makes a request a server.

### A3. In the context of an express.js app. controllers are typically defined as modules that handles the specific routes and functionality.


## Q. How should you organize controllers if you are following an MVC pattern?

### A1. Folder to be same directory as package.json

### A2 .Naming convention

- For bookmarks - bookmarksController.js      
- models/bookmark.js
- For cats - catsController.js                
- models/cat.js
- For weirdSharks - weirdSharksController.js  
- models/weirdShark.js
- For rocks - rocksController.js              
- models/rock.js


// in URL, its' plural
## Q. What is the purpose of a 404 route?
### A1. To let the user know they requested data that does not exist or page view route does not exist

## Q. Why is it important to set the correct status code?
### A1. There are many different status code for different error, you want to inform the user what the error is.

## Q. What datatype is the status code?
### A1. Number?

## Q. What is the default status code of your responses when you don't add a status code?

### A1. 200


*/