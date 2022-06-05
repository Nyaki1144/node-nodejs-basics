import { fork } from "child_process";
import path from 'path';
import { URL } from 'url';

const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
const filesPath = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
  fork(`${filesPath}`, args);
};

const argument = process.argv;
spawnChildProcess(argument);