import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// data validation 
const userSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:[true, "Name is mandatory"],
        minLength:[2, "Name must contain atleast 3 alphabets"],
        maxLength:[20, 'Name cannot exceed 20 alphabets'],
        trim:true
    },
    age:{
        type:Number,
        required:[true, "age is required"],
        min:1,
        max:60
    },
    
    email:{
        type: String,
        required:true,
        lowercase:true,
        match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        trim:true,
        unique:true
    },
    role:{
        type:String,
        enum:["User", "Admin", "Superadmin"],
        required:true,
        default:"User"
    },
    password:{
        type:String,
        required:[true, "Bina password no work"],
        minLength: 8,
        validate:{
            validator: function (password){
                password= password.trim();
                if(password.length<8){
                    return 'Password must be at least 8 characters long'
                }

                let hasUpperCase = false;
                let hasSpecialChar = false;
                let hasNumber = false;
                for(let i=0; i<password.length; i++){
                    const code = password[i];

                    if(code>='A' && code<='Z'){
                        hasUpperCase=true;

                    }

                    if(code =='@' || code=='#' || code=='$' || code=='%' || code=='&' || code=='*'){

                        hasSpecialChar=true;
                    } 
                    else if (code>='0' && code<='9'){
                        hasNumber=true;
                    }

                }
                return hasUpperCase && hasSpecialChar && hasNumber;
            },
            message:"Invalid Password"
        }
    }
    // cart:[
    //     {
    //         productID:{

    //         },
    //         title:{
                
    //         }
    //     }
    // ]
}, {
    timestamps:true,
    versionKey:false
}
)

userSchema.methods.comparePassword = async function(password){
    console.log('checking password')
    return await bcrypt.compare(password, this.password);
}

// password -> encrypt === db.password

userSchema.pre('validate', function(){
    console.log("This is the step before validation")
})

userSchema.post('validate', function(doc){
    console.log("Document has been validated");
    console.log("This is how the doc looks like ");
    console.log(doc);
})


// pre to save event 
userSchema.pre('save', async function(){
    //BCRYPT -> HASH
    // maggi -> maggi, salt, masala 
    // password + salt -> n rounds of hashing 
        // hashing logic
        // password -> this.password;
        // 1. generate the salt
        const salt = await bcrypt.genSalt(10);
        // 2. replace the password
        const newPassword = await bcrypt.hash(this.password, salt);
        this.password = newPassword;
    
});


userSchema.post('save', function(){
    console.log("final password after saving")
    console.log(this.password)
})

//this is where the data is being saved 
const User = mongoose.model("User", userSchema);

export default User;