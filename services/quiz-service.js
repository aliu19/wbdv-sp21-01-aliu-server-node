let quizzes = require('./quizzes.json') // quizzes declared in separate file

const findAllQuizzes = () => quizzes // retrieve all quizzes
const findQuizById = (quizId) => // retrieve specific quiz by its ID
    quizzes.find(quiz => quiz._id === quizId)

module.exports = { // export functions for controller
  findAllQuizzes,
  findQuizById
}