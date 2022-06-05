import fs from "fs"
import path from "path";
import process from 'process';


export const write = async () => {
  const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
  const filesPath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const writeCreateFiles = fs.createWriteStream(filesPath)

  process.stdin.on('data', (data) =>{
    writeCreateFiles.write(data)
  });
};

write() 
