import fs from "fs";
import path from "path";

export const readFileByDomain = (domain: string): string => {
  const filePath = path.join(process.cwd(), "data", `${domain}.json`);
  return fs.readFileSync(filePath, "utf-8");
};
