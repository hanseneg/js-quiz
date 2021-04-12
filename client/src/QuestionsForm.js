import React, { useState } from "react"

function QuestionsForm(props) {
    const [value, setValue] = useState()
    const [showQuestion, setShowQuestion] = useState(true)
    const [showCorrect, setShowCorrect] = useState(false)
    const [showIncorrect, setShowIncorrect] = useState(false)

    function selected(event) {
        setValue(event.target.value)
        console.log(value)
    }

    function displayChange(event) {
        event.preventDefault()
        setShowQuestion(false)
        console.log(value)
        props.submitQuestion(value)

        value === "true" ? setShowCorrect(true) : setShowIncorrect(true)
    }

    return (
        <div>
            <div style={{ display: showQuestion ? "block" : "none" }}>
               <div className="question"> Question: {`${props.questions.question}?`} </div>
                <form className="question-input" onSubmit={displayChange}>
                    {/*Answer One*/}
                    <label>
                        <input
                            type="radio"
                            name={props.questions._id}
                            value={props.questions.options[0].isCorrect}
                            onChange={selected}
                        />
                    </label>
                    {props.questions.options[0].answer}

                    {/*Answer Two*/}
                    <label>
                        <input
                            type="radio"
                            name={props.questions._id}
                            value={props.questions.options[1].isCorrect}
                            onChange={selected}
                        />
                    </label>
                    {props.questions.options[1].answer}

                    {/*Answer Three*/}
                    <label>
                        <input
                            type="radio"
                            name={props.questions._id}
                            value={props.questions.options[2].isCorrect}
                            onChange={selected}
                        />
                    </label>
                    {props.questions.options[2].answer}

                    {/*Answer Four*/}
                    <label>
                        <input
                            type="radio"
                            name={props.questions._id}
                            value={props.questions.options[3].isCorrect}
                            onChange={selected}
                        />
                    </label>
                    {props.questions.options[3].answer}
                    <br/>
                    <button>Submit Question</button>
                </form>
            </div>
            <div>
                <h1 style={{ display: showCorrect ? "block" : "none", color: "green" }}>Correct Answer!</h1>
                <h1 style={{ display: showIncorrect ? "block" : "none", color: "red" }}>Incorrect Answer!</h1>
            </div>
        </div>
    )
}

export default QuestionsForm