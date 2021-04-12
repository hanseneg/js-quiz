import React, {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
import {UserContext} from "./UserContext"

function Welcome(props){
    
    const [user, setUser] = useState("")
    let history = useHistory();

    const context = useContext(UserContext)

    const handleChange = (e) => {
        setUser(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        context.setUser(user);
        history.push("/questions");
        
    }

 return (
     <div>
         <h1>Welcome to the JavaScript Quiz</h1>
         <h2>Enter your name to begin.</h2>

         <form name="user-form" onSubmit={handleSubmit}>
             <input
             className="input"
             type="text"
             name="user"
             onChange={handleChange}
             placeholder="Enter your name"
             value={user}
             >
             </input>
             <button>Submit and Start Game!</button>

         </form>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="Javascript Logo"></img>
     </div>
     

 )
}
export default Welcome;