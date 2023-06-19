import stream from "stream/promises";
import fs from "fs";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  try {
    await stream.pipeline(
      fs.createReadStream(path.join(__dirname, "files", "fileToRead.txt")),
      process.stdout
    );
  } catch (error) {
    console.log(error.message);
  }
};

read().catch((error) => console.log(error.message));
