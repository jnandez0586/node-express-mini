const express = require('express');
const db = require('./data/db');

const server = express();

server.listen(5000, () => {
  console.log('=== APP running on port 5000')
})

server.get('/api/users', (req, res) => {
  db.find()
    .then( users => {
      res.json({users})
    })
    .catch( err => {
      res.status(500).json({error: 'The users information could not be retrieved.'});
    })
});

server.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  
  db.findById(userId)
    .then( user => {
      res.json({user})
    })
    .catch( err => {
      console.log('hi',req);
      if(res.status(404) === 404){
        res.status(404).json({error: 'The user with the specified ID does not exist.'});
      }
      })
});