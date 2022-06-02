import fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';

export const list = async () => {
  const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
  const filesPath = path.join(__dirname, "files");

  fs.access(filesPath)
  .then((res, rej) => fs.readdir(filesPath))
  .then((res, rej) => {
    res.forEach(element => {
      console.log(element)
    });
  })
  .catch((res, rej) => {
    console.error('FS operation failed')
  })
};
