/* Tiny local dev server for this site. No packages needed (uses only Node's built-in modules).
   Run:  npm run dev      (or:  node server.js)
   Options:  PORT=8080 npm run dev   |   node server.js --no-open   (don't open the browser)
   The page reloads automatically when you save a file. Stop with Ctrl + C. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const ROOT = __dirname;
let port = Number(process.env.PORT) || 5173;
const AUTO_OPEN = !process.argv.includes('--no-open');

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.pdf': 'application/pdf'
};

const clients = new Set();
const RELOAD_SNIPPET = '<script>new EventSource("/__reload").onmessage=function(){location.reload()}</script>';

const server = http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(req.url.split('?')[0]); } catch (e) { res.writeHead(400); return res.end('Bad request'); }

  if (urlPath === '/__reload') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write('\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  let file = path.resolve(path.join(ROOT, urlPath));
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) { res.writeHead(403); return res.end('Forbidden'); }
  try { if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html'); } catch (e) { /* handled below */ }

  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('404 Not found'); }
    const ext = path.extname(file).toLowerCase();
    let body = data;
    if (ext === '.html') body = Buffer.from(data.toString('utf8').replace('</body>', RELOAD_SNIPPET + '</body>'));
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  });
});

/* Live reload: tell open pages to refresh when files change */
let timer;
function changed() {
  clearTimeout(timer);
  timer = setTimeout(() => clients.forEach((c) => c.write('data: reload\n\n')), 150);
}
['index.html', 'about.html', 'services.html', 'products.html', 'portfolio.html', 'certificates.html', 'blogs.html', 'contact.html', 'css', 'js', 'assets'].forEach((p) => {
  const target = path.join(ROOT, p);
  try { fs.watch(target, { recursive: true }, changed); }
  catch (e) { try { fs.watch(target, changed); } catch (e2) { /* watching is optional */ } }
});

function openBrowser(url) {
  const cmd = process.platform === 'win32' ? `start "" "${url}"` : process.platform === 'darwin' ? `open "${url}"` : `xdg-open "${url}"`;
  exec(cmd, () => {});
}

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') { port += 1; server.listen(port); }
  else { console.error('Server error:', e.message); process.exit(1); }
});
server.on('listening', () => {
  const url = `http://localhost:${port}`;
  console.log(`\n  Re Create Technologies is running at ${url}\n  Press Ctrl + C to stop.\n`);
  if (AUTO_OPEN) openBrowser(url);
});
server.listen(port);
