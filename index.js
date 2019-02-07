const express = require('express')

const app = express()
const router = express.Router()

app.use(router)
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.post('/report-response', (req, res) => {
  console.log(req.body)
})

app.listen('3000', () => {
  console.log('Server listening on port 3000')
})
