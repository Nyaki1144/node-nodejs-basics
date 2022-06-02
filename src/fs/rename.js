import fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';

export const rename = async () => {
    const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
    const filesPath = path.join(__dirname, "files" ,'wrongFilename.txt');
    const renameFilesPath = path.join(__dirname, "files" ,'properFilename.md');

    fs.access(renameFilesPath)
    .then((res, rej) => console.error('FS operation failed'))
    .catch((res, rej) => fs.rename(filesPath, renameFilesPath))

};


rename()