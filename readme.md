Why does create have the same path as the index route?

The create route uses the same path as the index route because it uses a different HTTP verb (POST) to distinguish it from the GET request for the index route.
How do we make a POST request that will access this route?

You can make a POST request using tools like cURL, Postman, or an HTML form.
Why can't we use the browser URL to make this request, as we've done for the GET routes?

The browser URL can only make GET requests by default. POST requests require a form submission, JavaScript, or a tool like cURL or Postman.
Using cURL to make a POST request:

curl -H "Content-Type: application/json" -X POST -d '{"name":"AV Club", "url": "https://www.avclub.com"}' http://localhost:3003/bookmarks
Breaking down the cURL command:

-H stands for header.
"Content-Type: application/json" sets the content type to JSON.
-X specifies the HTTP method (POST in this case).
POST is the HTTP method used to send data to the server.
http://localhost:3003/bookmarks is the URL of the route.
Why is the value null and not the object you inputted?

The value is null because the incoming data needs to be parsed as JSON.
What is middleware?

Middleware is software that acts as a bridge between an operating system or database and applications, especially on a network.
Why does the incoming data need to be parsed?

Incoming data needs to be parsed to convert it into a format that can be easily used by the application.
Adding middleware to parse incoming JSON data:

js
Copy code
// app.js
// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
What is express.json()?

express.json() is middleware that parses incoming JSON requests and puts the parsed data in req.body.
What is app.use()?

app.use() is a function that mounts middleware at the specified path.
Why is the placement of the middleware important?

Middleware should be placed before the routes that need to access the parsed data.
Now we should be able to run our cURL commands and see our new data:

curl -H "Content-Type: application/json" -X POST -d '{"name":"AV Club", "url": "https://www.avclub.com"}' localhost:3003/bookmarks
curl http://localhost:3003/bookmarks
Custom Middleware
You can build your own middleware:

js
Copy code
// app.js
app.use((req, res, next) => {
  console.log("This code runs for every request");
  return next();
});
Check the Terminal to see this console.log - it should run every time you make a request.

Or you can add middleware to specific routes only:

js
Copy code
// controllers/bookmarksController.js
const validateURL = (req, res, next) => {
  console.log("This function checks the validity of the URL entered by the user.");
};
Add this function to create a new bookmark:

js
Copy code
// controllers/bookmarksController.js
// CREATE
bookmarks.post("/", validateURL, (req, res) => {
  bookmarksArray.push(req.body);
  res.json(bookmarksArray[bookmarksArray.length - 1]);
});
Adding the next() function:

js
Copy code
// controllers/bookmarksController.js
const validateURL = (req, res, next) => {
  console.log("This function checks the validity of the URL entered by the user.");
  return next();
};
What does the next() function do?

The next() function passes control to the next middleware function in the stack.
What happens if you only use return instead of next()?

If you only use return, the request-response cycle will be terminated and the next middleware will not be executed.
Can middleware return a response?

Yes, middleware can return a response and end the request-response




