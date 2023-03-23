const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

router.get("/", (req, res) => {
  console.log("in server GET");
  const sqlText = "SELECT * FROM shopping_list ORDER BY NAME, name DESC;";

<<<<<<< HEAD
router.post('/', (req, res) => {
    console.log('in server POST');
    let newItem = {
        name: req.body.name,
        quantity: req.body.quantity,
        unit: req.body.unit
    }
=======
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`Server GET response`, result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    });
});

router.post("/", (req, res) => {
  console.log("in server POST");
  // let newItem = {
  //     name: req.body.name,
  //     quantity: req.body.quantity,
  //     unit: req.body.unit
  // }
>>>>>>> 157bef4c692675d2cc1a05aa25023f0bba447790

  let newItem = {
    name: "a",
    quantity: 1,
    unit: "lb",
  };

  const queryText = `INSERT INTO "shopping_list"("name", "quantity", "unit")
                        VALUES ($1, $2, $3);`;
  const values = [newItem.name, newItem.quantity, newItem.unit];

  pool
    .query(queryText, values)
    .then((result) => {
      console.log(`Successfully posted ${newItem} to the db`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`There was an error posting ${newItem} to the db`);
      res.sendStatus(500);
    });
});

module.exports = router;
