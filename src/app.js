import express from 'express'
import { config } from 'dotenv'

config()

const app = express()
const port = process.env.PORT


app.get('/', (req, res) => {
  res.send('Hello 8000!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})