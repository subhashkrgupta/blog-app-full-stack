import express from "express";
import userRoute from './routes/user.routes.js';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

 app.use('/api/v1',userRoute);

export default app;
