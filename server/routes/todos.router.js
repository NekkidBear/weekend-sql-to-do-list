const router = require('express').Router();
const pool = require('../modules/pool');

// POST Route --- CREATE
router.post(`/`, (req, res) => {
    console.log('POST req.body: ', req.body);
    const todoText = req.body.text;
    const isComplete = req.body.isComplete || false //set value to false if it's not provided
    const sqlText = `
        INSERT INTO "todos" ("text", "isComplete")
            VALUES ($1, $2);`;
    const sqlValues = [todoText, isComplete];
    console.log(sqlText, sqlValues)
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
    console.log("PUT req.body: ", req.body);
    console.log('put req.params.id: ', req.params.id)
    let id = req.params.id;
    let isComplete = true; // set flag to True
    const sqlText = `
        UPDATE todos
            SET "isComplete" = $1
            WHERE id = $2;
    `;

    const sqlValues = [isComplete, id];
    pool.query(sqlText, sqlValues)
        .then(() =>{ 
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error updating completion status', error);
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
