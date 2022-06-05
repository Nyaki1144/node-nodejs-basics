import fs from 'fs';
import   zlib   from 'zlib';
import path from 'path';

export const decompress = async () => {
    const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
    const filesPath = path.join(__dirname, 'files');

    const gzip = zlib.createGunzip();

    const input = fs.createReadStream(path.join(filesPath, 'fileToCompress.txt.gz'));
    const output = fs.createWriteStream(path.join(filesPath, 'fileToCompress.txt'));
  
    input.pipe(gzip).pipe(output)
};