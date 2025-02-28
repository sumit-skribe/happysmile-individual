import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { filename, content } = await request.json();
    console.log(filename, content);

    const filePath = path.join(process.cwd(), "files", filename + ".json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const modifiedData = {
      ...data,
      ...content,
    };

    fs.writeFileSync(filePath, JSON.stringify(modifiedData, null, 2));

    return NextResponse.json(
      { message: "Data modified successfully", data: modifiedData },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Error modifying data" },
      { status: 500 }
    );
  }
}
