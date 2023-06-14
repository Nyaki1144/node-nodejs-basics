import path from "path";
import fs from "fs/promises";

const wrongFilename = path.resolve("files", "wrongFilename.txt");
const correctFilename = path.resolve("files", "properFilename.md");
const wrongMes = "FS operation failed";

export const rename = async () => {
  try {
    // const file = await fs.ex(correctFilename).catch(() => false);
    //    console.log(file);
    await fs.rename(wrongFilename, correctFilename);
  } catch (error) {
    throw new Error(wrongMes);
  }
};

rename();

//rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
