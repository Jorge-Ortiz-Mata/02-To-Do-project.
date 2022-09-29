const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// ------ Connect to MongoDB ------
mongoose.connect('mongodb://mongo_service:27017/toDoProjectDB', { useNewUrlParser: true })

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Task = mongoose.model("Task", taskSchema);


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


