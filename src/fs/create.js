import fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';



export const create = async () => {
    const  __dirname = decodeURI(new URL('.', import.meta.url).pathname)
    const filesPath = path.join(__dirname, 'files', 'fresh.txt');
  
   fs.access(filesPath)
   .then((rej, res) => {console.error('FS operation failed')})
   .catch((rej, res) => {fs.writeFile(filesPath, 'I am fresh and young')})
};