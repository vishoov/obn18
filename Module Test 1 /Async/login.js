function login(email, password){
    const data = fetch('https://linkinbio-hxpl.onrender.com/api/auth/login', {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email:email,
            password:password
        })
    });

    data.then(function(response){
        // Check if response is successful 
        if(!response.ok){
            console.log(response)
            throw new Error("Login Failed:", response.body.message);
        }

        return response.json();

    })
    .then(data=>{
        console.log("Login Successful");
        console.log(data.data.token);
        console.log(data.data.user);
    })
    .catch(err=>{
        console.log(err.message)
    })

    // data=> 
}


login('vishoo@gmail.com', 'StrongerPass@123')