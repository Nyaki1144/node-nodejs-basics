import stream from "stream/promises";
import { Transform } from "stream";

export const transform = async () => {
  const reverse = (str) => str.split("").reverse().join("");

  const transformStream = new Transform({
    transform(chunk, encoding, cb) {
      cb(null, reverse(chunk.toString()));
    },
  });

  await stream.pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
