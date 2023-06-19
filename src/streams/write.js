import stream from "stream/promises";
import fs from "fs";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
  try {
    const wrStream = fs.createWriteStream(
      path.join(__dirname, "files", "fileToWrite.txt"),
      { flags: "a" }
    );
    await stream.pipeline(process.stdin, wrStream);
  } catch (error) {
    console.log(error.message);
  }
};

write().catch((error) => console.log(error.message));
