const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello! World2')
})

app.get('/fun1', (req, res) => {
    res.send('Helow fun1')
  })

  app.get('/fun2', (req, res) => {
    res.send('Helow fun2')
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})