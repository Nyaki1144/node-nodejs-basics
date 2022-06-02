import fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';

export const read = async () => {
    const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
    const filesPath = path.join(__dirname, "files" ,'fileToRead.txt');

    fs.readFile(filesPath, 'utf8')
    .then((res,rej)  => {console.log(res)})
    .catch((res, rej) => {
        console.error('FS operation failed')
    })  
};
