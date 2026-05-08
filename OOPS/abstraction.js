// Abstraction -> we hide the internal details and show only the functionality to the user

class CreditCard{
    #cardNumber
    #cvv
    constructor(name, cardNumber, CVV){
        this.name = name;
        this.#cardNumber= cardNumber;
        this.#cvv= CVV
    }

    makePayment(amount){
        if(this.#validateDetails()){
            console.log('payment made')
        }else{
            console.log(`You are not ${this.name}`)
        }
    }
//getter
    getCardNumber(){
        console.log(`${this.#cardNumber}`)
    }
    // private: validateCard-> cardNumber >10 && cvv==3 

    #validateDetails(){
        if(this.#cardNumber.length==10 && this.#cvv.length ==3){
            return true;
        }else{
            return false;
        }
    }
}


const roopansh = new CreditCard('roopansh', '1909878988', '398')
roopansh.getCardNumber()

roopansh.makePayment(100)


// Product 
// name, price, stock
// order product 
// applyCoupon -> CYRIL10 -> true-> price-> 10%-> new price is or invalid coupon code 
// private method -> validateCouponCode -> const livecodes=['CYRIL10', 'WELCOME20', 'DISCOUNT'] -> true/false


