import ExerciseService from './services/exercise'

var app = require('express')()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/exercises', async (req, res, next) => {
  try {
    const body = req.body
    const service = new ExerciseService()
    const response = await service.Create(body)
    return res.json(response)
  } catch (error) {
    const { message } = error
    return res.json({ message })
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
