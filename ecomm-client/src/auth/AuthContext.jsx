import { createContext, useContext } from "react";
import { useState } from "react";


const AuthContext = createContext(null);


const hardcoded_email = "aman@gmail.com";
const hardcoded_pass = "coolaman";

export function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuth] = useState(false);

    const login = (email, password)=>{
        //returns a boolean value based on email and pass 
        if(email===hardcoded_email && password=== hardcoded_pass){
            const userData = {email, name:"Aman"};

            setUser(userData);
            
            setIsAuth(true);
            return {
                sucess:true
            }


        }



        return {
            success:false,
            error:"Invalid Credentials"
        }

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