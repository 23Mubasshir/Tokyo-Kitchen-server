const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const chefCart = require('./data/chefdata.json');
const cors = require('cors');

app.use(cors())
app.get('/', (req, res) => {
  res.send('Our site is running')
})
app.get('/chefCart', (req, res) => {
  res.send(chefCart);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})