const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('in server GET');
})

router.post('/', (req, res) => {
    console.log('in server POST');
    // let newItem = {
    //     name: req.body.name,
    //     quantity: req.body.quantity,
    //     unit: req.body.unit
    // }

    let newItem ={
        name: 'a',
        quantity: 1,
        unit: 'lb'
    }

    const queryText = `INSERT INTO "shopping_list"("name", "quantity", "unit")
                        VALUES ($1, $2, $3);`
    const values = [newItem.name, newItem.quantity, newItem.unit];

    pool.query(queryText, values)
        .then(result => {
            console.log(`Successfully posted ${newItem} to the db`);
            res.sendStatus(201);
        }).catch(err => {
            console.log(`There was an error posting ${newItem} to the db`);
            res.sendStatus(500);
        });
})

module.exports = router;