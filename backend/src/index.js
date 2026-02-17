import express from "express";
import userRoute from './routes/user.routes.js';
import cookieParser from 'cookie-parser'


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Backward compatible mounts:
// - `/api/v1/register` (existing)
// - `/api/v1/users/register` (used by frontend)
app.use('/api/v1', userRoute);
app.use('/api/v1/users', userRoute);


export default app;
