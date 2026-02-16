import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
//    console.log("Authorization Header:", req.headers.authorization);

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized request",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    const user = await User.findById(decoded._id)
      .select("-password -refreshToken");

    if (!user) {
      return res.status(401).json({
        message: "Invalid access token",
      });
    }

    req.user = user;
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};
