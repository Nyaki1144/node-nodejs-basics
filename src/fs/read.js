import path from "node:path";
import fs from "fs/promises";

const pathDirname = path.resolve("files", "fileToRead.txt");
const wrongMes = "FS operation failed";

export const read = async () => {
  try {
    const data = await fs.readFile(pathDirname, "utf-8", { flag: "r+" });
    console.log(data);
  } catch (error) {
    throw new Error(wrongMes);
  }
};

read();

//read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
