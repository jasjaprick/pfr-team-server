const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usersRouter = require("./Router");

dotenv.config();

const corsOptions = {
  origin: process.env.ORIGIN,
};

const app = express();

// app.use(cors(corsOptions))

app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error connecting to MongoDB Atlas:" + err));

app.use("/users", usersRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`App listening on port ${port}`));
