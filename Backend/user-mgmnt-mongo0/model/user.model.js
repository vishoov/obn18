import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:[true, "Name is mandatory"],
        minLength:[2, "Name must contain atleast 3 alphabets"],
        maxLength:[20, 'Name cannot exceed 20 alphabets'],
        // trim:true
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

                for(let i=0; i<password.length; i++){
                    const code = password[i];

                    if(code>='A' && code<='Z'){
                        hasUpperCase=true;
                        break;
                    }


                }
                return hasUpperCase
            },
            message:"Invalid Password"
        }
    }
}
)

const User = mongoose.model("User", userSchema);

export default User;