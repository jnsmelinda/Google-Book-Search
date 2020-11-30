const router = require("express").Router();
const Books = require("../models/books.js");

router.post("/api/books", ({body}, res) => {
  Books.create(body)
    .then(book => res.json(book))
    .catch(err => res.status(422).json(err));
});

router.get("/api/books", (req, res) => {
  Books.find({})
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;
