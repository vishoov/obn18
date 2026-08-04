import mongoose from 'mongoose';


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
        unique:true,
        match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        trim:true
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
}, {
    timestamps:true,
    versionKey:false
}
)


// pre to save event 
userSchema.pre('save', function (){
    const start = "thisisasecurestring___";
    const end = "___thisstringendshere";

    
    this.password = start+this.password+end;

});

//this is where the data is being saved 
const User = mongoose.model("User", userSchema);

export default User;