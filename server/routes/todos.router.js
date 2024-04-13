const router = require('express').Router();
const pool = require('../modules/pool');

// POST Route --- CREATE
// GET Route --- READ
router.get('/', (req, res) =>{
    const queryText = `SELECT * FROM "todos";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error in GET', error);
        res.sendStatus(500);
    });
})

// PUT Route --- UPDATE
// DELETE Route --- DELETE



module.exports = router;
