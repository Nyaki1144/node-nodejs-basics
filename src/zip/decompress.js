import path from "node:path";
import url from "node:url";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "files", "fileToCompress.txt");
const gzpath = path.join(__dirname, "files", "archive.gz");

export const decompress = async () => {
  const gunzip = createGunzip();
  const rdFileStream = createReadStream(gzpath);
  const wrFileStream = createWriteStream(filepath);

  await pipeline(rdFileStream, gunzip, wrFileStream, (err) => {});
};

decompress();
