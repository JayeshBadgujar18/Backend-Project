import dotenv from "dotenv";
import { fileURLToPath } from "url";
import connectDB from "./db/index.js";


const envPath = fileURLToPath(new URL("../.env", import.meta.url));

dotenv.config({
  path: envPath
});

(async () => {
    await connectDB();
})();

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
        dbName: DB_NAME
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);

  }
})()

*/