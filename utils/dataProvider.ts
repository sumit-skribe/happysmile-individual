import fs from "fs";
import path from "path";
import { SiteData } from "../types/data";

export function getData(domain: string): SiteData {
  const filePath = path.join(process.cwd(), "files", `${domain}.json`);
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData) as SiteData;
}
