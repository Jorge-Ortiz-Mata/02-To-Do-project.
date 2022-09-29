const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// ------ Connect to MongoDB ------
mongoose.connect('mongodb://mongo_service:27017/toDoProjectDB', { useNewUrlParser: true });

// --- Schema.
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  comment: {
    type: String
  }
});

// --- Model.
const Task = mongoose.model("Task", taskSchema);

// ------- GET routes ------------
app.get('/', function(req, res){
  Task.find({}, function(err, allTasks){
    res.render('pages/index', { tasks: allTasks })
  })
});

app.get('/new', function(req, res){
  res.render('pages/new');
});

app.get('/edit/:params', function(req, res){
  const id = req.params.params;
  Task.findOne({"_id": id}, function(err, task){
    if(err){
      console.log(err);
      res.redirect('/');
    } else {
      if(task != null){
        res.render('pages/edit', {task: task});
      } else {
        res.redirect('/');
      }
    }
  })
});
// ------ POST routes ----------
app.post("/new/task", function(req, res){
  const { task_name: nameTask, task_date: dateTask, task_comment: commentTask } = req.body;
  const task = new Task({
    name: nameTask,
    date: dateTask,
    comment: commentTask
  });
  task.save();
  res.redirect('/');
});

// ------ PORTS -----------------
app.listen(process.env.PORT || port, () => {
  console.log("Restarting.....");
  console.log("It is working!! Yeah!!");
});


