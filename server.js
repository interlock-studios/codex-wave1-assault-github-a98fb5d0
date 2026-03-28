const http = require("http");
const port = Number(process.env.PORT || 10000);
const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, label: "codex-wave1-assault github repo push" }));
    return;
  }
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("codex-wave1-assault github repo push");
});
server.listen(port);