### :star: TODO-API

TODO-API is an implementation of the Backend API's of TODO Application.

The final prototype of TODO-API is able to perform these actions:

1. The user can create/read/update/delete todos.
2. The user can search an existing todo by title/date/priority/state.
3. The user can prioritize the todos.

I have tested the API's using postman and each request is displaying correct result.
The user will be able to search using using of any one of these (title, date, priority, state).


### :dart: Approach:

# I have created various routes for various processes.
  - GET http://localhost:3000/todos/
    - To list all TODOs
  - POST http://localhost:3000/todos/
    - To add a new TODO
  - GET http://localhost:3000/todos/searchstate
    - To list all todos filtered by a state.
  - GET http://localhost:3000/todos/searchpriority
    - To list all todos filtered by a priority.
  - GET http://localhost:3000/todos/searchdate
    - To list all todos filtered by a date.
  - GET http://localhost:3000/todos/searchtitle
    - To list all todos filtered by a title.
  - PUT http://localhost:3000/todos/:id
    - To update a TODO with particular id.
  - DELETE http://localhost:3000/todos/:id
    - To delete a TODO with particular id.
    
### :computer: Database Schema:
  - Datebase Name: todos
  - Fields
    - id int primary key
    - title varchar(50)
    - description text
    - state boolean
    - priority integer
    - creation_date timestamp

### :hammer_and_wrench: Steps to run:
 - Fork the repository
 - Run the command
   ```
   $ npm install
   $ npm start
   ```
