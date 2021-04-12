import React from "react"
import Welcome from "./Welcome";
import Leaderboard from "./Leaderboard";
import Questions from "./Questions";
import {Route, Switch } from "react-router-dom";
import {UserContextProvider} from "./UserContext";

function App(){
    return(
        <div className="app">
            <UserContextProvider>
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route path="/questions">
                        <Questions />
                    </Route>
                    <Route path="/leaderboard">
                        <Leaderboard />
                    </Route>
                </Switch>
            </UserContextProvider>
            
        </div>
             
        
        
    )
}

export default App