const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Send every other request to the React app
// Define any API routes before this runs
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/scores");
// Define API routes here

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
