import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { filename, content } = body;
  const filePath = path.join(process.cwd(), "files", filename + ".json");

  console.log(filePath);

  fs.writeFileSync(filePath, JSON.stringify(content));
  return NextResponse.json({ message: "File created" }, { status: 200 });
}
