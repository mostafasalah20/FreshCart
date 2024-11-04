import { createContext, useState } from "react";

export let UserContext=createContext()

export default function UserContextProvider(props){
    const [user, setUser]=useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
