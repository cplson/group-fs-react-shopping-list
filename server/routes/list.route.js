const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

router.get("/", (req, res) => {
  console.log("in server GET");
  const sqlText = "SELECT * FROM shopping_list ORDER BY NAME, name DESC;";

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

module.exports = router;
