import { readFileSync } from "node:fs";
import path from "node:path";

// Scraped HTML fragments, read at build time.
export function readContent(file: string) {
  return readFileSync(path.join(process.cwd(), "content", file), "utf8");
}
