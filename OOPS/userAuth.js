class User{
    #password
    #isLoggedIn
    // name, email, #password, 
    // #isLoggedIn
    constructor(){

        this.#isLoggedIn=false;
        this.name = ""
        this.email=""
        this.#password = ""

    }


    signup(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }


    changePassword(oldPassword, newPassword, confirmPassword){

    }

    login(email, password){
        if(this.email!==email){
            console.log('invalid email')
            return
        }else{
            if(password !== this.#password){
                console.log('invalid password')
                return
            }else{
                this.#isLoggedIn = true;
                console.log('User Loggedin successfuly')
            }
        }
    }

    logout(){
        if(this.#isLoggedIn==true){
            this.#isLoggedIn=false
            console.log('user logged out successfully')
        }else{
            console.log('User not logged in ')
        }
        
    }

    #getStatus(){
        return this.#isLoggedIn
    }


    postUpdate(text){
        //check if used is logged in 
        if(this.#getStatus()==false){
            console.log('log in first')
            return
        }
        
        console.log(`${this.name} posted a status: ${text}`)
        

    }

 isAdmin(){
        if(this.role=='admin'){
            console.log('this user is an admin')
        }else{
            console.log('this user is not an admin')
        }
    }
    //signup
    getStatus(){
        console.log(`this method is from user class and the role is ${this.role}`)
    }
}

class Admin extends User{
    constructor(){
        super();
        this.role = 'admin'
    }

}


// const nitin = new User();
// nitin.signup('nitin@gmail.com', 'nitin123')
// console.log(nitin)
// nitin.login('nitin@gmail.com', 'Secret@123')
// nitin.postUpdate('travelling to goa!')
// nitin.logout()



const adminNitin = new Admin();
adminNitin.signup('nitin', 'nitin@gmail.com', 'nitin@123')
// adminNitin.isAdmin()


const regular = new User();
regular.signup('abc', 'abc@gmail.com', 'abc@123')
// regular.isAdmin()

// customer
class Customer extends User{
    constructor(){
        super();
        this.role = 'customer'
    }

    // getStatus(){
    //     console.log(`This user is a verified ${this.role}`)
    // }
}
// seller

class Seller extends User{
    constructor(){
        super();
        this.role = 'seller'
    }

    getStatus(){
        console.log(`The role of this user is ${this.role}`)
    }
}

const customer = new Customer();
customer.signup('aman', 'aman@customer.com', 'amancool')
console.log(customer)
customer.getStatus()

const seller = new Seller();
seller.signup('roopansh', 'roopansh@gmail.com', 'roopenash123')
console.log(seller)
seller.getStatus()