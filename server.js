const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//Import Routes
const authRoute = require("./routes/auth");
const todoRoute = require("./routes/todo");

const mongoURI =
  "mongodb+srv://ranjanshitanshu10:Q5qYq8IndGhGUQVg@cluster0.ckkwtsk.mongodb.net/";

const port = 5000;

//Connect to DB
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//Middlewares
app.use(express.json());

// Enable CORS for all origins and all routes
app.use(
  cors({
    origin: "*",
  })
);

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/todo", todoRoute);

app.listen(port, () => console.log(`Server Up and Running @ PORT: ${port}`));
