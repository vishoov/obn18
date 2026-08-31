import { createContext, useContext } from "react";
import { useState } from "react";


const AuthContext = createContext(null);


const hardcoded_email = "aman@gmail.com";
const hardcoded_pass = "coolaman";

export function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuth] = useState(false);

    const login = async (email, password)=>{
        //returns a boolean value based on email and pass 
        const response = await fetch("http://localhost:3000/users/login", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"bearer d0hf0yhf90hf9hf9h"
            },
            body:JSON.stringify({email, password})
        })
        if(!response.ok){
            console.log(response);
        }


        const state = await response.json();
        setUser(state.user);
        console.log(user);

        // console.log(state);

        

       
    }

    const logout = ()=>{
        setUser(null);
        //logout 
    }
    const value = {
        user, 
        //flag 
        isAuthenticated,
        login,
        logout
        // loading

    }

    return( <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an Auth Provider");

    }

    return context;
}