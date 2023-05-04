const express = require("express");
const router = express.Router();
const Vegetable = require("../models/vegetable");

//putting all routes(get, put,post, ...) in this file
// replacing app. WITH router.
// go to each path in our route and delete fruits/vegie

// I.N.D.U.C.E.S "routes"
// ==============
// Index route
router.get("/", async (req, res) => {
  try {
    const foundVegetable = await Vegetable.find({});
    res.render("./vegetables/Index", { vegetables: foundVegetable });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New // renders a form to create a new fruit
router.get("/new", (req, res) => {
  res.render("vegetables/New"); // can be done either way w/ a relative path or like this
});

//DELETE
// receives the id of the fruit document and deletes it, after that it will redirect back to the Index.

//Update/Put

// Create // receives info from new route to then create a new fruit w/ it

router.post("/", async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === "on"; //conditional to return true or false
    const newVegetable = await Vegetable.create(req.body);
    // console.log(fruits)
    // res.send('data received and created')
    res.redirect("/vegetables"); //redirect making a get request to the specified path
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === "on"; //conditional to return true or false
    const newVegetable = await Vegetable.create(req.body);
    // console.log(fruits)
    // res.send('data received and created')
    res.redirect("/vegetables"); //redirect making a get request to the specified path
  } catch (err) {
    res.status(400).send(err);
  }
});

//EDIT
//will make a request to the PUT route

// Show

router.get("/:id", async (req, res) => {
  try {
    const foundVegetable = await Vegetable.findById(req.params.id);
    res.render("./vegetables/Show", {
      vegetable: foundVegetable,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
