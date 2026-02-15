import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    try {
        const { userName, email, password, phone } = req.body;

        // Validation
        if (!userName || !email || !password || !phone) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check existing user
        const existingUser = await User.findOne({
            $or: [{ email }, { userName }, { phone }]
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword,
            phone
        });

        // Remove password from response
        const userResponse = {
            _id: newUser._id,
            userName: newUser.userName,
            email: newUser.email,
            phone: newUser.phone
        };

        return res.status(201).json({
            message: "User created successfully",
            user: userResponse
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
};


export const loginUser= async (req,res)=>{
    try {
        const {email,password}=req.body;
        
        //basic validation
        if(!email || !password){
            return res.status(400).json({
                message:"email and password are required"
            })
        }


        //check user exists or not
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"invalid email"
            })
        }
       //verify password using model method
        const isPasswrdValid= await user.isPasswordCorrect(password)


        if(!isPasswrdValid){
            return res.status(401).json({
                message:"Invalid Credentials"
            })
        }

        //Generate Tokens
        const accessToken= user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        //save refresh token in DB
        user.refreshToken=refreshToken;
        await user.save({validateBeforeSave:false})

        //cokkie configuration
        const cookieOptions={
            httpOnly:true,
            secure:true,
            sameSite:"Strict"
        }

        return res
        .status(200)
        .cookie("refreshToken",refreshToken,cookieOptions)
        .json({
            message:"user logged in successfully",
            accessToken
        })
    } catch (error) {
        return res.status(500).json({
            message: "error logging in user",
            error:error.message
        })
    }
}
