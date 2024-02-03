import { connect } from '../../../dbconfig/dbconfig.js'
import User from "@/models/userModel";

import bcryptjs from "bcryptjs";


connect();


export async function POST(request){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody);

        const user = await User.findOne({email})

        if(user){
            return response.json({error: "User already exists"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return response.json({
            message: "User created successfully",
            success: true,
            savedUser
        })




    } catch (error) {
        return response.json({error: error.message}, {status: 500})

    }
}