import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { filename } = body;
  const filePath = path.join(process.cwd(), "files", filename + ".json");

  try {
    fs.unlinkSync(filePath);
    return NextResponse.json({ message: "File deleted" }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "File not found", error },
      { status: 404 }
    );
  }
}
