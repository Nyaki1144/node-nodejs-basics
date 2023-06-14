import path from "path";
import fs from "fs/promises";

const dirPath = path.resolve();
const copyDir = "files_copy";
const wrongMes = "FS operation failed";

export const copy = async () => {
  try {
    await fs.cp(path.join(dirPath, "files"), path.join(dirPath, copyDir), {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (error) {
    throw new Error(wrongMes);
  }
};

copy();
//copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
