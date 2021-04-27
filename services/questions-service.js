const questionsModel = require("../models/questions/questions-model")

const findAllQuestions = () => {
  return questionsModel.find()
}

const findQuestionsForQuiz = (quizId) => {
  return questionsModel.find({quizId: quizId})
}

module.exports = {
  findAllQuestions,
  findQuestionsForQuiz
}