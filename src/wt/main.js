import { cpus } from "node:os";
import { Worker } from "worker_threads";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "worker.js");
const start = 10;
const stResolve = "resolved";
const stError = "error";

export const performCalculations = async () => {
  const calcFb = (workerData) => {
    return new Promise((resolve) => {
      const worker = new Worker(filePath, { workerData });

      worker.on("message", (data) => resolve({ status: stResolve, data }));
      worker.on("error", (data) => resolve({ status: stError, data: null }));
    });
  };

  for (let index = 0; index < cpus().length; index++) {
    console.log(await calcFb(start + index));
  }
};

await performCalculations();
