import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.firstName || !data.lastName || !data.email) {
      return NextResponse.json(
        { success: false, message: "Please provide first name, last name, and email." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("applications");

    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Application Submitted Successfully",
      applicationId: result.insertedId,
    });
  } catch (error) {
    console.error("API /api/apply error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
