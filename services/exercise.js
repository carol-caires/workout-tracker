export default class ExerciseService {
  async Create (exercise) {
    return new Promise(function (resolve, reject) {
      if (exercise.title !== 'test') {
        reject(new Error('I was expeting a test string'))
      }
      resolve(exercise)
    })
  }
}
