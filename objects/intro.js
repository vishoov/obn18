// Javascript objects are key-value maps where values can be data or functions as well

const user = {
    age:10,
    name:"Roopansh",
    isAdmin:false,
    greet:function(){
        console.log("Hello my name is roopansh")
    },
    address:{
        firstLine:"123, Kamla nagar",
        pincode:110007
    }
}


console.log(typeof(greet))

const userArr = [
    20,
    "name",
    110007,
    "123, delhi"
]

if(user.isAdmin){
    console.log("User is an admin and he can access hidden functionalities")
}else{
    console.log("Access Denied")
}

console.log(user.age, user.name)


// keys are working like identifiers of each property of the data




const hybrid = {
    number:1,
    boo:true,
    obj:{
        name:"Hello"
    },
    arr:[1,2,3,4,5,6],
    str:"Hello"
}

console.log(hybrid)


// Property is a key whose value is data
// Method is a key whose value is function


const car = {
    name:"Bugatti",
    sound:function(){
        console.log("Vroom")
    },
    sound:function(){
        console.log('sound')
    }
    
}

const cat = {
    name:"paws",
    sound:function(){
        console.log("Meow")
    }
}

car.sound()
cat.sound();

const user2 = [
    {
        sound:function(){
            console.log("car sound")
        }
    },
    {
        sound:function(){
            console.log("Cat sound")
        }
    }
]

user2.car.sound();
user2.cat.sound();

