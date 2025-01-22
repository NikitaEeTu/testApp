const name = "Nikita, haha";
console.log("My name is: " + name);

const express = require('express')
const app = express()
const port = 9000
const favFood = process.env.FOOD;

app.get('/', (req, res) => {
  res.send('Hello World! My favourity food is: ' + favFood)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
