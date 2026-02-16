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

 app.use('/api/v1',userRoute);


export default app;
