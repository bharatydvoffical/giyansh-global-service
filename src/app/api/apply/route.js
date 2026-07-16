import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    success: true,
    status: "OK",
  });
}

    // Lazy-import the DB client so the module is not evaluated at build-time.
    const { default: clientPromise } = await import("../../../../lib/mongodb");

    let client;
    try {
      client = await clientPromise;
    } catch (dbErr) {
      console.error("Database not configured:", dbErr);
      return NextResponse.json(
        { success: false, message: "Database not configured. Please try later." },
        { status: 503 }
      );
    }

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
