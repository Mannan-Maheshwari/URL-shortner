import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

async function test() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("URLShortner");
    console.log("Connected to DB:", db.databaseName);

    const result = await db.collection("urls").insertOne({ test: "ok" });
    console.log("Insert result:", result);
    await client.close();
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

test();
