import fs from "fs"
import path from "path";
import process from 'process';


export const read = async () => {
    const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
    const filesPath = path.join(__dirname, 'files', 'fileToRead.txt');

    const readCreateFiles = fs.createReadStream(filesPath)

    readCreateFiles.on('data', (chunck) => {
        process.stdout.write(chunck.toString() + '\n')
    })
};