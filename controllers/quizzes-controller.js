// controllers deal with all things HTTP
const quizService = require('../services/quiz-service') // require service

module.exports = (app) => { // accept app, express instance

  // req, res allows participating in client/server architecture
  const findAllQuizzes = (req, res) => { // use service to retrieve all quizzes
    quizService.findAllQuizzes()
    .then((quizzes) => {
      res.send(quizzes)
    })
  }

  const findQuizById = (req, res) => { // use service to retrieve single quiz by its _id
    const quizId = req.params['qid']
    quizService.findQuizById(quizId)
    .then((quiz) => {
      res.json(quiz)
    })
  }

  app.get('/api/quizzes', findAllQuizzes) // create GET HTTP endpoints to retrieve quizzes
  app.get('/api/quizzes/:qid', findQuizById)
}
