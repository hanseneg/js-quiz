import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import QuestionsForm from "./QuestionsForm"
import {UserContext} from "./UserContext.js"
import { useHistory } from "react-router-dom"

function Questions(props) {
    const [questions, setQuestions] = useState([])
    const [submittedAnswers, setSubmittedAnswers] = useState([])
    const [finalScore, setFinalScore] = useState(0)
    const [showFinalScore, setShowFinalScore] = useState(false)

    const {user} = useContext(UserContext)

    let history = useHistory()

    useEffect(() => {
        axios.get("/questions")
            .then(response => setQuestions(response.data))
            .catch(error => console.log(error))
    }, [])

    function submitQuestion(value) {
        console.log(value)
        setSubmittedAnswers(prevSubmittedAnswers => [...prevSubmittedAnswers, value])
    }

    function scoreQuiz() {
        console.log(submittedAnswers)
        let totalCorrect = submittedAnswers.filter(each => each === "true")
        console.log(totalCorrect.length)

        setFinalScore(totalCorrect.length)
        console.log(finalScore)
        setShowFinalScore(true)

        let userScore = {
            user: user,
            score: totalCorrect.length
        }

        axios.post("/users", userScore)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    function goToLeaderBoard(event) {
        event.preventDefault()
        history.push("/leaderboard")
    }

    let quizQuestions = questions.map(each => {
        return (
            <QuestionsForm key={each._id} questions={each} submitQuestion={submitQuestion} />
        )
    })
    return (
        <div>
            <h1>Questions</h1>
            {quizQuestions}
            <button onClick={scoreQuiz}>Score Quiz</button>
            <button onClick={goToLeaderBoard}>Scores</button>
            <h1 style={{ display: showFinalScore ? "block" : "none" }}>Final Score: {`${user} you got ${finalScore}/10 correct!`}</h1>
        </div>
    )
}
export default Questions;