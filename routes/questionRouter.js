const express = require('express')
const questionRouter = express.Router()
const Question = require('../models/question.js')

//get all questions
questionRouter.get('/', (req, res, next) => {
    Question.find((err, questions) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(questions)
    })
})

//???post a question???
questionRouter.post('/', (req, res, next) => {
    const newQuestion = new Question(req.body)
    newQuestion.save((err, savedQuestion) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedQuestion)
    })
})

module.exports = questionRouter