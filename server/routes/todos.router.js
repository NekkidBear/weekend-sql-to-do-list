const router = require('express').Router();
const pool = require('../modules/pool');

// POST Route --- CREATE
router.post(`/`, (req, res) => {
    const newTodo = req.body;
    const sqlText = `INSERT INTO "todos" ("task", "completed")
    VALUES ($1, $2);`;
});

// GET Route --- READ
router.get('/', (req, res) =>{
    const sqlText = `SELECT * FROM "todos";`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('GET todos failed', error);
        res.sendStatus(500);
    });
})

// PUT Route --- UPDATE
router.put('/:id', (req, res) => {
    
});

// DELETE Route --- DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `DELETE FROM "todos" WHERE "id" = $1;`;
    pool.query(sqlText, [id])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('DELETE todo failed', error);
        res.sendStatus(500);
    });
});



module.exports = router;
