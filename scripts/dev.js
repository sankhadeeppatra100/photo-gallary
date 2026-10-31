import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const isWindows = process.platform === 'win32';
const node = process.execPath;
const children = [];
let stopping = false;

function start(label, args, cwd) {
  const child = spawn(node, args, { cwd, stdio: 'inherit' });
  children.push(child);
  child.on('error', (error) => {
    console.error(`[${label}] Could not start: ${error.message}`);
    stop(1);
  });
  child.on('exit', (code) => {
    if (!stopping) {
      console.error(`[${label}] stopped${code ? ` with exit code ${code}` : ''}.`);
      stop(code || 0);
    }
  });
}

function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) {
    if (child.exitCode === null) {
      if (isWindows) spawn('taskkill', ['/pid', String(child.pid), '/t', '/f'], { stdio: 'ignore' });
      else child.kill('SIGTERM');
    }
  }
  process.exitCode = code;
}

process.on('SIGINT', () => stop(0));
process.on('SIGTERM', () => stop(0));

console.log('Starting Photo Gallery API and web app. Press Ctrl+C to stop both.');
console.log('Make sure the MongoDB service is running.');

start('api', [resolve(projectRoot, 'server/node_modules/nodemon/bin/nodemon.js'), 'src/server.js'], resolve(projectRoot, 'server'));
start('web', [resolve(projectRoot, 'node_modules/vite/bin/vite.js')], projectRoot);
