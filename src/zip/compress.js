import path from "node:path";
import url from "node:url";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "files", "fileToCompress.txt");
const gzpath = path.join(__dirname, "files", "archive.gz");

export const compress = async () => {
  const gzip = createGzip();
  const rdFileStream = createReadStream(filepath);
  const wrFileStream = createWriteStream(gzpath);

  await pipeline(rdFileStream, gzip, wrFileStream, (err) => {});
};

compress();
