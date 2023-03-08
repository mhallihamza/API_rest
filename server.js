const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require("./config/db");
const Users = require('./models/User');
const port = 3000;
app.use(bodyParser.json());
app.route('/')
  .get(function (req, res) {
    Users.find({})
  .then(users => {
    console.log(users);
    res.status(201).json(users);
  })
  .catch(err => {
    res.status(500).send(err);
  })
  })
  .post(function (req, res) {
    let newuser = new Users (req.body)
    newuser.save()
     .then(users => {
       res.status(201).json(users);
        console.log(users)
      })
      .catch(err => {
        res.status(500).send(err);
      })
  })
  app.route('/:id').put(function(req,res) {
      Users.findOneAndUpdate(
      {
        _id: req.params.id  // search query
      },
      {
        email: 'hamzamhalli95@gmail.com'   // field:values to update
      },
      {
        new: true,                       // return updated doc
        runValidators: true              // validate before update
      })
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    })})
  .delete(function (req, res) {
    Users.deleteOne({ _id:req.params.id })
    .then(users => {
      console.log(users);
      res.status(201).json(users);
    })
    .catch(err => {
      res.status(500).send(err);
    })  }   
  )
  
app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });