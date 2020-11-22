import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const { USER, PASSWORD, CLUSTER, DB } = process.env;

export const getConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.y3tsr.mongodb.net/${DB}`,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );

    console.log("> The database is connected sucessfull");
  } catch (error) {
    console.error(error);
  }
};
