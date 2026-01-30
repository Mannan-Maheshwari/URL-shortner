import { redirect } from "next/navigation";
import { getDb } from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = await params;

  const { db } = await getDb();
  const collection = db.collection("urls");

  const doc = await collection.findOne({ shortUrl: shorturl });

  if (doc) {
    redirect(doc.url);
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST || "http://localhost:3000");
  }

  return null;
}
