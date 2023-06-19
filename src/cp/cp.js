import { fork } from "child_process";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "script.js");

export const spawnChildProcess = async (args) => {
  const chidren = fork(filePath, args, { silent: true });

  process.stdin.pipe(chidren.stdin);
  chidren.stdout.pipe(process.stdout);
};
spawnChildProcess();
