const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

//heroku
const path = require("path")
const PORT = process.env.PORT || 5000

//"mongodb://localhost:27017/jsQuizApp"
mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to MongoDB!"))
    .catch(error => console.log(error))

//heroku
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(express.json())
app.use(morgan("dev"))

app.use('/users', require('./routes/userRouter.js'))
app.use('/questions', require('./routes/questionRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//heroku
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
})


/* [
    {user: "John", score: 5},
    {user: "Sally", score: 10},
    {user: "Bill", score: 6},
    {user: "Kevin", score: 0},
    {user: "Mark", score: 8},
    {user: "Nelly", score: 7},
    {user: "Peter", score: 3},
] */

//will return an array of questions. (I'll try to think of some more and send them to you)
//Will be a post endpoint where the req.body will look like {user: "Jim", score: 9}.
//Will be a get to the same endpoint as 2, and will return an array of users and scores like the one 2 posts above

/* const sampleQuestions = [
    {
        question: "How do you add a comment in JS",
        options: [
            {answer: `"This is a comment" `, isCorrect = false},
            {answer: `//This is a comment `, isCorrect = true}, 
            {answer: `<!--This is a comment-->`, isCorrect = false}
        ] 
    },
    {
        question: "Which of the following is not a primitive data type?",
        options: [
            {answer: `Boolean`, isCorrect = false},
            {answer: `String`, isCorrect = false}, 
            {answer: `Number`, isCorrect = false},
            {answer: `Object`, isCorrect = true}
        ] 
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        options: [
            {answer: `REALGOODVAR`, isCorrect = false},
            {answer: `___underscoreVar`, isCorrect = false}, 
            {answer: `2good4var`, isCorrect = true},
            {answer: `These are all valid variable names in JavaScript`, isCorrect = false}
        ] 
    }, 
    {
        question: "What is the function of the Optional Chaining '?' operator?",
        options: [
            {answer: `To safely access nested object properties even if an intermediate property does not exist`, isCorrect = true},
            {answer: ` To change an object to a primitive`, isCorrect = false}, 
            {answer: `To create conditional branching`, isCorrect = false},
            {answer: `To have a help button appear`, isCorrect = false}
        ] 
    }, 
    {
        question: "What does the 'shift' method do on an array?",
        options: [
            {answer: `Appends an element to the beginning`, isCorrect = false},
            {answer: ` Extracts an element form the end`, isCorrect = false}, 
            {answer: `Appends an element to the end`, isCorrect = false},
            {answer: `Extracts an element from the beginning`, isCorrect = true}
        ] 
    }, 
    {
        question: "Which of these array methods can be used to create a new copy of the array?",
        options: [
            {answer: `Array.assign()`, isCorrect = false},
            {answer: `pop()`, isCorrect = false}, 
            {answer: `slice()`, isCorrect = true},
            {answer: `splice()`, isCorrect = false}
        ] 
    },
    {
        question: "Which of these is not one of the basic data type in JavaScript?",
        options: [
            {answer: `number`, isCorrect = false},
            {answer: `bigint`, isCorrect = false}, 
            {answer: `undefined`, isCorrect = true},
            {answer: `smallint`, isCorrect = true}
        ] 
    },
    {
        question: "Which of these array methods can be used to create a new copy of the array?",
        options: [
            {answer: `Array.assign()`, isCorrect = false},
            {answer: `pop()`, isCorrect = false}, 
            {answer: `slice()`, isCorrect = true},
            {answer: `splice()`, isCorrect = false}
        ] 
    },
    {
        question: "Which of the following is a native JavaScript API used for making HTTP requests?",
        options: [
            {answer: `JSON`, isCorrect = false},
            {answer: `AJAX`, isCorrect = false}, 
            {answer: `Axios`, isCorrect = true},
            {answer: `Fetch`, isCorrect = true}
        ] 
    },
    {
        question: "Which of these is NOT true about the && operator",
        options: [
            {answer: `It evaluates operands left to right.`, isCorrect = false},
            {answer: `It converts each operand to a boolean.`, isCorrect = false}, 
            {answer: `If all operands are true, it will return the last operand`, isCorrect = false},
            {answer: `It returns the first TRUTHY value`, isCorrect = true}
        ] 
    }      
] */

