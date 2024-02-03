import { connect } from '../../../dbconfig/dbconfig.js'
import User from '../../../models/user.model'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { response } from 'express';


connect();

export async function POST(request, response) {
    try {

        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        const user = await User.findOne({ email })
        if (!user) {
            return response.json({ error: "user already exists" }, { status: 400 })
        }
            console.log('user Exists');
            const validPassword = await bcryptjs.compare(password, user.password)
            if (!validPassword) {
                return response.json({ error: "Invalid password" }, { status: 400 })
            }
            console.log(user);

            const tokenData = {
                id: user._id,
                username: user.username,
                email: user.email
            }

            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })

            const response = response.json({
                message: "Login successful",
                success: true,
            })
            response.cookies.set("token", token, {
                httpOnly: true,

            })
            return response;
        }
     
    catch (error) {
        return response.json({ error: error.message }, { status: 500 })
    }
}
