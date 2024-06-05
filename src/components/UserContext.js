import React, { createContext, useState } from "react"

export const UserCtx=createContext();
export default function UserContext(props){
    const [userName,setUserName]=useState();
    return(
        <UserCtx.Provider value={{userName,setUserName}}>{props.children}</UserCtx.Provider>
    );
}