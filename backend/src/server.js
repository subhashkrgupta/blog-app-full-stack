import dotenv from "dotenv";
import app from "./index.js";         
import { connectDB } from "./config/db.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Connect to Database
    await connectDB();

    // Start Server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error(" Failed to start server:", error.message);
    process.exit(1); 
  }
};

// Initialize
startServer();
