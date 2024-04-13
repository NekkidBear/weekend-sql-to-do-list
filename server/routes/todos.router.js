const router = require('express').Router();
const pool = require('../modules/pool');

// POST Route --- CREATE
router.post(`/`, (req, res) => {
    const todoText = req.body.text;
    const isComplete = req.body.isComplete
    const sqlText = `INSERT INTO "todos" ("task", "completed")
    VALUES ($1, $2);`;
    const sqlValues = [todoText, isComplete];

    pool.query(sqlText, sqlValues)
        .then(() =>{
            console.log("item added");
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log("Error creating new item")
            res.sendStatus(500);
        })
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
    let id = req.params.id;

    const sqlText = `
        UPDATE todos
            SET isComplete = true
            WHERE id = $1;
    `;

    const sqlValues = [id];
    pool.query(sqlText, sqlValues)
        .then(() =>{ 
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error updating completion status')
            res.sendStatus(500);
        });

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
