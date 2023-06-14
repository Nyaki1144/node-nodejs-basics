import path from "node:path";
import fs from "fs/promises";

const pathDirname = path.resolve("files");
const wrongMes = "FS operation failed";

export const list = async () => {
  try {
    const names = await fs.readdir(pathDirname);
    console.log(test);
  } catch (error) {
    throw new Error(wrongMes);
  }
};

//list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

list();
