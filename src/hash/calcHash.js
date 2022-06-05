import fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';
import crypto from 'crypto';

export const calculateHash = async () => {
    const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
    const filesPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  
    const changedFile = (await fs.readFile(filesPath)).toString();

    const hash = crypto.createHash('sha256');
    const calcHash = hash.update(changedFile).digest('hex');

    return calcHash
};
