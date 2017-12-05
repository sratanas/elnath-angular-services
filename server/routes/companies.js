var express = require('express');
var router = express.Router();

var pool = require('../modules/pool')

router.get('/', function (req, res) {
  pool.connect(function (errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to database', errorConnectingToDatabase);
      res.sendStatus(500);

    } else {
      db.query('SELECT * FROM company ORDER BY id;', function (errorMakingQuery, taskResult) {
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
  var newCompany = req.body;
  pool.connect(function (errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to database', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      db.query(`INSERT INTO company (name, country) VALUES ($1, $2);`, [newCompany.name, newCompany.country], function (errorMakingQuery, taskResult) {
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