import { User } from "../models/user.model.js";


export const registerUser = async (req, res) => {
  try {
    const { userName, email, password, phone } = req.body;

    // Basic validation
    if (!userName || !email || !password || !phone) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { userName }, { phone }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Create new user (password auto-hashed by model)
    const user = await User.create({
      userName,
      email,
      password,
      phone,
    });

    // Generate tokens
    // const accessToken = user.generateAccessToken();
    // const refreshToken = user.generateRefreshToken();

    // user.refreshToken = refreshToken;
    // await user.save({ validateBeforeSave: false });

    // Remove password from response
    // const createdUser = await User.findById(user._id).select("-password -refreshToken");

    return res.status(201).json({
      message: "User registered successfully",
    //   user: createdUser,
    //   accessToken,
    //   refreshToken,
        user
    });

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while registering user",
      error: error.message,
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
