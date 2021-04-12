import React, {useState} from './node_modules/react'
const UserContext = React.createContext();


function UserContextProvider(props){
    const [user, setUser] = useState("");
    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}



/* 
To consume this context,

1. import useContext hook 
2. import {UserContext} from "./UserContext.js"

const context = useContext(UserContext)
Then you will have access to context.user
*/