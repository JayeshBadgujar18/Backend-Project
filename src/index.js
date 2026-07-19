import dns from "node:dns";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import connectDB from "./db/index.js";
import app from "./app.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);


const envPath = fileURLToPath(new URL("../.env", import.meta.url));

dotenv.config({
  path: envPath
});

    await connectDB()
    .then(() => {
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000 }`);
      })
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });


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