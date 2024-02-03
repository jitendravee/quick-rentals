import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide the required Username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please provide the required Email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide the required Password"],
        unique:true
    },
},
{
    timestamps: true,  
}
)

 const User  = mongoose.model('User',userSchema);

export default User;


