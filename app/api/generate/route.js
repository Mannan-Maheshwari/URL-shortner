import { getDb } from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { db } = await getDb(); // Already the database
    const collection = db.collection("urls");

    const body = await request.json();

    const existing = await collection.findOne({ shortUrl: body.shortUrl });
    if (existing) {
      return Response.json({ success: false, error: true, message: "Short URL exists" }, { status: 409 });
    }

    await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
      createdAt: new Date(),
    });

    return Response.json({ success: true, error: false, message: "URL generated successfully" }, { status: 201 });
  } catch (err) {
    console.error("POST /api/generate error:", err);
    return Response.json({ success: false, error: true, message: "Internal server error" }, { status: 500 });
  }
}
