import fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';

export const copy = async () => {
  const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
  const filesPath = path.join(__dirname, 'files');
  const copyFilesPath = path.join(__dirname, 'files_copy');

  fs.access(filesPath)
  .then((res, rej) => {})
  .catch(() => console.error('FS operation failed'))

  fs.mkdir(copyFilesPath)
  .then(() => fs.readdir(filesPath))
  .then((res, rej) => {
    res.forEach(el => {
      fs.readFile(path.join(filesPath, el))
      .then((res, rej) => {fs.writeFile(path.join(copyFilesPath, el), res)})
  });
  })
  .catch((res, rej) => console.error('FS operation failed'))
};