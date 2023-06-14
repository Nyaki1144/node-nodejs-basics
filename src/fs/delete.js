import path from "node:path";
import fs from "fs/promises";

const pathFilename = path.resolve("files", "fileToRemove.txt");
const wrongMes = "FS operation failed";

export const remove = async () => {
  try {
    await fs.stat(pathFilename);
    await fs.rm(pathFilename, { force: true });
  } catch (error) {
    throw new Error(wrongMes);
  }
};

remove();
