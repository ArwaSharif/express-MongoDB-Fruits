require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { connect, connection } = require('mongoose')
//include the method-override package place this where you instructor places it
const methodOverride = require('method-override');
const fruitController = require('./controllers/fruitsController')

//Database connection
  // second if an option object, this is best practice. it lets us use the most up-to-date 
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
connection.once('open', ()=> {
  console.log('connected to mongo!')
})

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');

// Custom Middleware
app.use(express.urlencoded({ extended: false }));

  //METHOD OVERRIDE
  //after app has been defined
  //use methodOverride.  We'll be adding a query parameter to our delete form named _method
  app.use(methodOverride('_method'));

//this tells server to look for static assests in the public folder like css, imgs, or fonts
//CSS file
app.use(express.static('public'))
//then we go to layout folder to have the style across the board

app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});


//cut the routs and pasted them into the controller
//required it in above as router
//tell the server to use this router bellow

//Routes
  //when the client makes a request to fruits, the server will  redirect to the controller router come here
app.use('/fruits', fruitController)
// app.use('/vegetables', vegetablesController)
//deleting the fruits word in the path in the vegetableController file bc this will replace it and go to the specific route


//CATCH ALL ROUTE 
//always at the end after all routes
//if anything after the / in the path that doesn't match anything redirect to index
app.get('/*', (req, res)=>{
  // either to the index page immediately
  // res.redirect('/fruits')
  // or to specific and custom 404 page
  res.send(`
  <div>
    404 THIS PAGE DOESN'T EXIT 
    GO BACK TO <a href="/fruits"> Fruits Page</a>
    <br/>
    GO BACK TO <a href="/vegetables"> Vegetables Page</a>
  </div>
  `)
})

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
