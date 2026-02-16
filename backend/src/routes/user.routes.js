import express from 'express';
import { loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/auth.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';

const router =express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);


//secure routes
router.post('/refresh-token',refreshAccessToken)
router.post('/logout',verifyJWT,logoutUser)


export default router;