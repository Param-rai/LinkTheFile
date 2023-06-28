import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://paramrai:paramrai@linkthefile.ljwsttl.mongodb.net/";

export const DbConnection = () => {
  try {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true }).then(() => {
      console.log("Db is connected");
    });
  } catch (error) {
    console.error("Error while connecting with db", error.message);
  }
};
