import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url =
  "mongodb+srv://sukeshhegde994591:12345@cluster0.mh8ggst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected using mongoose");
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err);
  }
};


