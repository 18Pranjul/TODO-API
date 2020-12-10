const router = require('express').Router();
const pool = require('../DB_CONNECTION/db');

//List of TODOs
router.get('/' , async (req , res) => {
  try {
    const allTodos = await pool.query("select * from todos");
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//Add a TODO
router.post('/' , async (req , res) => {
  try {
    const {title , description , state , priority} = req.body;
    const date = new Date();
    const newEntry = await pool.query(
      `INSERT INTO todos (title , description , state , priority , creation_date) VALUES ('${title}' , ${description} , '${state}' , '${priority}' , '${date}')`
    );
    res.json(newEntry);
  } catch(err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//Search list of TODOs by state
router.get("/searchstate", async (req, res) => {
  try {
   const todo_state = await pool.query(`SELECT * FROM todos WHERE state = ${req.query.state}`);  
   res.json(todo_state.rows);
 } catch (err) {
   console.error(err);
   res.status(500).send(err);
 }
});

//Search list of TODOs by priority
router.get("/searchpriority", async (req, res) => {
  try {     
   const todo_priority = await pool.query(`SELECT * FROM todos WHERE priority = ${req.query.priority}`);
   res.json(todo_priority.rows);
 } catch (err) {
   console.error(err);
   res.status(500).send(err);
 }
});

//Search list of TODOs by date
router.get("/searchdate", async (req, res) => {
  try {
    const todo_date = await pool.query(`SELECT * FROM todos WHERE date = ${req.query.date}`);
    res.json(todo_date.rows);
 } catch (err) {
   console.error(err);
   res.status(500).send(err);
 }
});

//Search list of TODOs by title
router.get("/searchtitle", async (req, res) => {
  try {
    const todo_title = await pool.query(`SELECT * FROM todos WHERE title = ${req.query.title}`);
    res.json(todo_title.rows);
 } catch (err) {
   console.error(err);
   res.status(500).send(err);
 }
});


//Get a TODO
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(`SELECT * FROM todos WHERE todo_id = ${id}`);
    res.json(todo.rows);
 } catch (err) {
   console.error(err);
   res.status(500).send(err);
 }
});

//Update a TODO
router.put("/:id", async (req, res) => {
 try {
    const { id } = req.params;
    const { title, description, state, priority} = req.body;
    const date = new Date();
    const updateTodo = await pool.query(
      `UPDATE todos SET title= ${title}, description = ${description}, state = ${state}, priority = ${priority}, creationdate = ${date} WHERE todo_id = ${id}`);
    res.json("Todo Updated!");
 } catch (err) {
    console.error(err);
    res.status(500).send(err);
 }
});

//Delete a TODO
router.delete("/:id", async (req, res) => {
 try {
    const { id } = req.params;
    const deleteTodo = await pool.query(`DELETE FROM todos WHERE todo_id = ${id}`);
    res.json("Todo Deleted!");
 } catch (err) {
    console.log(err);
    res.status(500).send(err);
 }
});

module.exports = router;