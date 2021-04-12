const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)

/* const users = [
    {user: "John", score: 5},
    {user: "Sally", score: 10},
    {user: "Bill", score: 6},
    {user: "Kevin", score: 0},
    {user: "Mark", score: 8},
    {user: "Nelly", score: 7},
    {user: "Peter", score: 3},
] */