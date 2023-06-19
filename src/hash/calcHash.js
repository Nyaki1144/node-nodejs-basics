import { createHmac } from "node:crypto";
import path from "node:path";
import fs from "fs/promises";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileDir = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

export const calculateHash = async () => {
  try {
    const data = await fs.readFile(fileDir, "utf8");

    const hash = createHmac("sha256", data).digest("hex");

    console.log(hash);
  } catch (error) {
    console.log(error.message);
  }
};
calculateHash();
