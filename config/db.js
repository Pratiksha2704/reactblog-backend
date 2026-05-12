import mongoose from "mongoose";//mongoose(ODM) library used in node to interract with mongodb,, create schema

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/reactblog");// it connects app to the mongodb,,27017:default port rectblog is db name

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

export default connectDB;//allows the function is used in another file