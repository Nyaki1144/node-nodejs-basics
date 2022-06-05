import * as os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { URL } from 'url';


export const performCalculations = async () => {
  const  __dirname = decodeURI(new URL('.', import.meta.url).pathname);
  const filesPath = path.join(__dirname, 'worker.js');

  const cores = os.cpus();
  const outArr = [];
  const promiseArr = [];
  let num = 10;

  cores.forEach((core, i) => {
    const obj = {
      status: 'core',
      data: null,
    };
    outArr.push(obj);
    const worker = new Worker(filesPath, {
      workerData: num,
    });
    promiseArr.push(new Promise(resolve => {
      worker.on('message', mess => {
        outArr[i].status = 'resolved';
        outArr[i].data = mess;
        resolve();
      });
      worker.on('error', err => {
        outArr[i].status = 'error';
        resolve();
      });
    }));
    num++;
  });

  Promise.all(promiseArr).then(() => console.log(outArr));

};

performCalculations();