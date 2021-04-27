const quizzesModel = require("../models/quizzes/quizzes-model")

const findAllQuizzes = () => { // retrieve all quizzes
  return quizzesModel.find() // returns a promise
}

const findQuizById = (quizId) => { // retrieve specific quiz by its ID
  return quizzesModel.findById(quizId)
}

module.exports = { // export functions for controller
  findAllQuizzes,
  findQuizById
}