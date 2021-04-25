const express = require('express')
const app = express()

const demos = require("./controllers/demos-controller")
demos(app)

app.listen(4000)