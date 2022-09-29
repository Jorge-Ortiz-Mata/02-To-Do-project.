const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// ------- GET routes ------------
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.listen(process.env.PORT || port, () => {
  console.log("Restarting.....");
  console.log("It is working!! Yeah!!");
})


