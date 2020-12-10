const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/todos' , require('./routes/todoRoutes'));

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`)
})