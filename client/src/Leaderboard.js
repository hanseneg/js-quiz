/*
When page loads, it does a get request to /users and receives an array of objects with the user and score.
This is saved in state, and mapped out as a leaderboard.
Context from the welcome page is consumed here to keep track of the user that just played. This allows the page to search the data and find the data
belonging to the current user.
When the leaderboard is mapped out, there is conditional rendering that finds the score of the user that just played and sets a different styling.
Lastly, the button redirects the Router to go back to the Welcome page.
*/


import axios from "axios"
import React, {useState, useEffect, useContext} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "./UserContext";
import "./LeaderboardStyle.css"

function Leaderboard(props){

  const history = useHistory();
  const [scores, setScores] = useState("");
  const context = useContext(UserContext);
  const [rank, setRank] = useState(null);

  

 useEffect(function getScores(){
    axios.get("/users")
    .then(res => {
        setScores(res.data.sort((a,b) => b.score - a.score));
        const playerIndex = scores.findIndex(each => each.user === context.user );
        setRank(playerIndex + 1);
    })
    .catch(err => console.log(err))

  }, [context.user, scores])

 

 return (
     <div className="leaderboard">
        <h1>Leaderboard</h1>
        <h2>Congratulations, {context.user}! <br></br>You ranked #{rank} out of {scores.length}</h2>
        {scores && scores.map(score => (
            score.user !== context.user ?
                <div className="score">
                    <h3>{score.user}</h3>
                    <p>{score.score}</p>
                </div>
                :
                <div className="user-score">
                    <h3>{score.user}</h3>
                    <p>{score.score}</p>
                </div>

        ))}
        <button onClick={() => history.push("/")}>Try Again? </button>
     </div>
     

 )
}
export default Leaderboard;