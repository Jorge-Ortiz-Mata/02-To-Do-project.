const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// ------- GET routes ------------
app.get('/', function(req, res){
  res.render('pages/index');
});

app.get('/new', function(req, res){
  res.render('pages/new');
});

// ------ POST routes ----------

app.post("/new/task", function(req, res){
  console.log(req.body);
  console.log("Hello!!")
})

// ------ PORTS -----------------
app.listen(process.env.PORT || port, () => {
  console.log("Restarting.....");
  console.log("It is working!! Yeah!!");
});


