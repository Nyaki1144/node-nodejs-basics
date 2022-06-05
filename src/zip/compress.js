import fs from 'fs';
import   zlib   from 'zlib';
import path from 'path';

export const compress = async () => {
    const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
    const filesPath = path.join(__dirname, 'files');

    const gzip = zlib.createGzip();

    const input = fs.createReadStream(path.join(filesPath, 'fileToCompress.txt'));
    const output = fs.createWriteStream(path.join(filesPath, 'fileToCompress.txt.gz'));
  
    input.pipe(gzip).pipe(output)
};

