// Fetch API is a Promise-based interface for making HTTP Requests, its available in all modern browsers and nodejs 18+, requiring zero dependancies 

// Why is it used?
// server calls -> authentication, data loading, form submission, file uploading, chatting, interact
// fetch() is foundation layer for any 3rd party communication 
// fetch() is a building block for dynamic application 

const userlink ="https://api.github.com/users/vishoov";

const data = fetch(userlink)

data.then(info=>console.log(info))
console.log(data);

// fetch(link)=> Promise<Pending> => Response => Response.json() => Promise<data>-> then -> data handle

// Response object -> the data recieved from the server 
//Properties
// response.status -> status code tells us about the response status
// response.statusText -> 'OK', "Not FOund", "Error" etc 
// response.ok -> true if status 200-299 else false 



// Fetch API Usage

// Options 
const getData = fetch('https://api.com/route', {
    // this holds the options 
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({email:"vishoo@gmail.com", password:"haha#123"})
})

// Method -> GET , POST, PUT, PATCH, DELETE
// Headers :{'Content-Type':"application/json"}
// Body: email, password 

