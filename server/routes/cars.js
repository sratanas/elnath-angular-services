var express = require('express');
var router = express.Router();

var pool = require('../modules/pool')

router.get('/', function (req, res) {
  pool.connect(function (errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to database', errorConnectingToDatabase);
      res.sendStatus(500);

    } else {
      db.query(`SELECT cars.id, year, name, model, nickname, country, company_id 
      FROM cars JOIN company ON company.id = cars.company_id ORDER BY id;`, 
      function (errorMakingQuery, taskResult) {
        done();
        if (errorMakingQuery) {
          console.log('Error making query', errorMakingQuery);
          res.sendStatus(500);

        } else {
          res.send(taskResult.rows);
        }
      })
    }
  })
})

router.post('/', function (req, res) {
  var newCar = req.body;
  pool.connect(function (errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to database', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      db.query(`INSERT INTO cars (company_id, year, model, nickname) VALUES ($1, $2, $3, $4);`,
       [newCar.company_id, newCar.year, newCar.model, newCar.nickname], function (errorMakingQuery, taskResult) {
        done();
        if (errorMakingQuery) {
          console.log('Error making query', errorMakingQuery);
          res.sendStatus(500);

        } else {
          res.sendStatus(200);
        }
      })
    }
  })
})

module.exports = router;