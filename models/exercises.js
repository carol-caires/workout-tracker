var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'Database connection error:'))
db.once('open', function () {
  console.info('Connected on database')
})

console.log(db)
// var exercisesSchema = new mongoose.Schema({
//   title: String
// })
// var Exercise = mongoose.model('Exercise', exercisesSchema)
// var running = new Exercise({ title: 'Running' })

// running.save(function (err, running) {
//   if (err) return console.error(err)
// })
