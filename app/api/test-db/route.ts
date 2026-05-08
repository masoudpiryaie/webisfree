import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { isValidEmail } from "@/lib/validations";
import type { ContactMessage } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Email is not valid." },
        { status: 400 },
      );
    }

    const contactMessage: ContactMessage = {
      name,
      email,
      message,
      createdAt: new Date(),
    };

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    await db.collection("messages").insertOne(contactMessage);

    return NextResponse.json(
      { message: "Message saved successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 },
    );
  }
}
