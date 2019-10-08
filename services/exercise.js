export default class ExerciseService {
  async Create (exercise) {
    return new Promise(function (resolve, reject) {
      if (exercise.title === '' || exercise.title === undefined) {
        reject(new Error('Exercise title expected!'))
      }
      resolve(exercise)
    })
  }
}
