const express = require('express');
var indexRouter = require('./routes/index');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
const app = express();
const punkAPI = new PunkAPIWrapper();
app.use('/', indexRouter);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});


app.get("/beers", (req, res, next) => {
  punkAPI
    .getBeers().then(beersFromApi => {
      console.log("Beers from the database:" , beersFromApi);
      res.render("beers", { beersFromApi: beersFromApi });
    })
    .catch(error => console.log(error));
});
app.get("/random-beer", (req, res, next) => {
  punkAPI
    .getBeers().then(beersFromApi => {
      console.log("Beers from the database:" , beersFromApi[Math.floor(Math.random()*beersFromApi.length)]);
      res.render("random-beer", { beer: beersFromApi[Math.floor(Math.random()*beersFromApi.length)] });
    })
    .catch(error => console.log(error));
});




app.listen(3000, () => console.log('🏃‍ on port 3000'));
