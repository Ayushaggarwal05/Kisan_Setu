const mongoose = require("mongoose");

let isConnected = false;

const connectDb = async () => {
  if (isConnected) {
    console.log("♻️ Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    // Don't call process.exit() in serverless — it kills the function
    throw error;
  }
};

module.exports = connectDb;