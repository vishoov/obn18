import { createContext, useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

const API = "http://localhost:3000/users";


// const hardcoded_email = "aman@gmail.com";
// const hardcoded_pass = "coolaman";

export function AuthProvider({ children }){

    
    // const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuth] = useState(false);



    const [user, setUser] = useState(()=>{
        const extracted = localStorage.getItem("user");

        if(extracted){
            setIsAuth(true);
            return JSON.parse(extracted);
        }else{
            return null
        };
    });

    const updateUser = (user)=>{
        setUser(user)
    }

    //returns a boolean: true when the login succeeded
    const login = async (email, password)=>{

        let response;

        try{
            response = await fetch(`${API}/login_with_cookies`, {
                method:"POST",
                // include credentials for cookies
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email, password})
            })
        }
        catch(err){
            //network failure - the server never answered
            toast.error("Unable to connect to the server");
            return false;
        }

        // some routes still reply with plain text, so read once and try to parse
        const raw = await response.text();
        let data;
        try{
            data = JSON.parse(raw);
            console.log(data)
        }
        catch{
            data = { message: raw };
        }

        if(!response.ok){
            //must be a string - passing the Response object crashes the toast
            toast.error(data.message || "Login failed");
            return false;
        }

        console.log(data)

        setUser(data.user);

        localStorage.setItem("token", data.token)


        localStorage.setItem("user", JSON.stringify(data.user))

        setIsAuth(true);
        toast.success(data.message || "Logged in");

        return true;
    }

    const logout = ()=>{
        //logout route 


        setUser(null);
        setIsAuth(false);
        localStorage.removeItem("user")
    }
    const value = {
        user, 
        //flag 
        isAuthenticated,
        login,
        logout,
        updateUser
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