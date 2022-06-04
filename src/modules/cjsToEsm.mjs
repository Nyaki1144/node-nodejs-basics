import path from 'path';
import { release, version } from 'os'
import http  from 'http'

console.log(http.createServer)
// const { createServer: createServerHttp } = require('http');
// require('./files/c');
const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
const  __filename = path.join(__dirname, 'cjsToEsm.mjs');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject =  path.join(__dirname, 'files', 'a.json');
} else {
    unknownObject = path.join(__dirname, 'files', 'b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

