const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: {
        type: String
    },
    options: {
        type: Array,
         answer: {
             type: String,
         },
         isCorrect: {
             type: Boolean
         },
         answer: {
            type: String,
        },
        isCorrect: {
            type: Boolean
        },
        answer: {
            type: String,
        },
        isCorrect: {
            type: Boolean
        },
        answer: {
            type: String,
        },
        isCorrect: {
            type: Boolean
        }
    }
})

module.exports = mongoose.model('Question', questionSchema)

