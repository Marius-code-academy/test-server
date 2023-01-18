
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json())

const data = [{
  test:'test'
}]

app.get('/', (req, res) => {
  res.json(JSON.stringify(data))
})

app.post('/', (req, res) => {
  data.push(req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})