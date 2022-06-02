import fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';


export const remove = async () => {
    const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
    const filesPath = path.join(__dirname, "files" ,'fileToRemove.txt');

    fs.unlink(filesPath)
    .catch((res, rej) => {
       console.error('FS operation failed')
    })

};
