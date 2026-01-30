import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Add MONGODB_URI to .env.local");

let cachedDb = null;
let cachedClient = null;

export async function getDb() {
  if (cachedDb && cachedClient) return { db: cachedDb, client: cachedClient };

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("URLShortner");

  cachedClient = client;
  cachedDb = db;

  return { db, client };
}
