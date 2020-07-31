"use strict";

const { Router } = require("express");
const router = new Router();
const Place = require("./../models/place");

router.get("/create", (req, res) => {
  res.render("places/create");
});

router.post("/create", (req, res, next) => {
  const { name, type, longitude, latitude } = req.body;
  Place.create({
    name,
    type,
    location: {
      coordinates: [longitude, latitude],
    },
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/update/:id", (req, res, next) => {
  const id = req.params.id;
  Place.findById(id)
    .then((place) => {
      res.render("places/update", { place });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/delete/:id", (req, res, next) => {
  const id = req.params.id;
  Place.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
