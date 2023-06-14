import path from "node:path";
import fs from "fs/promises";

const filePath = path.resolve("files");
const fileName = "fresh.txt";
const data = "I am fresh and young";
const wrongMes = "FS operation failed";

export const create = async () => {
  try {
    await fs.writeFile(path.join(filePath, fileName), data, { flag: "wx" });
  } catch (error) {
    throw new Error(wrongMes);
  }
};

create();
