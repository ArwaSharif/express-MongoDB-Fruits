const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit");

//putting all routes(get, put,post, ...) in this file
// replacing app. WITH router.
// go to each path in our route and delete fruits/vegie

//SEED ROUTE
//need to go to the route then it will redirect back to the index with the seed
router.get("/seed", async (req, res) => {
  try {
    await Fruit.create([
      {
        name: "grapefruit",
        color: "pink",
        readyToEat: true,
      },
      {
        name: "grape",
        color: "purple",
        readyToEat: false,
      },
      {
        name: "avocado",
        color: "green",
        readyToEat: true,
      },
    ]);
    res.redirect("/fruits");
  } catch (err) {
    res.status(400).send(err);
  }
});
// I.N.D.U.C.E.S "routes"
// ==============
// Index route
router.get("/", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    //the find method will always return an array
    //1st obj is the filter to filter for properties. Laave it empty to get every doc in the model
    const foundFruit = await Fruit.find({});
    //index page will still have it's data to map over
    //need to assign to data foundinside var foundFruit
    res.status(200).render("fruits/Index", { fruits: foundFruit });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New // renders a form to create a new fruit
router.get("/new", (req, res) => {
  res.render("fruits/New");
});

//DELETE
// receives the id of the fruit document and deletes it, after that it will redirect back to the Index.
router.delete("/fruits/:id", async (req, res) => {
  // to check if the method is working before
  // coding the rest of the promise
  // res.send('deleting....')
  // remove or comment out bc only one response can be made
  try {
    await Fruit.findByIdAndDelete(req.params.id);
    //refreshing the page with what deleted gone
    res.status(200).redirect("/fruits");
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update/Put
router.put("/:id", async (req, res) => {
  try {
    //turn the readyToEat prop into a boolean value
    req.body.readyToEat = req.body.readyToEat === "on";
    //update the specific fruit and submit to body
    const updateFruit = await Fruit.findByIdAndUpdate(
      req.params.id,
      //data from req.body
      req.body,
      //if the new is not there, it will show the old doc before the update
      { new: true }
    );
    // console.log(first)
    //redirecting to the specific fruit show page; good UE, aka user experience
    res.redirect(`/fruits/${req.params.id}`);
    //add the form action and method to see the effects
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create // receives info from new route to then create a new fruit w/ it
router.post("/", async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === "on";
    const newFruit = await Fruit.create(req.body);
    console.log(newFruit);
    //console.log(fruits);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/fruits");
  } catch (err) {
    res.status(400).send(err);
  }
});

//EDIT
//will make a request to the PUT route
router.get("/:id/edit", async (req, res) => {
  // finding the document that we are about to edit, giving the Edit.jsx the document found through props
  try {
    const foundFruit = await Fruit.findById(req.params.id); //accessing the params with req.params.id
    res.render("fruits/Edit", {
      fruit: foundFruit,
    }); //sending the found fruit as an obj so that we can edit it
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
router.get("/:id", async (req, res) => {
  try {
    // we are accessing our url param id
    // the whole of line 74 is the fruit._id
    const foundFruit = await Fruit.findById(req.params.id);
    res.render("fruits/Show", {
      //second param must be an object
      fruit: foundFruit,
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// exporting the router we just made
module.exports = router;
