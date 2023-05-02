const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Our site is running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})