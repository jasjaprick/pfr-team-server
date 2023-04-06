const express = require("express");
const User = require("./schema");

const router = express.Router();

router.post("/add", (req, res) => {
  const user = new User({
    name: req.body.name,
    role: req.body.role,
  });

  user
    .save()
    .then(() => res.status(201).send(user))
    .catch((err) => res.status(400).send(err));
});

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
